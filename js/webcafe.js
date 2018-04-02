// var container = document.querySelector('.container');
// var grid = document.querySelector('.btn-grid');

// grid.addEventListener('click', function(){
//     container.classList.toggle('is-act');
// });

// $(document).ready(function(){
//     var video = $('.news-video');

//     video.on('mouseover focusin', function(){
//         $(this).attr('autoplay', 'true');
//     });
//     video.on('mouseout focusout', function(){
//         $(this).attr('autoplay', 'false');
//     });
// });

var video = document.querySelector('.news-video');

video.addEventListener('mouseenter focusin', function(){
    this.setAttribute('autoplay');
});
video.addEventListener('mouseleave focusout', function(){
    this.removeAttribute('autoplay');
});