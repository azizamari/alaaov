const tl=gsap.timeline({defaults:{ease: "power1.out"}});
tl.to(".intro-logo",{y:"0%", duration:1});
tl.to(".slider", {y:"-100%", duration:1.5, delay:0.1});
tl.to(".intro",{y:"-100%",duration:1},"-=1" );


const links=document.querySelectorAll('.side_links')
function openSlideMenu(){
    document.getElementById('side-menu').style.width ='200px';
    for(const link of links){
        link.style.display ='block';
    }
}

function closeSlideMenu(){
    for(const link of links){
        link.style.display ='none';
    }
    document.getElementById('side-menu').style.width ='0px';
}

for(const link of links){
    link.addEventListener('click',()=>{
        closeSlideMenu();
    })
}

AOS.init();

var typed = new Typed('.job', {
    strings: ["3D / VFX Artist", "Video Editor", "3D / VFX Artist", "Video Editor", "3D / VFX Artist", "Video Editor", "3D / VFX Artist", "Video Editor", "3D / VFX Artist", "Video Editor", "3D / VFX Artist", "Video Editor" ],
    typeSpeed: 60,
    backSpeed:60,
    loop:true
  });
