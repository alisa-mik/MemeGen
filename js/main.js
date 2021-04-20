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
    // drawText(getLine(), 200, 70)
    drawText(0, 200, 70)
    if (gMeme.lines.length === 2) {
        drawText(1, 200, 390 )
    } else if (gMeme.lines.length > 2){
        drawText(1, 200, 360)
        drawText(2, 200, 410)
    }
}

function drawText(idx, x, y) {
   var currLine = gMeme.lines[idx]
    gCtx.lineWidth = 2
    gCtx.strokeStyle = currLine.color
    gCtx.fillStyle = currLine.color
    gCtx.font = currLine.size.toString() + 'px Impact'
    gCtx.textAlign = 'center'
    gCtx.fillText(currLine.txt, x, y)
    gCtx.strokeText(currLine.txt, x, y)

}

// Editor functions 

// text edits

function onIncreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size += 3
    renderContent()
}

function onDecreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size -=3
    renderContent()
}

function onChangeTextColor() {
    var color = document.querySelector("input[name='color']").value
    gMeme.lines[gMeme.selectedLineIdx].color = color 
    renderContent()
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
