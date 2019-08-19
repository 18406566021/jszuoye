window.onload = function () {
let left = document.querySelector(".left")
    let fdj = document.querySelector(".box1")
    let right = document.querySelector(".right")
    let img = document.querySelector(".right img")
    let cover = document.querySelector(".zhezhao")
    cover.onmousemove = function(e){
         //获取事件对象
        let ev = window.event || e
        //获取鼠标位置
        let mouseleft = ev.offsetX
        let mousertop = ev.offsetY
        //计算遮罩位置
        let fdjleft = mouseleft - 100;
        let fdjtop = mousertop - 100;
        //判断
        if (fdjleft<0) {
            fdjleft = 0
        }
        if (fdjleft > 500) {
            fdjleft = 500
        }
        if (fdjtop < 0) {
            fdjtop = 0
        }
        if (fdjtop > 200) {
            fdjtop = 200
        }
        //移动遮罩
        fdj.style.left = fdjleft + 'px'
        fdj.style.top = fdjtop + 'px'
        //计算右侧图片位置
        let rightleft = fdjleft * -2
        let righttop = fdjtop * -2
        //让右侧图片移动
        img.style.left = rightleft + 'px'
        img.style.top = righttop + 'px'
    }
    left.onmouseenter = function () {
        fdj.style.display = "block"
        right.style.display = "block"
    }
    left.onmouseleave = function () {
        fdj.style.display = "none"
        right.style.display = "none"
    }










}