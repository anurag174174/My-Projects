var arr=[
    {name:"Gojo" ,image:"https://w0.peakpx.com/wallpaper/238/862/HD-wallpaper-gojo-satoru-anime-gojou-gojou-satoru-jujutsu-jujutsu-kaisen-msbart-thumbnail.jpg"},
    {name:"Gojo Saturo" ,image:"https://w0.peakpx.com/wallpaper/10/388/HD-wallpaper-gojo-satoru-jjk-jujutsu-anime-husbando-gojo-satoru-jujutsu-kaisen-thumbnail.jpg"},
    {name:"saturo " ,image:"https://w0.peakpx.com/wallpaper/358/686/HD-wallpaper-jujutsu-kaisen-anime-gojo-jujutsu-kaisem-satoru-gojo-thumbnail.jpg"},
    {name:"anime" ,image:"https://w0.peakpx.com/wallpaper/579/718/HD-wallpaper-gojo-satoru-jujutsu-kaisen-thumbnail.jpg"},
    {name:"love" ,image:"https://w0.peakpx.com/wallpaper/300/377/HD-wallpaper-itadori-yuji-anime-gojo-satoru-jujutsu-kaisen-naruto-night-sukuna-sunsets-tokyo-ghoul-thumbnail.jpg"},
    {name:"friendship" ,image:"https://w0.peakpx.com/wallpaper/878/236/HD-wallpaper-gojo-anime-animes-asthethic-jujutsu-kaisen-thumbnail.jpg"},
    {name:"saturu gojo" ,image:"https://w0.peakpx.com/wallpaper/431/849/HD-wallpaper-satoru-gojo-jujutsu-kaisen-flowers-flores-anime-thumbnail.jpg"},
    {name:"gojosen" ,image:"https://w0.peakpx.com/wallpaper/596/83/HD-wallpaper-jujutsu-kaisen-gojo-satoru-itadori-jujutsu-kaisen-toge-thumbnail.jpg"},
    {name:"doremon" ,image:"https://w0.peakpx.com/wallpaper/424/930/HD-wallpaper-jujutsu-kaisen-anime-anime-gojo-itadori-jujutsu-kaisen-jujutsu-thumbnail.jpg"},
    {name:"shinchan" ,image:"https://w0.peakpx.com/wallpaper/210/273/HD-wallpaper-gojo-satoru-gojou-gojou-satoru-jujutsu-kaisen-thumbnail.jpg"},
    {name:"himavari" ,image:"https://w0.peakpx.com/wallpaper/493/90/HD-wallpaper-jujutsu-kaisen-itadori-yuji-anime-gojo-satoru-thumbnail.jpg"},
    {name:"badass gojo" ,image:"https://w0.peakpx.com/wallpaper/830/396/HD-wallpaper-gojo-and-yuji-aesthetic-city-jujutsu-kaisen-satoru-gojo-sukuna-yuji-itadori-thumbnail.jpg"},
    {name:"jujutsu kaisen" ,image:"https://w0.peakpx.com/wallpaper/198/163/HD-wallpaper-gojou-satoru-cool-satoru-gojo-satoru-gojou-gojo-satoru-jujutsu-kaisen-anime-2020-pop-art-anime-thumbnail.jpg"},
    {name:"satoru gojo" ,image:"https://w0.peakpx.com/wallpaper/992/715/HD-wallpaper-gojo-badass-jujutsu-kaisen-jjk-thumbnail.jpg"},
    {name:"jijutsu" ,image:"https://w0.peakpx.com/wallpaper/30/214/HD-wallpaper-new-style-naruto-jujutsu-kaisen-kakashi-satoru-gojo-thumbnail.jpg"},
    {name:"animelove" ,image:"https://w0.peakpx.com/wallpaper/409/217/HD-wallpaper-gojo-and-megumi-anime-fushiguro-megumi-gojo-satoru-itadori-yuji-jujutsu-kaisen-kugisaki-nobara-sukuna-thumbnail.jpg"},
    {name:"gojo friendship" ,image:"https://w0.peakpx.com/wallpaper/807/864/HD-wallpaper-satoru-gojo-jujutsu-kaisen-thumbnail.jpg"},
    {name:"shizuka" ,image:"https://w0.peakpx.com/wallpaper/928/832/HD-wallpaper-jujutsu-kaisen-gojo-hunt-logo-satoru-star-super-theme-wild-thumbnail.jpg"},
    {name:"gappo" ,image:"https://w0.peakpx.com/wallpaper/816/696/HD-wallpaper-gojo-satoru-anime-gojo-gojo-satoru-itadori-jujutsu-kaisen-thumbnail.jpg"},
    {name:"lovers" ,image:"https://w0.peakpx.com/wallpaper/961/515/HD-wallpaper-jujutsu-kaisen-anime-fushiguro-gojo-itadori-megumi-nobara-sakuna-satoru-xaons-thumbnail.jpg"},
    {name:"doremon" ,image:"https://w0.peakpx.com/wallpaper/994/477/HD-wallpaper-hole-among-red-plant-gojo-satoru-jujutsu-kaisen-anime-thumbnail.jpg"},
    {name:"nobita" ,image:"https://w0.peakpx.com/wallpaper/364/810/HD-wallpaper-gojo-nd-sukuna-sorcery-gojosatoru-nobara-gojo-satoru-jujutsu-jujutsu-kaisen-gojo-ryomensukuna-jujutsukaisen-action-nobarakugisaki-ryomen-sukuna-anime-sukuna-thumbnail.jpg"},
    {name:"sunio" ,image:"https://w0.peakpx.com/wallpaper/125/925/HD-wallpaper-gojo-and-panda-jujutsu-kaisen-thumbnail.jpg"},
    {name:"sunio love" ,image:"https://w0.peakpx.com/wallpaper/538/523/HD-wallpaper-itadori-yuji-itadori-jujutsu-kaisen-jujutsu-jujutsu-kaisen-jujutsu-kaisen-itadori-jujutsu-kaisen-jujutsu-yuji-itadori-thumbnail.jpg"},
    {name:"Gshinchan" ,image:"https://w0.peakpx.com/wallpaper/204/250/HD-wallpaper-satoru-gojo-anime-fushiguro-gojo-itadori-jujutsu-kaisen-megumi-nobara-satoru-tuji-xaons-thumbnail.jpg"}
]
function handleSearchFuntionality()
{
    var ck=document.querySelector('#searchinput');
 
    ck.addEventListener('focus',function(){
        document.querySelector('.overlay').style.display='block'
    })
    ck.addEventListener('blur',function(){
        document.querySelector('.overlay').style.display='none'
    })

    ck.addEventListener('input',function()
    {
        const filterArray=arr.filter(e=>
            e.name.toLowerCase().startsWith(ck.value))
            var clutter="";
            filterArray.forEach(function(e){
                clutter+=`<div class="res flex px-8 py-3">
                <i class="ri-search-line font-semibold mr-5"></i>
                <h3 class="font-semibold">${e.name}</h3></div>`

            })
            document.querySelector('.searchdata').style.display="block";
            document.querySelector('.searchdata').innerHTML=clutter;
                
       
    })
    ck.addEventListener('blur',function(){
        document.querySelector('.searchdata').style.display='none'
    })
    
}
handleSearchFuntionality()
function showTheCards()
{
    var clutter="";
    arr.forEach(function(obj)
    {
        clutter+=`<div class="box">
        <img class="cursor-pointer" src="${obj.image}">
        <div class="caption">Lorem Epsum</div>
        </div>`;
        
    })
    document.querySelector(".container").innerHTML=clutter

}
showTheCards();