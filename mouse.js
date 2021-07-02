document.addEventListener('mousemove', function(e){
    let body = document.querySelector('body');
    let buggie = document.getElementById('buggie');
    let left = e.offsetX;
    let top = e.offsetY;
    buggie.style.left = left + 'px';
    buggie.style.top = top + 'px';
    // document.body.style.cursor = 'none!important';
})