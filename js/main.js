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

    gImgs.forEach(function (obj) {
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
    drawText(0, 70)
    if (gMeme.lines.length === 2) {
        drawText(1, 410)
    } else if (gMeme.lines.length > 2) {
        drawText(1, 360)
        drawText(2, 410)
    }
}

function drawText(idx, y) {
    var currLine = gMeme.lines[idx]
    gCtx.lineWidth = 2
    gCtx.strokeStyle = (idx === gMeme.selectedLineIdx) ? 'red' : 'black'
    gCtx.fillStyle = currLine.color
    gCtx.font = currLine.size.toString() + 'px Impact'
    gCtx.textAlign = currLine.align
    gCtx.fillText(currLine.txt, currLine.x, y)
    gCtx.strokeText(currLine.txt, currLine.x, y)
}

// Editor functions 

// Input line
var input = document.querySelector('input')
input.addEventListener('input', updateText)


//add line using ENTER
// input.addEventListener('keyup', function(event) {

//   if (event.keyCode === 13) {
//     event.preventDefault();
//     document.querySelector('.add').click()
//   }
// })

function updateText(e) {
    gMeme.lines[gMeme.selectedLineIdx].txt = e.target.value;
    renderContent()
}

function onAddLine() {
    if (gMeme.lines.length === 3) return
    document.querySelector('input').value = ''
    addLine()
    gMeme.selectedLineIdx++
    console.log(gMeme.lines);
}

function onSwitchLine() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx === gMeme.lines.length) {
        gMeme.selectedLineIdx = 0
    }
renderContent()
}
// text edits

function onIncreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size += 3
    renderContent()
}

function onDecreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 3
    renderContent()
}

// align

function onAlignCenter() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'center'
    gMeme.lines[gMeme.selectedLineIdx].x = canvas.width / 2
    console.log(canvas.width / 2);
    renderContent()

}
function onAlignLeft() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'left'
    gMeme.lines[gMeme.selectedLineIdx].x = 15
    renderContent()

}

function onAlignRight() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'right'
    gMeme.lines[gMeme.selectedLineIdx].x = canvas.width - 15
    renderContent()

}

// text color

function onChangeTextColor() {
    var color = document.querySelector("input[name='color']").value
    gMeme.lines[gMeme.selectedLineIdx].color = color
    renderContent()
}


