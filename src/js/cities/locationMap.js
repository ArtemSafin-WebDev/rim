export default () => {
    const elements = document.querySelectorAll('.js-location-map');

    elements.forEach(element => {
        ymaps.ready(initContactsMap);

        function initContactsMap() {
            const zoom = window.locationZoom ?? 15,
                center = window.locationCenter,
                mainCoords = window.mainCoords,
                mediaQuery = window.matchMedia('(max-width: 640px)').matches,

                mapInstance = new ymaps.Map(element, {
                    center: center,
                    zoom: zoom,
                    controls: []
                }),

                objectManager = new ymaps.ObjectManager({
                    clusterize: false,
                    clusterDisableClickZoom: true
                });

            const MainMarkerLayout = ymaps.templateLayoutFactory.createClass([
                '<span class="mapItem $[properties.type] sides-$[properties.num_sides] $[properties.class] $[properties.brand_value]" data-id="$[id]" data-angle="$[properties.angle]" data-angles=\'$[properties.angles]\' title="$[properties.code]"></span>'
            ].join(''));

            // zoom controls start: ==========================================>
            const  ZoomLayout = ymaps.templateLayoutFactory.createClass(
                "<div class='zoom-btns'>" +
                "<div id='zoom-in' class='zoom-in-btn'><i class='icon-plus'></i></div>" +
                "<div id='zoom-out' class='zoom-in-btn'><i class='icon-minus'></i></div>" +
                "</div>", {

                    // Переопределяем методы макета, чтобы выполнять дополнительные действия
                    // при построении и очистке макета.
                    build: function () {
                        // Вызываем родительский метод build.
                        ZoomLayout.superclass.build.call(this);

                        // Привязываем функции-обработчики к контексту и сохраняем ссылки
                        // на них, чтобы потом отписаться от событий.
                        this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                        this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

                        // Начинаем слушать клики на кнопках макета.
                        $('#zoom-in').bind('click', this.zoomInCallback);
                        $('#zoom-out').bind('click', this.zoomOutCallback);
                    },

                    clear: function () {
                        // Снимаем обработчики кликов.
                        $('#zoom-in').unbind('click', this.zoomInCallback);
                        $('#zoom-out').unbind('click', this.zoomOutCallback);

                        // Вызываем родительский метод clear.
                        ZoomLayout.superclass.clear.call(this);
                    },

                    zoomIn: function () {
                        var map = this.getData().control.getMap();
                        map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
                    },

                    zoomOut: function () {
                        var map = this.getData().control.getMap();
                        map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
                    }
                });
            const zoomControl = new ymaps.control.ZoomControl({
                options: {
                    position: {
                        top: '50dvh',
                        right: 'var(--content-padding, 4rem)',
                    },
                    layout: ZoomLayout
                }
            });
            mapInstance.controls.add(zoomControl);
            // <================================================= zoom end start

            if (mediaQuery) {
                mapInstance.behaviors.disable('drag');
                mapInstance.behaviors.enable('MultiTouch');
            }

            ymaps.option.presetStorage.add('billboard#icon', { // Шаблон иконки на карте
                iconLayout: ymaps.templateLayoutFactory.createClass('<span class="mapItem $[properties.type] sides-$[properties.num_sides] $[properties.class] $[properties.brand_value]" data-id="$[id]" data-angle="$[properties.angle]" data-angles=\'$[properties.angles]\' title="$[properties.code]"></span>'),
                iconPane: 'overlaps',
            });
            ymaps.option.presetStorage.add('billboardActive#icon', { // Шаблон активной иконки на карте
                iconLayout: ymaps.templateLayoutFactory.createClass('<span class="mapItem $[properties.type] sides-$[properties.num_sides] $[properties.class] $[properties.brand_value]" data-id="$[id]" data-angle="$[properties.angle]" data-angles=\'$[properties.angles]\' title="$[properties.code]"></span>'), // class  balloonOpened
                iconPane: 'overlaps',
            });

            // objectManager.objects.options.set('iconLayout', MainMarkerLayout);
            mapInstance.geoObjects.add(objectManager);
            objectManager.objects.options.set('preset', 'billboard#icon');
            objectManager.objects.options.set('hideIconOnBalloonOpen', false);

            objectManager.objects.events.add('click', function (e) {
                const objectId = e.get('objectId');
                getBalloonData(objectId).done(function (data) {
                    const object = objectManager.objects.getById(objectId);
                    object.properties.balloonContent = data;

                    // Открываем балун на этом элементе
                    objectManager.objects.balloon.open(objectId);
                });
            });

            $.ajax({
                url: "/map_data/khabarovskiy_kray/khabarovsk.json"
            }).done(function(data) {
                objectManager.add(data.map);
            });
        }
    });

    $(document).on("click", ".mapInfo__tabs a", function(){
        var sideId = $(this).data("id");
        var TypeSurface = parseInt( $(this).data("type-surface"));
        var objectId = $(this).parents(".mapInfo").data("id");
        var angle = $(this).data("angle");
        if(TypeSurface == 96){
            $(".mapItem[data-id='"+objectId+"']").addClass("d");
        } else {
            $(".mapItem[data-id='"+objectId+"']").removeClass("d");
        }

        $(".mapItem[data-id='"+objectId+"']").attr("data-angle",angle);


        showBalloonTab(objectId, sideId);
        // setOpened(objectId, sideId);
    });

    // Функция, осуществляющая запрос за данными балуна на сервер.
    function getBalloonData(objectId) {
        var dataDeferred = ymaps.vow.defer();

        $.ajax({
            url: '/geography/map/balloon-item.php',
            type: 'GET',
            dataType: 'html',
            data: {
                ID: objectId
            },
        }).done(function (data) {
            if(!document.querySelectorAll("[data-point='" + objectId + "']").length) {
                $.ajax({
                    url: '/geography/map/map-item.php',
                    type: 'POST',
                    dataType: 'html',
                    cache: !1,
                    data: {
                        "objectId" : objectId
                    },
                    beforeSend: function() {
                    },
                    success: function(data) {
                        $(".mapFilterResult__body").find("tbody").prepend(data);
                    }
                });
            }
            $(".mapBillboard .wait").hide();
            dataDeferred.resolve(data);
        });

        return dataDeferred.promise();
    }

    function showBalloonTab(objectId, sideId) {
        if(sideId != undefined) {
            setTimeout(function() {
                var angles = $(".mapItem[data-id='" + objectId + "']").data("angles");
                $(".mapItem[data-id='" + objectId + "']").attr("data-angle", angles[sideId]);

                $(".mapInfo__content.mapInfo-" + objectId).find(".balloonTab").hide();
                $(".mapInfo__content.mapInfo-" + objectId).find(".balloonTab-" + sideId).show();

                $(".mapInfo__content.mapInfo-" + objectId).find(".mapInfo__tabs a").removeClass("active");
                $(".mapInfo__content.mapInfo-" + objectId).find(".mapInfo__tabs a[data-id='" + sideId + "']").addClass("active");

                $(".mapInfo__content.mapInfo-" + objectId).parents(".mapInfo").parent().parent().css("height", "auto");
            }, 500);
        }
    }
}
