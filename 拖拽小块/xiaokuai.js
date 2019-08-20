window.onload = function () {
    // let box = document.querySelector(".box")
    //
    // let x = 0
    // let y = 0
    // let left = 0
    // let top = 0
    // let flag = false
    //
    //
    // box.onmousedown = function (e) {
    //     x = e.clientX
    //     y = e.clientY
    //     left = box.offsetLeft
    //     top = box.offsetTop
    //     flag = true
    // }
    // window.onmousemove = function (e) {
    //     if ( flag == true){
    //         return
    //     }
    //     let nx = e.clientX
    //     let ny = e.clientY
    //     let nl = nx - ( x - left )
    //     let nt = ny - ( y - top )
    //
    //     box.style.left = nl + "px"
    //     box.style.top = nt + "px"
    //
    // }
    //
    // box.onmouseup = function () {
    //     flag = false
    let dv = document.querySelector(".box")
    let x = 0
    let y = 0
    let l = 0
    let t = 0
    let flag = false
//鼠标按下事件
    dv.onmousedown = function(e) {
        //获取x坐标和y坐标
        x = e.clientX
        y = e.clientY

        //获取左部和顶部的偏移量
        l = dv.offsetLeft
        t = dv.offsetTop
        //开关打开
        flag = true
        //设置样式
        // dv.style.cursor = 'move';
    }
//鼠标移动
    window.onmousemove = function(e) {
        if (flag == false) {
            return
        }
        // let ev =window.event || e
        // let mouseleft =ev.offsetX - 100
        // let mousetop =ev.offsetY - 100
        // if (mouseleft<0) {
        //     mouseleft = 0
        // }
        // if (mouseleft > 500) {
        //     mouseleft = 500
        // }
        // if (mousetop < 0) {
        //     mousetop = 0
        // }
        // if (mousetop > 200) {
        //     mousetop = 200
        // }
        //获取x和y
        let nx = e.clientX
        let ny = e.clientY
        //计算移动后的左偏移量和顶部的偏移量
        let nl = nx - (x - l)
        let nt = ny - (y - t)

        dv.style.left = nl + 'px'
        dv.style.top = nt + 'px'
    }
//鼠标抬起事件
    dv.onmouseup = function() {
        //开关关闭
        flag = false
        // dv.style.cursor = 'default';
    }

}








