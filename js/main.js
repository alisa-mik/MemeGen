var gCanvas;
var gCtx;

function onInit() {
    gCanvas = document.getElementById('canvas')
    // console.log(gCanvas);
    gCtx = gCanvas.getContext('2d')
    drawImg()
}

function drawImg() {
    var elImg = document.querySelector('img')
    console.log(elImg);
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
}

function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'red'
    gCtx.fillStyle = 'white'
    gCtx.font = '40px Arial'
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}


function getImgById(imgId) {
    var img = gImgs.find(function (img) {
        return imgId === img.id
    })
    return img.url
}
console.log(getImgById(1));
