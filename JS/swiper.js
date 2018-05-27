! function () {
    var view = document.querySelector('.swiper-container')
    view.style.border = '1px solid red'

    var controller = {
        view: null,
        swiper: null,
        swiperOptions: {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
        init: function (view) {
            this.view = view
            this.swiper()
        },
        swiper: function () {
            this.swiper = new Swiper(view,
                this.swiperOptions
            )
        }
    }

    controller.init.call(controller, view)
}.call()