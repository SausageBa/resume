! function () {
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);
    var view = document.querySelector('nav.menu')
    view.style.border = '1px solid red'
    var controller = function () {
        let aTags = view.querySelectorAll(' ul > li > a ')
        for (i = 0; i < aTags.length; i++) {
            aTags[i].onclick = function (x) {
                x.preventDefault()
                let a = x.currentTarget
                let href = a.getAttribute('href')
                let element = document.querySelector(href)
                let top = element.offsetTop
                let currentTop = window.scrollY //当前的高度
                let targetTop = top - 60 //目标位置的高度
                var coords = {
                    y: currentTop
                };
                var tween = new TWEEN.Tween(coords)
                    .to({
                        y: top - 60
                    }, 1500)
                    .easing(TWEEN.Easing.Bounce.Out)
                    .onUpdate(function () {
                        window.scrollTo(0, coords.y)
                    })
                    .start();
            }
        }
    }
    controller.call(undefined, view)
}.call()