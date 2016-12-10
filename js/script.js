var NAV_BLOCK_ID = "#nav";
var NAV_LIST_ITEM_SELECTOR = ".nav-list";
var CONTACTS_SELECTOR = ".contact-icon";
var POPUP_SELECTOR = ".popup";
var JOIN_BUTTON_ID = "#join"
var EMAIL_INPUT_ID = "#your-mail";
var SLIDER_PICTURE_ONE_ID = "#slider-picture1"
var SLIDER_PICTURE_TWO_ID = "#slider-picture2"
var SLIDER_BUTTON_ID = "#slider-button"

$(document).ready( function() {
  navMenu = $(NAV_BLOCK_ID);
  navPosition = navMenu.offset().top;
  navList = $(NAV_LIST_ITEM_SELECTOR)
  fixedNav();
  navList.click(navScroll);
  
  $(CONTACTS_SELECTOR).click(function() {
    var cont = $(CONTACTS_SELECTOR);
    var popup = $(POPUP_SELECTOR);  
    cont.removeClass('active');
    $(this).addClass('active');
    var message = $(this).attr('data-popuptext');
    popup.show(200);
    popup.html(message);
    cont.children().hide(100);
    $(this).children().show(100);
  });
  $(JOIN_BUTTON_ID).click(function() {
    var value = $(EMAIL_INPUT_ID).val();
    console.log(value);
  });
  $('input').focus(function(){
    $(this).data('placeholder', $(this).attr('placeholder'))
    $(this).attr('placeholder','');
  });
  $('input').blur(function(){
    $(this).attr('placeholder', $(this).data('placeholder'));
  });
  $(SLIDER_BUTTON_ID).click(function() {
    var pictureOne =  $(SLIDER_PICTURE_ONE_ID).attr("src");
    var pictureTwo =  $(SLIDER_PICTURE_TWO_ID).attr("src");
    $(SLIDER_PICTURE_ONE_ID).attr("src", pictureTwo);
    $(SLIDER_PICTURE_TWO_ID).attr("src", pictureOne);
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








