window.onload = function(){

    let doingData =  localStorage.doingData?localStorage.doingData.split(","):[]
    let doneData = localStorage.doneData?localStorage.doneData.split(","):[]


    let doingCon = document.querySelector(".doingCon")
    let doneCon = document.querySelector(".doneCon")
    let num1Node = document.querySelector(".num1")
    let num2Node = document.querySelector(".num2")


    let input = document.querySelector('#input')


    render()

    input.onkeydown = function(event){
        if(event.keyCode==13 && this.value!=""){
            doingData.unshift(this.value)
            localStorage.doingData = doingData
            localStorage.doneData = doneData
            // 渲染数据
            render()
            this.value=""
        }
    }

    function render(){
        let str = ""
        let str1 = ""
        doingData.forEach((item,index)=>{
            str+=`<div>
                        <input type="checkBox" class='change'>
                        <p>${item}</p>
                    </div>`
        })
        doingCon.innerHTML = str

        doneData.forEach((item,index)=>{
            str1+=`<div>
                        <input type="checkBox" checked class='change'>
                        <p>${item}</p>
                    </div>`
        })
        doneCon.innerHTML = str1
        num1Node.innerHTML = doingData.length
        console.log(num1Node)
        num2Node.innerHTML = doneData.length
    }

    doingCon.onclick = function(event){
        let target = event.target
        if(target.className=="change"){
            let value = target.nextElementSibling.innerText
            let index = doingData.indexOf(value)
            doneData.unshift(doingData.splice(index,1)[0])
            render()
            localStorage.doingData = doingData
            localStorage.doneData = doneData
        }
    }
}