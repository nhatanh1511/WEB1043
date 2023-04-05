
var flag = true;
var count = 0;
function play(btn) {
   
    btn.innerText = flag?"X":"O";
    btn.classList.add(flag?'xbtn':'obtn')
    btn.setAttribute('disabled','true');
    flag = !flag;
    count++;
    if (count == 8) {
        alert("Game Over");
        location.reload();
    }
}