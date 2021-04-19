var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [{ id: 1, url: '/meme-imgs (square)/1.jpg' , keywords: ['love'] }];
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

