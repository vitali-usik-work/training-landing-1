var NAV_BLOCK = "#nav";
var NAV_LIST_ITEM = ".nav-list";
var CONTACTS = ".contact-icon";
var POPUP = ".popup";
var JOIN_BUTTON = "#join"
var EMAIL_INPUT = "#your-mail";
var SLIDER_PICTURE_ONE = "#slider-picture1"
var SLIDER_PICTURE_TWO = "#slider-picture2"
var SLIDER_BUTTON = "#slider-button"

$(document).ready( function() {
  navMenu = $(NAV_BLOCK);
  navPosition = navMenu.offset().top;
  navList = $(NAV_LIST_ITEM)
  fixedNav();
  navList.click(navScroll);
  $(CONTACTS).click(function() {
    var cont = $(CONTACTS);
    var popup = $(POPUP);  
    cont.removeClass('active');
    $(this).addClass('active');
    var message = $(this).attr('data-popuptext');
    popup.show(200);
    popup.html(message);
    cont.children().hide(100);
    $(this).children().show(100);
  });
  $(JOIN_BUTTON).click(function() {
    var value = $(EMAIL_INPUT).val();
    console.log(value);
  });
  $('input').focus(function(){
    $(this).data('placeholder', $(this).attr('placeholder'))
    $(this).attr('placeholder','');
  });
  $('input').blur(function(){
    $(this).attr('placeholder', $(this).data('placeholder'));
  });
  $(SLIDER_BUTTON).click(function() {
    var pictureOne =  $(SLIDER_PICTURE_ONE).attr("src");
    var pictureTwo =  $(SLIDER_PICTURE_TWO).attr("src");
    $(SLIDER_PICTURE_ONE).attr("src", pictureTwo);
    $(SLIDER_PICTURE_TWO).attr("src", pictureOne);
  });
  window.onscroll = fixedNav;
});

var navPosition;
var navMenu;
var navList;
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








