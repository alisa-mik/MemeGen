var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [
    { id: 1, url: 'imgs/1.jpg', keywords: ['love'] },
    { id: 2, url: 'imgs/2.jpg', keywords: ['love'] },
    { id: 3, url: 'imgs/3.jpg', keywords: ['love'] },
    { id: 4, url: 'imgs/4.jpg', keywords: ['love'] },
    { id: 5, url: 'imgs/5.jpg', keywords: ['love'] },
    { id: 6, url: 'imgs/6.jpg', keywords: ['love'] },
    { id: 7, url: 'imgs/7.jpg', keywords: ['love'] }
];


var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
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


function addLine() {
    gMeme.lines.push(createLine())
}


function createLine() {
    return {
        txt: '',
        size: 20,
        align: 'left',
        color: 'red'
    }
}