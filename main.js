



const parallax = document.getElementById('parallax'); 



window.addEventListener('scroll', function(){

    let offset = window.pageYOffset;
    console.log( 'Offset: '+ offset); 
    console.log('offset * .7 :' + offset * .7); 
    parallax.style.backgroundPositionY = offset * 1 + 'px';




})