$(document).ready(function(){
    var nav = $('.navigation');
    var btn = $('.btn-menubar');
    var span = $('.menubar'); 
    var menu = $('.menu');
    var menuLists = $('.menu-list');
    var menuItems = $('.menu-item');
    var subMenus = $('.sub-menu');
    var video = $('.news-video');

    btn.on('click', function(){
        nav.toggleClass('is-act');
        if(nav.hasClass('is-act')){
            btn.attr('aria-label', '메인메뉴 닫기');
        }else{
            btn.attr('aria-label', '메인메뉴 열기');
        }
    })

    menuItems.on('click', function(){
        $(this).parent().addClass('menu-act');
        $(this).siblings().css('display', 'block');
    });

    video.get(0).volume = 0.0;

    video.on('mouseover focusin', function(){
        // this.play();
        this.volume = 1.0;
    });
    video.on('mouseout focusout', function(){
        this.pause();
    });


});
