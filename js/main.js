var gCanvas;
var gCtx;

function onInit() {
    gCanvas = document.getElementById('canvas')
    // console.log(gCanvas);
    gCtx = gCanvas.getContext('2d')
    drawImg2(1)
    drawText('kouko', 100, 100)
}


function drawImg2(imgId) {
    var img = new Image()
    img.src = getImgById(imgId);
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}

function drawText(text, x, y) {
    console.log(text);
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'red'
    gCtx.fillStyle = 'white'
    gCtx.font = '40px Arial'
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

