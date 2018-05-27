! function () {
    var view = document.querySelector('section.message')
    var controller = {
        view : null,
        messageList: null,
        init: function (view) {
            this.view = view
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.initAV()
            this.loadMessages()
            this.bindEvents()
        },
        initAV: function () {
            var APP_ID = 'j4777E0qriD4Q05pdtRTPe00-gzGzoHsz'
            var APP_KEY = 'YQu8LNLpm2AO6jXnAnyv55n0'

            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        loadMessages: function () {
            var query = new AV.Query('Message');
            query.find().then(
                (messages) => {
                    var array = messages.map((items) => {
                        return items.attributes
                    })
                    array.forEach((item) => {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}:${item.content}`
                        this.messageList.appendChild(li)
                    })
                },
                function (error) {
                    // 异常处理
                });
        },
        bindEvents: function () {

            this.form.addEventListener('submit', (e) => {
                e.preventDefault()
                this.saveMessages()
            })
        },
        saveMessages: function () {
            let myForm = this.form
            var name = myForm.querySelector('input[name=name]').value
            var content = myForm.querySelector('input[name=content]').value
            var Message = AV.Object.extend('Message');
            var message = new Message();
            message.save({
                'name': name,
                'content': content
            }).then(function (object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}:${object.attributes.content}`
                messageList.appendChild(li)
                myForm.querySelector('input[name=name]').value = ''
                myForm.querySelector('input[name=content]').value = ''
            })
        }
    }
    controller.init(view)
}.call()