var arrLang = {
    'en' : {
        'language': 'En',
        'subjects' : 'Subjects',
        'choose_subject' : 'Choose subjects',
        'search' : 'Search',
        'main' : 'Main',
        'download' : 'Download',
        'history' : 'History',
        'first_name_D' : 'Danil Kazakov',
        'first_name_N' : 'Nikita Timoshenko',
    },
    'ru' : {
        'language': 'Ru',
        'subjects' : 'Предметы',
        'choose_subject' : 'Выбрать предмет',
        'search' : 'Поиск',
        'main' : 'Главная',
        'download' : 'Скачать',
        'history' : 'История',
        'first_name_D' : 'Данил Казаков',
        'first_name_N' : 'Никита Тимошенко',
    }
};
$(function() {
    var lang = getLanguage()
    console.log(lang)
    if (lang != 'en' && lang != 'ru') {
        lang = 'en'
    };
    $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
    });
});

$(function() {
    $('.dropdown-item').click(function() {
        var lang = getLanguage()

        $('.lang').each(function(index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});

function setLanguageRu() {
    myStorage = window.localStorage;
    localStorage.setItem('Language', 'ru');
}
function setLanguageEn() {
    myStorage = window.localStorage;
    localStorage.setItem('Language', 'en');
}
function getLanguage() {
    myStorage = window.localStorage;
    var lang = localStorage.getItem('Language');
    return lang;
}