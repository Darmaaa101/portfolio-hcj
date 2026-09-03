const scroollup=document.querySelector
(".scroll-up");

window.onscroll=()=>{
    if(window.scrollY>500){
        scroollup.classList.add("scroll-active");
    } else{
        scroollup.classList.remove("scroll-active");
    }
}