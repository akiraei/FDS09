// jQuery
// autoplay 속성은 페이지 로딩 시점에서 자동 시작하기때문에
// video 관련 API를 이용하여 재생과 정지를 제어할 수 있음.
$(document).ready(function(){
    var container = $('.container');
    var grid = document.querySelector('.btn-grid');
    var video = $('.news-video');
    grid.on('click', function(){
        container.toggleClass('is-act');
    });
    video.on('mouseover focusin', function(){
        this.play();
    });
    video.on('mouseout focusout', function(){
        this.pause();
    });
});
// Javascript
// var video = document.querySelector('.news-video');
// var eventOn = ['mouseenter', 'focusin'];
// var eventOff = ['mouseleave', 'focusout'];
// for(event of eventOn){
//     video.addEventListener(event, function(){
//         video.play();
//     });
// }
// for(event of eventOff){
//     video.addEventListener(event, function(){
//         video.pause();
//     });
// }
