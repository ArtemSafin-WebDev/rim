window.Parsley.addValidator('requiredIfChecked', {
    requirementType: 'string',
    validateString: function (value, requirement) {
        const checkbox = document.querySelector(requirement);

        if (!checkbox) {
            return false;
        }

        if (checkbox.checked && !value.trim()) {
            return false;
        }

        return true;
    },
    messages: {
        en: 'Error',
        ru: 'Заполните поле',
    },
    priority: 33,
});

window.Parsley.addValidator('phone', {
    requirementType: 'string',
    validateString: function (value) {
        if (value.trim() === '') return true;
        return /^(\+7|7|8)?[\s\-]?\(?[123456789][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(value);
    },
    messages: {
        en: 'Error',
        ru: 'Введите номер телефона',
    },
});

window.Parsley.addValidator('email', {
    requirementType: 'string',
    validateString: function (value) {
      if (value.trim() === '') return true;
      return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
    },
    messages: {
      en: 'Error',
      ru: 'Введите email',
    },
});

window.Parsley.addValidator('reqtext', {
    requirementType: 'string',
    validateString: function (value) {
      if (value.trim() === '') return true;
      return /^[А-Яа-яЁёA-Za-z]+$/.test(value);
    },
    messages: {
      en: 'Error',
      ru: 'Заполните поле',
    },
});


Parsley.addMessages('ru', {
    defaultMessage: 'Заполните поле',
    type: {
        email: 'Введите email',
        url: 'Адрес сайта введен неверно.',
        number: 'Введите число.',
        integer: 'Введите целое число.',
        digits: 'Введите только цифры.',
        alphanum: 'Введите буквенно-цифровое значение.',
    },
    notblank: 'Это поле должно быть заполнено.',
    required: 'Заполните поле',
    pattern: 'Ошибка',
    min: 'Ошибка',
    max: 'Это значение должно быть не более чем %s.',
    range: 'Это значение должно быть от %s до %s.',
    minlength: 'Ошибка',
    maxlength: 'Это значение должно содержать не более %s символов.',
    length: 'Ошибка',
    mincheck: 'Выберите не менее %s значений.',
    maxcheck: 'Выберите не более %s значений.',
    check: 'Выберите от %s до %s значений.',
    equalto: 'Это значение должно совпадать.',
});

Parsley.addMessages('en', {
    defaultMessage: 'Error',
    type: {
        email: 'Error',
    },
    required: 'Error',
    pattern: 'Error',
    min: 'Error',
    minlength: 'Error',
    length: 'Error',
});

Parsley.setLocale('ru');

export default function validation() {
    const formsToValidate = Array.from(document.querySelectorAll('form[data-need-validation]'));

    formsToValidate.forEach((form) => {
        $(form).parsley();
    });
}
