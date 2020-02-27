document.addEventListener("EasyNetShopLoaded", function (event) {
    $('.btn-ens-action, .easynetshop-buy').click(function () {

        // Отправляем в счетчик с номером 55671433 событие add - Добавление товара в корзину
        ym(55671433, 'reachGoal', 'add');
    });

}, false);

document.addEventListener("EasyNetShopModalOpened", function (event) {
    if ($('.easynetshop-modal-cart').css('display') != 'none') {

        // Отправляем в счетчик с номером 55671433 событие show - Открытие корзины для оформления заказа 
        ym(55671433, 'reachGoal', 'show');
    }

    if (($(".easynetshop-modal-ordercompleate .easynetshop-ok .easynetshop-continue").css('display') != 'none') && ($(".easynetshop-modal-ordercompleate").css('display') != 'none')) {

        // Отправляем в счетчик с номером 55671433 событие order - Успешный заказ
        ym(55671433, 'reachGoal', 'order');
    }

}, false);

document.addEventListener("EasyNetShopModalOpened", function (event) {
    $(function () {
        $('input[name="phone"]').mask('+7(000)000-00-00');
    });
}, false);

document.addEventListener("EasyNetShopLoaded", function (event) {
    var scr = document.createElement("script");
    scr.src = "https://lk.easynetshop.ru/catalog_export/export_bdc61ad2_0.js" + "?ts=" + new Date().getTime();
    document.getElementsByTagName("head")[0].appendChild(scr);
}, false);

document.addEventListener("EasyNetShopLoaded", function (event) {
    var selhtml = '';
    selhtml += '<div class="easynetshop-6 easynetshop-cb">Вид оплаты : </div>';
    selhtml += '<div class="easynetshop-6">';
    selhtml += '<select required class="easynetshop-customfield" name="Вид оплаты">'
    selhtml += '<option selected disabled>Не выбрано</option>'
    selhtml += '<option>Оплата наличными, без сдачи</option>';
    selhtml += '<option>Оплата наличными, необходима сдача</option>';
    selhtml += '<option>Оплата по карте</option>';
    selhtml += '</select>';
    selhtml += '</div>';
    var fhtml = '';
    fhtml += '<div class="easynetshop-modal-body-self" style="padding:0px 20px;">';
    fhtml += ' <div class="easynetshop-div-group">';
    fhtml += selhtml;
    fhtml += ' </div>';
    fhtml += '</div>';
    ens_jQuery('.easynetshop-modal-cart .easynetshop-footer').before(fhtml);
}, false);

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    $('.scrollToTop, .menu-brand, .brand').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('.hamburger').click(function () {
        $(".menu").toggleClass("menu-show");
    });
    $('.nav li a').click(function () {
        $('.nav li a').removeClass('active');
        $(this).addClass('active');
        $('.wrap-hamburger input:checkbox').prop('checked', false);
        $(".menu").toggleClass("menu-show");
    });
    $('.nav a[href*="#"]').click(function (event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        /*
         * sc - в переменную заносим информацию о том, к какому блоку надо перейти
         * dn - определяем положение блока на странице
         */

        $('html, body').animate({
            scrollTop: dn
        }, 2000);

        /*
         * 1000 скорость перехода в миллисекундах
         */
    });
    $('.top-pic-info').click(function (event) {
        event.preventDefault();
        $('.card').removeClass('card-active');
        $(this).parents('.card').addClass('card-active');
        if ($(this).parents('.card').children('.alert').css('visibility') === 'hidden') {
            $(this).parents('.card').children('.alert').css('visibility', 'visible');
        } else {
            $(this).parents('.card').children('.alert').css('visibility', 'hidden');
            $(this).parents('.card').removeClass('card-active');
        }
    });
    $('.close').click(function (event) {
        event.preventDefault();
        if ($(this).parents('.card').children('.alert').css('visibility') === 'visible') {
            $(this).parents('.card').children('.alert').css('visibility', 'hidden');
        };
    });
    $('.card-item__btn-dough').on('click', function() {
        $(this).parents('.card').find('.card-item__btn-dough').removeClass('active');
        if(!$(this).hasClass('active')) {
            $(this).addClass('active');
        }
    });
    $('.card-item__btn-dough:first-child').click(function (event) {
        event.preventDefault();
        $(this).parents('.card').find('.shop .quantity_first').css('display', 'flex');
        $(this).parents('.card').find('.shop .quantity_following').css('display', 'none');
    });
    $('.card-item__btn-dough:last-child').click(function (event) {
        event.preventDefault();
        $(this).parents('.card').find('.shop .quantity_following').css('display', 'flex');
        $(this).parents('.card').find('.shop .quantity_first').css('display', 'none');
    });

});
