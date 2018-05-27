! function () {
    view = document.querySelector('.topNavBar')
    view.style.border = '1px solid red'
    var controller = {
        view: null, //开始为空的       
        init: function (view) {
            this.view = view //存在自己的view里           
            this.bindEvents() //绑定事件 
        },
        bindEvents: function () {
            var view = this.view
            window.addEventListener('scroll', ()=>{
                if (scrollY > 0) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
        },
        active:function(){
            this.view.classList.add('sticky')
        },
        deactive:function(){
            this.view.classList.remove('sticky')            
        }
    }
    controller.init(view)//controller.init.call(controller.view)
}.call()