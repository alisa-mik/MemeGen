var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [
    { id: 1, url: 'imgs/1.jpg', keywords: ['love'] },
    { id: 2, url: 'imgs/2.jpg', keywords: ['love'] },
    { id: 3, url: 'imgs/3.jpg', keywords: ['love'] },
    { id: 4, url: 'imgs/4.jpg', keywords: ['love'] },
    { id: 5, url: 'imgs/5.jpg', keywords: ['love'] },
    { id: 6, url: 'imgs/6.jpg', keywords: ['love'] },
    { id: 7, url: 'imgs/7.jpg', keywords: ['love'] },
    { id: 8, url: 'imgs/8.jpg', keywords: ['love'] },
    { id: 9, url: 'imgs/9.jpg', keywords: ['love'] },
    { id: 10, url: 'imgs/10.jpg', keywords: ['love'] },
    { id: 11, url: 'imgs/11.jpg', keywords: ['love'] },
    { id: 12, url: 'imgs/12.jpg', keywords: ['love'] },
    { id: 13, url: 'imgs/13.jpg', keywords: ['love'] },
    { id: 14, url: 'imgs/14.jpg', keywords: ['love'] },
    { id: 15, url: 'imgs/15.jpg', keywords: ['love'] },
    { id: 16, url: 'imgs/16.jpg', keywords: ['love'] },
    { id: 17, url: 'imgs/17.jpg', keywords: ['love'] },
    { id: 18, url: 'imgs/18.jpg', keywords: ['love'] }
];


var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
        txt: '',
        size: 40,
        align: 'center',
        color: '#d3d3d3',
        strokeStyle: 'black',
        x: 225,
        y: 70

    }
    ]
}

function getImgById(imgId) {
    var img = gImgs.find(function (img) {
        return imgId === img.id
    })
    return img.url
}

// function getLine() {
//     var line = gMeme.lines[gMeme.selectedLineIdx].txt
//     console.log(line);
//     return line
// }


function addLine() {
    gMeme.lines.push(createLine())
}


function createLine() {
    console.log(gMeme.lines.length);

    if (gMeme.lines.length === 1) {
        return {
            txt: '',
            size: 40,
            align: 'center',
            color: '#d3d3d3',
            strokeStyle: 'black',
            x: 225,
            y: 420
        }
    } else {
        return {
            txt: '',
            size: 40,
            align: 'center',
            color: '#d3d3d3',
            strokeStyle: 'black',
            x: 225,
            y: 225
        }
    }
}

function removeLine() {
    console.log(gMeme.lines);
    console.log(gMeme.selectedLineIdx);
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    console.log(gMeme.lines);

}