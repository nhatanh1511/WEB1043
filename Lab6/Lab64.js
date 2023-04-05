const output = document.querySelector('.output');
const message = document.querySelector('.message')

message.textContent = "Press to Start";
const box = document.createElement('div');
const game = {
    timer: 0,
    start: null
};
box.classList.add('box');
output.append(box);
function ranNum(max) {
    return Math.floor(Math.random() * max);
}
function addBox() {
    message.textContent='Click it..';
    game.start = new Date().getTime();
    box.style.display = 'block';
    box.style.left = ranNum(450) + 'px';
    box.style.top = ranNum(450) + 'px';


}

    
box.addEventListener('click', () =>{
    box.textContent = "";
    box.style.display = 'none';
    game.timer = setTimeout(addBox,ranNum(3000));
    if (!game.start) {
        message.textContent ='Loading...';
    } else {
       const cur = new Date().getTime();
       const dur = (cur - game.start) /1000;
       message.textContent = "It took few seconds to Click";
    }
});