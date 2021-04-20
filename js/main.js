var gCanvas;
var gCtx;
var img;

// On Load

function onInit() {
    gCanvas = document.getElementById('canvas')
    gCtx = gCanvas.getContext('2d')
    loadImage(gMeme.selectedImgId)
    renderGallery()
}

function loadImage(imgId) {
    img = new Image()
    img.src = getImgById(imgId);
    img.onload = () => {
        renderContent()
    }
}

// Gallery

function renderGallery() {
    var strHTML = ''
    
gImgs.forEach( function (obj) {
    strHTML +=
    `<img class="gallery-item" src="imgs/${obj.id}.jpg" alt="img" onclick="onSelectPhoto(${obj.id})">`
})
    var elGallery = document.querySelector('.gallery-container')
    elGallery.innerHTML = strHTML

}

// selecting photo from gallery

function onSelectPhoto(imgId) {
    gMeme.selectedImgId = imgId
    loadImage(imgId)
}

// Render canvas content

function renderContent() {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    drawText(getLine(), 200, 70)
}

function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'red'
    gCtx.fillStyle = 'white'
    gCtx.font = '40px Impact'
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

// Editor functions 

// text edits

function onIncreaseFont(selectedLineIdx) {
    gMeme.lines[gMeme.selectedLineIdx].size ++
    renderContent()

}

function onDecreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size --
    renderContent()
}

function getFontSize() {
    gMeme.lines[selectedLineIdx].size.toString()
}

// Input line

var input = document.querySelector('input');

input.addEventListener('input', updateText);

function updateText(e) {
  gMeme.lines[gMeme.selectedLineIdx].txt = e.target.value;
  renderContent()
}

function onAddLine() {
    document.querySelector('input').value = ''
    addLine()
    gMeme.selectedLineIdx++
    console.log(gMeme.lines);
}
