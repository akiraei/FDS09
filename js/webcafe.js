$(document).ready(function () {
    var viewport = window.matchMedia('(max-width:999px)');
    if (viewport.matches) {
      var nav = $('.navigation');
      var btn = $('.btn-menubar');
      var menu = $('.menu');
      var menuLists = $('.menu-list');
      var menuItems = $('.menu-item');
      var subMenus = $('.sub-menu');
      var slogan = $('.slogan-heading');
      // 999px 이하에서 적용할 코드
      menuItems.attr('aria-haspopup', 'true');
      menuItems.attr('aria-expanded', 'false');
      menuItems.attr('role', 'button');
      menuItems.attr('tabindex', '0');
      menuItems.addClass('icon-plus');
      slogan.addClass('a11y-hidden');

      btn.on('click', function(e) {
        e.preventDefault();
        nav.toggleClass('is-act');
        if (nav.hasClass('is-act')) {
          btn.attr('aria-label', '메인 메뉴 닫기');
        } else {
          btn.attr('aria-label', '메인 메뉴 열기');
        }
      });
  
      menuItems.on('click keydown', function(e) {
        if(e.type === 'click' || (e.type === 'keydown' && e.keyCode === 13)){
            menuLists.removeClass('menu-act');
            menuItems.addClass('icon-plus');
            subMenus.css('display', 'none');
            menuItems.attr('tabindex', '0');
            if($(this).parent().hasClass('menu-act')){
                $(this).addClass('icon-minus');
                $(this).removeClass('icon-plus');
                $(this).attr('aria-expanded', 'true');
                $(this).attr('aria-haspopup', 'true');
                $(this).siblings().css('display', 'block');
            }else{
                $(this).attr('aria-expanded', 'false');
            }
        }
      });
      menu.on('focusout', function(){
          nav.removeClass('is-act');
      });
      menu.on('focusin', function(){
            nav.addClass('is-act');
        });

    } else {
      // 1000px 이상에서 사용할 코드
    }
  });