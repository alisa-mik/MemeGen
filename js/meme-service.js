var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [
    { id: 1, url: 'imgs/1.jpg', keywords: ['love']},
    { id: 2, url: 'imgs/2.jpg', keywords: ['love']}
];


var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I never curse',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}

function getImgById(imgId) {
    var img = gImgs.find(function (img) {
        return imgId === img.id
    })
    return img.url
}

function getLine() {
    var line = gMeme.lines[gMeme.selectedLineIdx].txt
    console.log(line);
    return line
}

function addLine(newLine) {
gMeme.lines.push(createLine(newLine))
updateSelectedLine()
}

function updateSelectedLine() {
    gMeme.selectedLineIdx= gMeme.lines.length - 1
}
function createLine(text) {
    return {
        txt: text,
        size:20,
        align: 'left',
        color: 'red'
    }
}