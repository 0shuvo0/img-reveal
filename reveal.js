function getDiagonals(size){
    let res = []
    for(let i = 0; i < size; i++){
        let c = 0
        let temp = []
        for(let j = i; j >= 0; j--){
            temp.push([c, j])
            c++
        }
        res.push(temp)
    }
    for(let i = 1; i < size; i++){
        let c = 0
        let temp = []
        for(let j = 0; j < size - i; j++){
            temp.push([i + j, size - j - 1])
            c++
        }
        res.push(temp)
    }
    return res
}

function getStright(size, horizontal = true){
    let res = []
    for(let i = 0; i < size; i++){
        let temp = []
        for(let j = 0; j < size; j++){
            temp.push(horizontal ? [j, i] : [i, j])
        }
        res.push(temp)
    }
    return res
}

function applyStyle(el, styles){
    Object.keys(styles).map(style => el.style[style] = styles[style])
}

const delay = interval => new Promise(resolve => {
    setTimeout(resolve, interval)
})

function createRevealer(ops){
    ops = Object.assign({
        dotCount: 10,
        maxOffset: 100,
        style: "diagonal"
    }, ops)

    let el = document.querySelector(ops.el)
    let elSize = 100
    let dotSize = elSize / ops.dotCount
    let martixRows
    if(ops.style === "horizontal"){
        martixRows = getStright(ops.dotCount)
    }else if(ops.style === "vertical"){
        martixRows = getStright(ops.dotCount, false)
    }else{
        martixRows = getDiagonals(ops.dotCount)
    }

    const createDot = (row, col, img, mid, idx) => {
        let dot = document.createElement("div")
        dot.classList.add("dot")
        let dx = (Math.random() * 2 + 0.2).toFixed(2)
        let dy = (Math.random() * 2 + 0.2).toFixed(2)
        let tx = (mid - idx) * ops.maxOffset * (Math.random() + .2)
        let ty = (mid - idx) * ops.maxOffset * (Math.random() + .2)
        tx *= Math.random() > .5 ? 1 : -1
        ty *= Math.random() > .5 ? 1 : -1
        applyStyle(dot, {
            height: dotSize + "%",
            width: dotSize + "%",
            backgroundImage: "url('" + img + "')",
            backgroundSize: (elSize * ops.dotCount) + "% " + (elSize * ops.dotCount) + "%",
            backgroundPosition: -(col * elSize ) + "% " + -(row * elSize) + "%",
            top: "calc(" + dotSize * row + "% + " + tx + "px)",
            left: "calc(" + dotSize * col + "% + " + ty + "px)",
            transition: "top " + dy + "s, left " + dx + "s",
            animation: ((Math.random() + 0.4) / 2).toFixed(2) + "s round linear"
        })
        setTimeout(() => {
            applyStyle(dot, {
                top:  dotSize * row + "%",
                left:  dotSize * col + "%"
            })
        }, 0)
        return dot
    }

    const reveal = async img => {
        for(let i = 0; i < martixRows.length; i++){
            let rows = martixRows[i]
            await delay(150)
            rows.map((row, idx) => {
                let dot = createDot(row[0], row[1], img, rows.length / 2, idx)
                el.appendChild(dot)
            })
        }
        await delay(1000)
        el.innerHTML = '<img src="' + img + '">'
    }

    return reveal
}