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
    var gallery = document.querySelector('.gallery');
    gallery.setAttribute('hidden', true);
    var generator = document.querySelector('.generator-container')
    generator.setAttribute('hidden', false);
}

// Render canvas content

function renderContent() {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    gMeme.lines.forEach(function (line, idx) {
        drawText(idx)
    })
}

function drawText(idx) {
    var currLine = gMeme.lines[idx]
    gCtx.lineWidth = 2
    gCtx.strokeStyle = (idx === gMeme.selectedLineIdx) ? 'red' : 'black'
    gCtx.fillStyle = currLine.color
    gCtx.font = currLine.size.toString() + 'px Impact'
    gCtx.textAlign = currLine.align
    gCtx.fillText(currLine.txt, currLine.x, currLine.y)
    gCtx.strokeText(currLine.txt, currLine.x, currLine.y)
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
    console.log(gMeme.selectedLineIdx);
    gMeme.lines[gMeme.selectedLineIdx].txt = e.target.value;
    renderContent()
}

//second line editor

function onMoveLineUp() {
    if (gMeme.lines[gMeme.selectedLineIdx].y === 50) return
    gMeme.lines[gMeme.selectedLineIdx].y -= 10
    renderContent()
}

function onMoveLineDown() {
    if (gMeme.lines[gMeme.selectedLineIdx].y === canvas.height - 10) return
    gMeme.lines[gMeme.selectedLineIdx].y += 10
    renderContent()
}

function onSwitchLine() {
    console.log(gMeme.lines[gMeme.selectedLineIdx]);
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx === gMeme.lines.length) {
        gMeme.selectedLineIdx = 0
    }
    input.value = gMeme.lines[gMeme.selectedLineIdx].txt
    console.log(gMeme.lines[gMeme.selectedLineIdx]);
    renderContent()
}

function onAddLine() {
    if (input.value === '') return
    document.querySelector('input').value = ''
    addLine()
    gMeme.selectedLineIdx = gMeme.lines.length - 1
   
}

function onRemoveLine() {
    console.log(gMeme.selectedLineIdx);
    if (gMeme.lines.length === 1) return
    removeLine()
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


