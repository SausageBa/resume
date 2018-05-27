! function () {
    var view = document.querySelectorAll('nav.menu > ul > li')
    var controller = {
        view : null,
        init : function(view){
            this.view = view
            this.bindEvents()
        }, 
        bindEvents : function(){
            view = this.view
            for (let i = 0; i < view.length; i++) {
                view[i].onmouseenter =  (x)=>{
                    this.active(x)
                }
                view[i].onmouseleave = (x)=>{
                    this.deactive(x)
                }
            }
        },
        active : function(x){
            x.currentTarget.classList.add('active')
        },
        deactive : function(x){
            x.currentTarget.classList.remove('active')            
        }
    }
    controller.init.call(controller, view)
}.call()