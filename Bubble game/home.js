makeBubble();
var timer=10;
var score=0;
var hitrn
runTimer();
getNewHit();



function increseScore()
{
    score+=10;
    document.querySelector('#scoreset').textContent=score;
}
function getNewHit()
{
     hitrn=Math.floor(Math.random()*10);
    document.querySelector('#getnewhit').innerHTML=hitrn
}

function makeBubble() {
  var clutter = "";

  var counter = Math.random() * 10;

  for (var i = 0; i < 152; i++) {
    var counter = Math.random() * 10;
    var oneDigitNumber = Math.floor(counter);

    clutter += `<div class="bubble">${oneDigitNumber}</div>`;
  }
  document.querySelector(".pbtm").innerHTML = clutter;
}

function runTimer()
{
    var timerint=setInterval(function(){
   
        if(timer>0){
            document.querySelector('#timer').textContent=timer;
            timer--;
            
        }
        else{
            clearInterval(timerint);
            document.querySelector('.pbtm').innerHTML=`<div class="scoredisplay">
            <h1> Score</h1>
            <h3>${score}</h3></div>`;
        }
    },1000);
}

document.querySelector('.pbtm').addEventListener("click",function(dets){
    var clickedNumber=Number(dets.target.textContent);
    if(clickedNumber===hitrn)
    {
        increseScore();
        makeBubble();
        getNewHit();

    }

    console.log();
})


