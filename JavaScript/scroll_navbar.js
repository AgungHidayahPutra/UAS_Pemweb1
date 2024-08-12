const nav = document.querySelector('.container-fluid');

window.addEventListener('scroll', function(){
    if(this.window.scrollY > 640 ){
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
})
  
  