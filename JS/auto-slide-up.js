! function () {
    window.sss = {name:'wyc'}
    let specialTags = document.querySelectorAll('[date-x]')
    for (i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }
    setTimeout(function () {
        findClosestAndRemoveOffset()
    }, 200)
    window.addEventListener('scroll', function () {
        findClosestAndRemoveOffset()
    })




    //helper
    function findClosestAndRemoveOffset() {
        let specialTags = document.querySelectorAll('[date-x]')
        let minIndex = 0 //看谁最近
        for (i = 1; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop -
                    window.scrollY)) {
                minIndex = i
            }
        }
        //minIndex就是离窗口顶部最近的元素
        specialTags[minIndex].classList.remove('offset')
        let id = specialTags[minIndex].id
        let a = document.querySelector('a[href="#' + id + '"]')
        let li = a.parentNode
        let brotherAndMe = li.parentNode.children
        for (let i = 0; i < brotherAndMe.length; i++) {
            brotherAndMe[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }
}.call()