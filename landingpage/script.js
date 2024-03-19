//final to initail
var time=gsap.timeline()
time.from('#nav h3',{
    y:-50,
    delay:0.4 ,
    duration:1,
    opacity:0,
    stagger:.3//used for transition applied for each element 
})
time.from('#main h1',{
     x:-500,
     duration:0.8,
     opacity:0,
     stagger:.5
})
time.from('#main #img1',{
    x:100,
    rotate:45,
    opacity:0,
    duration:1
})

time.from('#main #img2',{
    x:100,
    rotate:40,
    opacity:0,
    duration:1
})
time.from('#main #img3',{
    x:100,
    rotate:40,
    opacity:0,
    duration:1
})



   

