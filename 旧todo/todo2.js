window.onload = function () {
    // localStorage.todolist = JSON.stringify([{title:"abc",done:false}])
    //  json经常用在浏览器中传输数据  JSON对象
    //  JSON.stringify（）   将json数据转换为字符串
    //  JSON.parse（）   将字符串数据转换为JSON
    // let todolist = JSON.parse(localStorage.todolist)
    let data = localStorage.todolist ? JSON.parse(localStorage.todolist) : []

    let doingCon = document.querySelector(".doingCon")
    let doneCon = document.querySelector(".doneCon")
    // function insertToDo(con){
    //     data.unshift({"title":con,done:false})
    // }



    function render(){
        let con1 = ""    // 正在做
        let con2 = ""    // 做完的
        data.forEach(function (item,index) {
            if(item.done){
                con2+=`<div>
                <input type="checkBox" checked index="${index}">
                <p>${item.title}</p>
                 <span index="${index}">del</span> </div> `
                    +item.title
            }else{
                con1+=`<div>
                <input type="checkBox" index="${index}">
                <p>${item.title}</p>
                    <span index="${index}>del</span> </div> `
                    +item.title
            }
        })
        doingCon.innerHTML = con1
        doneCon.innerHTML = con2
    }


    let input = document.querySelector("#input")
    input.onkeydown = function (event) {
        if (event.keyCode == 13 && this.value!=""){
            data.unshift({"title":this.value,done:false})
            render()
        }

    }

    doingCon.onclick = function ( event) {
        let target = event.target
        if (target.nodeName == "INPUT" && target.getAttribute("type")=="checkbox"){
            data[index].done = false
            render()
        }
    }
     doneCon.onclick = function ( event) {
        let target = event.target
        if (target.nodeName == "INPUT" && target.getAttribute("type")=="checkbox"){
            data[index].doing = true
            render()
        }
        if (target.nodeName =="SPAN") {
            let index = target.getAttribute("index")
            data.splice(index,1)
            render()
        }
    }
}