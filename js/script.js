var NAV = "#nav";
var NAV_LIST = ".nav-list";


var navPosition;
var navMenu;
var navList;


$(document).ready( function() {
  navMenu = $(NAV);
  navPosition = navMenu.offset().top;
  navList = $(NAV_LIST)
  fixedNav();
  navList.click(navScroll);
});

window.onscroll = fixedNav;

function navScroll() {
  navList.removeClass('nav-active'); 
  $(this).addClass('nav-active');
  var id = $(this).attr('href');
  var top = $(id).offset().top - 85;
  $('body, html').animate({scrollTop:top}, 1000);
}

function fixedNav() {
  var scrolled = $(window).scrollTop();
  if(scrolled >= navPosition) {
    navMenu.css("position", "fixed");
  } else if (scrolled < navPosition) {
    navMenu.css("position", "static");
  }
}



