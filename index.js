const mouseEvent = document.querySelector('.mouseEvent')
const horizontal = document.querySelector('.horizontal')
const vertical = document.querySelector('.vertical')
 
mouseEvent.addEventListener("mousemove", (e) => {
    horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + '%';
   
    if (e.x > 500) {
        document.body.style.filter = 'blur(3px)';
    } else {
        document.body.style.filter = 'none';
    }
})
