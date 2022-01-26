const container=document.querySelector('.container')
const coontainer2=document.querySelector('.container2')
const button=document.querySelector('.button')
const button2=document.querySelector('.button2')
const button3=document.querySelector('.button3')

const tl=gsap.timeline({paused:true})
tl.from(button,{opacity:0},'+=0.25').to(button,{opacity:1})

tl.to(container,{clipPath:'polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)'})
.to(coontainer2,{filter:'blur(10px)'})


container.addEventListener('mouseover',()=>{
    tl.play()
})

button.addEventListener('mouseover',()=>{
   tl.to(container,{clipPath: 'polygon(90% 10%, 90% 10%, 90% 90%, 90% 90%)'},'+=0.5')
    .to(coontainer2,{filter:'blur(0px)',ease:'Elastic.easeOut.config(1,0.3)'})
})


 const bl=gsap.timeline()
button3.addEventListener('mouseover',()=>{
       tl.from(coontainer2,{clipPath:'clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%)'})
         .to(coontainer2,{clipPath:'polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)'})
})

button2.addEventListener('mouseover',()=>{
    tl.to(container,{clipPath:'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'})
    .to(coontainer2,{clipPath:'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'})
 })