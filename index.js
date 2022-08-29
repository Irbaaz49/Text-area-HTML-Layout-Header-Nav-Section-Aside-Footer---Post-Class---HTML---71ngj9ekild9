window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY * 30;
    let sc = scroll - 100;
   const car = document.getElementById('p3');
    let h = 1500;
    
car.style.width =h  + scroll + 'px';
// car.style.height = h + scroll + 'px';
car.style.padding = sc+'px';
});