import gsap, { Linear } from 'gsap';
import { TweenMax } from '../../../node_modules/gsap/gsap-core';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);

function softPointsToCubic(points, target, curviness) {
    let result, getter, p1, p2, v1, v2, p, i, a, b, c, d, l;
    if (target) {
        a = {};
        getter = gsap.getProperty(target);
        for (p in points[0]) {
            a[p] = getter(p);
        }
        points = points.slice(0);
        points.unshift(a);
    }
    !curviness && curviness !== 0 && (curviness = 1);
    curviness *= 2 / 3; // how strongly it pulls toward the control points. Cubic Bezier control points are 2/3rds the distance to the quadratic point.
    d = points[0];
    result = [d];
    l = points.length - 1;
    for (i = 1; i < l; i++) {
        a = d;
        b = {};
        c = {};
        d = {};
        p1 = points[i];
        p2 = points[i + 1];
        for (p in a) {
            v1 = a[p];
            v2 = p1[p];
            b[p] = v1 + (v2 - v1) * curviness;
            d[p] = v1 = i === l - 1 ? p2[p] : (v2 + p2[p]) / 2;
            c[p] = v1 + (v2 - v1) * curviness;
        }
        result.push(b, c, d);
    }
    console.log(result);
    return result;
}

export default function initGallery() {
    const gallery = document.querySelector('.js-gallery');

    if (!gallery) return;

    const galleryImages = [...gallery.getElementsByTagName('img')];

    $(document).ready(function() {
        var amount = 30,
            indRotation = 360 / amount,
            element,
            elemContainer = $('.js-gallery'),
            btn1 = $('button#btn1'),
            path = [
                { x: 0, y: 0 },
                { x: 100, y: -100 },
                { x: 200, y: 0 },
                { x: 100, y: 100 },
                { x: 0, y: 0 }
            ],
            location = { x: path[0].x, y: path[0].y },
            tn1 = TweenMax.to(location, amount, {
                motionPath: {
                    path: path,
                    curviness: 1.5
                },

                ease: Linear.easeNone
            }),
            tn2 = TweenMax.to(elemContainer, 5, { rotation: 360, paused: true, ease: Linear.easeNone });

        for (let i = 0; i < amount; i++) {
            tn1.time(i);
            console.log(location.x + ' // ' + location.y);
            element = Object.assign(document.createElement('div'), {
                innerHTML: '1',
                id: 'element' + i,
                className: 'element'
            });
            elemContainer.append(element);
            TweenMax.set(document.querySelector('div#element' + i), { x: location.x, y: location.y + 100, rotation: indRotation * i - 90 });
        }

        btn1.click(function() {
            tn2.play(0);
        });
    });
}
