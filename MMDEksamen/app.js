const navSlide = () => {
  const burger = document.querySelector('.burger-menu');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  
  burger.addEventListener('click',()=>{
    //Gør det muligt at klikke på burgerbar og få en menu ned
    nav.classList.toggle('nav-active');

    //Animerer link i menubar
    navLinks.forEach((link, index) => {
        if(link.style.animation){
        link.style.animation = ''
        }
        else{
        link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`
        }
    });


  });

}


navSlide();