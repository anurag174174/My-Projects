


setInterval(()=>{
    var d=new Date();
    var htime=d.getHours()
    var mtime=d.getMinutes();
    var stime=d.getSeconds();

    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    
   document.getElementById ('hour').style.transform=`rotate(${hrotation}deg)`;
   document.getElementById ('minute').style.transform=`rotate(${mrotation}deg)`;
   document.getElementById ('second').style.transform=`rotate(${srotation}deg)`;
    

},1000)