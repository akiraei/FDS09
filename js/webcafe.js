$(document).ready(function(){
    var nav = $('.navigation');
    var btn = $('.btn-menubar');
    var span = $('.menubar'); 
    var video = $('.news-video');
    btn.on('click', function(){
        nav.toggleClass('is-act');
    })


    video.get(0).volume = 0.0;

    video.on('mouseover focusin', function(){
        // this.play();
        this.volume = 1.0;
    });
    video.on('mouseout focusout', function(){
        this.pause();
    });


});
