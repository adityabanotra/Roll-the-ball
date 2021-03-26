var ball = document.querySelector('#ball');
var speed=10;
function changeSpeed()
{
    speed=10;
    var c = document.querySelector('#vall').value;
    speed*=c;
    console.log(c);
}
window.addEventListener('keydown',function(k){
    var rect = ball.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
    
    // console.log(k.keyCode);
    if(k.keyCode==65)
    {
        
        if(rect.left>172)
        ball.style.left= rect.left-speed+"px";
    }
    if(k.keyCode==68)
    {
        if(rect.left<1365)
        ball.style.left= rect.left+speed+"px";
    }

    if(k.keyCode==87)
    {
        
        if(rect.top>89)
        ball.style.top= rect.top-speed+"px";
    }
    if(k.keyCode==83)
    {
        if(rect.top<630)
        ball.style.top= rect.top+speed+"px";
    }
});
