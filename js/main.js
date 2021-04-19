var gCanvas;
var gCtx;

function onInit() {
    gCanvas = document.getElementById('canvas')
    gCtx = gCanvas.getContext('2d')
    drawImg2(gMeme.selectedImgId)
    renderGallery()

}

function drawImg2(imgId) {
    var img = new Image()
    img.src = getImgById(imgId);
    img.onload = () => {
        renderContent(img)
    }
}

function renderContent(img) {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    drawText(getLine(), 200, 70)
}

function drawText(text, x, y) {
    // console.log(text);
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'red'
    gCtx.fillStyle = 'white'
    gCtx.font = '40px Arial'
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onAddLine() {
    var newLine = document.querySelector('input[name="txt"]').value
    console.log(newLine)
    addLine(newLine)
    drawImg2(gMeme.selectedImgId)
    console.log(gMeme.lines);
}

function renderGallery() {
    var strHTML = ''
    
gImgs.forEach( function (obj) {
    strHTML +=
    `<img class="gallery-item" src="/imgs/${obj.id}.jpg" alt="img" onclick="onSelectPhoto(${obj.id})">`
})
    var elGallery = document.querySelector('.gallery-container')
    elGallery.innerHTML = strHTML

}

function onSelectPhoto(imgId) {
    console.log(imgId);
    gMeme.selectedImgId = imgId
    drawImg2(imgId)
    clearCanvas()
    
}

function clearCanvas() {
    gCanvas = document.getElementById('canvas')
    console.log('clear');
    gCtx = gCanvas.getContext('2d');
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)


}
    
