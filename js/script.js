var NAV_LIST_ITEM_SELECTOR = '.nav-list';
var CONTACTS_SELECTOR = '.contact-icon';
var POPUP_SELECTOR = '.popup';
var NAV_BLOCK_ID = '#nav';
var JOIN_BUTTON_ID = '#join'
var EMAIL_INPUT_ID = '#your-mail';
var SLIDER_PICTURE_ONE_ID = '#slider-picture1';
var SLIDER_PICTURE_TWO_ID = '#slider-picture2';
var SLIDER_BUTTON_ID = '#slider-button';
var NAV_ACTIVE_CLASS = 'nav-active';
var CONTACT_ACTIVE_CLASS = 'active';
var POPUP_TEXT_ATTR = 'data-popuptext';

var navPosition;
var navMenu;
var navList;
var navMenuHeight;

$(document).ready( function() {

  navMenu = $(NAV_BLOCK_ID);
  navMenuHeight = navMenu.outerHeight();
  navPosition = navMenu.offset().top;
  navList = $(NAV_LIST_ITEM_SELECTOR);

  positionToFixed();

  window.onscroll = positionToFixed;

  navList.click(navScroll);
  
  $(CONTACTS_SELECTOR).click(function() {
    var contactsArr = $(CONTACTS_SELECTOR);
    var popup = $(POPUP_SELECTOR);
    if ($(this).hasClass(CONTACT_ACTIVE_CLASS)) {
      $(this).removeClass(CONTACT_ACTIVE_CLASS);
      popup.hide();
      $(this).children().hide();
    } else {  
    contactsArr.removeClass(CONTACT_ACTIVE_CLASS);
    $(this).addClass(CONTACT_ACTIVE_CLASS);
    var message = $(this).attr(POPUP_TEXT_ATTR);
    popup.show();
    popup.html(message);
    contactsArr.children().hide();
    $(this).children().show();
    }
  });

  $(JOIN_BUTTON_ID).click(function() {
    var value = $(EMAIL_INPUT_ID).val();
    console.log(value);
    $(EMAIL_INPUT_ID).val('');
  });

  $('input').focus(function(){
    $(this).data('placeholder', $(this).attr('placeholder'));
    $(this).attr('placeholder','');
  });
  $('input').blur(function(){
    $(this).attr('placeholder', $(this).data('placeholder'));
  });

  $(SLIDER_BUTTON_ID).click(function() {
    var pictureOne =  $(SLIDER_PICTURE_ONE_ID).attr('src');
    var pictureTwo =  $(SLIDER_PICTURE_TWO_ID).attr('src');
    $(SLIDER_PICTURE_ONE_ID).attr('src', pictureTwo);
    $(SLIDER_PICTURE_TWO_ID).attr('src', pictureOne);
  });

});

function navScroll() {
  navList.removeClass(NAV_ACTIVE_CLASS); 
  $(this).addClass(NAV_ACTIVE_CLASS);
  var id = $(this).attr('href');
  var top = $(id).offset().top - navMenuHeight;
  $('body, html').animate({scrollTop:top}, 'slow');
}

function positionToFixed() {
  var scrolled = $(window).scrollTop();
  if(scrolled >= navPosition) {
    navMenu.css('position', 'fixed');
  } else if (scrolled < navPosition) {
    navMenu.css('position', 'static');
  }
}








