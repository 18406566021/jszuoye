// 面向对象的方式

// 打字游戏
// 属性：
// 方法:run() 字母移动  createLetter() 创建字母   暂停和开始
window.onload = function () {
    class Game{
        constructor(){
            this.screen = document.querySelector(".screen")
            this.btn = document.querySelector(".pauseButton")
            this.key = document.querySelector(".keyBoard")
            this.sm = document.querySelector(".sm")
            this.jf = document.querySelector(".jf")
            this.letters = []
            this.createLetter()
            this.iskill = false
            this.runToggle()
            this.killLetter()
            this.removeChild()
        }
        // 创建字母   num 默认字母数量
        createLetter(num=5){
            for (let i=0;i<num;i++) {
                let div = document.createElement("div")
            div.classList.add("letter")
           // 随机字母
            let letter = String.fromCharCode(parseInt(Math.random()*26+65))
                // 随机字母重复
                while (this.isRepeat(letter)){
                    letter = String.fromCharCode(parseInt(Math.random()*26+65))
                }
                let left = Math.random()*4.5
                while (this.isOverlap(left)){
                    left = Math.random()*4.5
                }
                let top = Math.random()
            // 判断重叠  只要返回不是-1  就确认是重叠了
            div.setAttribute("style",`background:url(img/A-Z/${letter}.png);background-size:cover;top:0.5rem;left:${left}rem;`)
            // 随机位置
            this.screen.appendChild(div)


                // 添加字母带属性letters中
                let obj = {}
                obj["title"] = letter
                obj["top"] = top
                obj["left"] = left
                obj["node"] = div
                this.letters.unshift(obj)
            }
        }
        // 判读是否重叠
        isOverlap(left){
            let status = this.letters.findIndex((item)=>{
                if (Math.abs(item.left-left)<0.53) {
                    return item
                }
            })
            if(status!=-1){
                return true
            }else{
                return false
            }
        }
        // 判读是否重复
        isRepeat(letter){
           let status = this.letters.findIndex((item)=>{
                if (item.title==letter){
                    return item
                }
            })
            if (status==-1){  //没有重复
                return false
            } else{
                return true
            }
        }

        run(){
            this.t = setInterval(()=>{
                this.letters.forEach((item,index)=>{
                    item.top+=0.1
                    item.node.style.top = item.top+"rem"
                    // 超出屏幕就删除
                    if (item.top>7.2){
                        this.removeChild(index)
                        this.sm.innerText-=5
                        if (this.sm.innerText <= 0 ){
                            clearInterval(this.t)
                            alert("你炸了,别点了！")
                        }
                    }
                })
            },100)
        }

        runToggle(){
            let flag = true
            this.btn.ontouchstart = ()=>{
                if (flag){
                    flag = false
                    this.run()
                    this.iskill = true
                    this.btn.style.background = "url(img/Pause.png)"
                    this.btn.style.zIndex = "100"
                    this.btn.style.backgroundSize = "cover"
                } else {
                    flag = true
                    clearInterval(this.t)
                    this.iskill = false
                    this.btn.style.background = "url(img/Play.png)"
                    this.btn.style.zIndex = "100"
                    this.btn.style.backgroundSize = "cover"
                }
            }
        }



        killLetter(){
            this.key.ontouchstart = (event)=>{
                if (!this.iskill){
                    return
                }
                let target = event.target
                if (target.nodeName == "SPAN"){
                    let lettter = target.innerText
                    let index = this.letters.findIndex((item)=>{
                        if (item.title == lettter){
                            return item
                        }
                    })
                    this.removeChild(index)
                    let num = parseInt(this.jf.innerText)
                    num += 10
                    this.jf.innerText = num
                }
            }
        }
        removeChild(index){
            this.screen.removeChild(this.letters[index].node)
            this.letters.splice(index,1)
            this.createLetter(1)
        }
    }
    let game = new Game(".screen",".pauseButton",".keyBoard")

}
