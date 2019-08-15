window.onload = function(){
    let data = localStorage.todolist ? JSON.parse(localStorage.todolist):[]

    // [{'title':todolist,done:false},{}]
    let doingCon = document.querySelector('.doingCon')
    let doneCon = document.querySelector('.doneCon')
    let num1Node = document.querySelector(".num1")
    let num2Node = document.querySelector(".num2")

    // 将data数据渲染到页面中
    render()
    function render(){
        let con1 = ""  // 正在做
        let con2 = ""  // 做完的
        let doingData = ""
        let doneData = ""
        data.forEach(function(item,index){
            if(item.done){
                con2+=` <div class="">
                <input type="checkbox" checked index='${index}' tp="done">
                <p index=${index}>${item.title}</p>
                <span index=${index} style="cursor:pointer;">icon</span>
            </div>`
                doneData += index
            }else{
                con1+=` <div class="">
                <input type="checkbox" index="${index}" tp="doing">
                <p index=${index}>${item.title}</p>
                <span index=${index} style="cursor:pointer;">icon</span>
            </div>`
                doingData += index
            }
        })
        doingCon.innerHTML = con1
        doneCon.innerHTML = con2
        num1Node.innerHTML = doingData.length
        num2Node.innerHTML = doneData.length
        localStorage.todolist = JSON.stringify(data)
    }


    let input = document.querySelector("#input")
    input.onkeydown = function(event){
        if(event.keyCode==13 && this.value!="" ){
            data.unshift({'title':this.value,done:false})
            this.value=""
            render()
        }
    }
    let main = document.querySelector(".main")
    main.onclick = function(event){
        let target = event.target
        if(target.nodeName=="INPUT" && target.getAttribute("type")=="checkbox"){
            let index = target.getAttribute("index")
            if(target.getAttribute("tp")=="doing"){
                data[index].done = true
            }else{
                data[index].done = false
            }
            render()
        }
        if(target.nodeName=="SPAN"){
            let index = target.getAttribute("index")
            data.splice(index,1)
            render()
        }

    }
    main.ondblclick = function(event){
        let target = event.target
        if(target.nodeName=="P"){
            let con = target.innerHTML
            let index = target.getAttribute('index')
            target.innerHTML = ""
            let input = document.createElement("input")
            input.value = con
            input.onblur = function(){
                data[index].title = this.value
                render()
            }
            target.appendChild(input)
            input.focus()

        }
    }






}


