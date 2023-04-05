let images = [
    '/lab6/imgs/a2.jpg',
    '/lab6/imgs/a1.jpg',
    '/lab6/imgs/a4.jpg',
    '/lab6/imgs/a5.jpg',
    '/lab6/imgs/a3.jpg'
]

let p = 0

function anhFirst() {
    p = 0
    const image = document.getElementById("image");
    image.src = images[p]
}
function anhLast() {
    p = images.length -1
    const image = document.getElementById("image");
    image.src = images[p]
}
function anhNext() {
    if(p < images.length -1) {
        p++;
    }
    const image = document.getElementById("image");
    image.src = images[p]
}
function anhPrevious() {
    if(p >0) {
        p--;
    }
    const image = document.getElementById("image");
    image.src = images[p]
}