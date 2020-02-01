$(document).ready(function(){
$('.proposition_link').click(function(e) {
$('.proposition_link a').addClass('active');
});
$('.h_menu').click(function(e) {
$('.proposition_link a').removeClass('active');
});



/* Show Dropdown Menu List on Click Parent Link  */

var minWidth = window.matchMedia("(min-width: 992px)");
if (minWidth.matches)
{
	
	
$('.mega-dropdown').mouseenter(function(){
$(this).children(".nested").toggle();
}).mouseleave(function(){
$(this).children(".nested").toggle();
});	
}


var maxWidth = window.matchMedia("(max-width: 991px)");
if (maxWidth.matches)
{

$('.slimScrollMegaMenu').slimScroll({
railVisible: true,
railColor: '#ffffff',
color: '#8B1C24',
height:260,
size : '7px'
});	

var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

/* Level One */
$(".caret").click(function() {
var ddLink = $(this).parent("mega-dropdown");
if($(this).hasClass("caret-down"))
{
$(this).parent().addClass("active-dropdown");
$('.hide_level_1').hide();
$('.mega-dropdown.active-dropdown').show();
$('.nav_search').hide();
}
else
{
$('.hide_level_1').show();
$('.nav_search').show();
$(this).parent().removeClass("active-dropdown");
}
});


/* Level Two */
$(".dropdown_level_2 ").click(function() {
$(this).removeClass("show");
$(this).children().removeAttr("data-toggle");
$(this).children().removeClass("dropdown-toggle");
});


}

/* End Show Dropdown Menu List on Click Parent Link  */






/* Add More Samples Fields Script */
$(".moreBox").slice(0, 0).show();
if ($(".fields_row:hidden").length != 0) {
$("#addMoreFields").show();
}		
$("#addMoreFields").on('click', function (e) {

var maxWidth = window.matchMedia("(max-width: 991px)");
if (maxWidth.matches)
{			
e.preventDefault();
$(".moreBox:hidden").slice(0, 1).slideDown();
if ($(".moreBox:hidden").length == 0)
{
$("#addMoreFields").fadeOut('slow');
}
}
});
/* End Add More Samples Fields Script */






var minWidth = window.matchMedia("(min-width: 768px)");
if (minWidth.matches) {
$('.features_tab .tab-pane').removeClass('active');
$('.features_tab .nav-pills li').removeClass('active');
}


jQuery(window).scroll(function(){
if (jQuery(this).scrollTop() > 50) {
jQuery('.navbar-fixed-top').addClass('stickyNav');
} else {
jQuery('.navbar-fixed-top').removeClass('stickyNav');
}
});

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
event.preventDefault();
$(this).ekkoLightbox();
});



//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
if ($(".navbar").offset().top > 50) {
$(".navbar-fixed-top").addClass("top-nav-collapse");
} else {
$(".navbar-fixed-top").removeClass("top-nav-collapse");
}
});

//jQuery for page scrolling feature
$(function() {
$('a.page-scroll').bind('click', function(event) {
var $anchor = $(this);
$('html, body').stop().animate({
scrollTop: $($anchor.attr('href')).offset().top
}, 1500, 'easeInOutExpo');
event.preventDefault();
});
});

let mainNavLinks = document.querySelectorAll(".highlightMenu li a");
let mainSections = document.querySelectorAll(".sectionContainer");
let lastId;
let cur = [];
window.addEventListener("scroll", event => {
let fromTop = window.scrollY;

mainNavLinks.forEach(link => {
let section = document.querySelector(link.hash);

if (
section.offsetTop <= fromTop &&
section.offsetTop + section.offsetHeight > fromTop)
{
link.classList.add("current");
} else {
link.classList.remove("current");
}
});
});


/* Thumbnail Slider Carousel for Upload Photos */
$("#upload_thumb_carousel").owlCarousel({
items : 5,
itemsDesktop:[1199,5],
itemsDesktopSmall:[980,3],
itemsMobile : [600,1],
autoPlay:false,
navigation: true
});
$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
/* End Thumbnail Slider Carousel for Upload Photos */


/* Thumbnail Slider Carousel for Upload Photos */
$("#noFees_carousel").owlCarousel({
items : 3,
itemsDesktop:[1199,3],
itemsDesktopSmall:[980,3],
itemsMobile : [600,1],
autoPlay:true,
navigation: false
});
$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
/* End Thumbnail Slider Carousel for Upload Photos */







/* Bootstap Slider Progress Bar */
var percent = 0, 
bar = $('.transition-timer-carousel-progress-bar'), 
crsl = $('#carouselExampleIndicators');

function progressBarCarousel() {
bar.css({width:percent+'%'});
percent = percent +0.5;
if (percent>100) {
percent=0;
crsl.carousel('next');
}      
}
crsl.carousel({
interval: false,
pause: true
}).on('slid.bs.carousel', function () {});var barInterval = setInterval(progressBarCarousel, 30);
crsl.hover,(
function(){
clearInterval(barInterval);
},
function(){
barInterval = setInterval(progressBarCarousel, 30);
});


/* Read More Paragraphs */

    var maxLength = 250;
    $(".show-read-more").each(function(){
        var myStr = $(this).text();
        if($.trim(myStr).length > maxLength){
            var newStr = myStr.substring(0, maxLength);
            var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
            $(this).empty().html(newStr);
            $(this).append(' <a href="javascript:void(0);" class="read-more"><span class="pull-right read_more_expander">Expand <i class="fa fa-plus pull-right" aria-hidden="true"></i></a>');
            $(this).append('<span class="more-text">' + removedStr + '</span>');
        }
    });
    $(".read-more").click(function(){
        $(this).siblings(".more-text").contents().unwrap();
        $(this).remove();
    });



/* Slim Scroll For Popup Boxes */
/* Product Access */
$('.slimScrollAccessoriesPopup').slimScroll({
railVisible: true,
railColor: '#ffffff',
color: '#1C85C7',
height:250,
size : '12px'
});

/* Sizes 312 */
$('.slimScrollSizes230Popup').slimScroll({
railVisible: true,
railColor: '#ffffff',
color: '#1C85C7',
height:230,
size : '12px'
});




/* Popup Accessories */
var maxWidth = window.matchMedia("(max-width: 575px)");
if (maxWidth.matches) {
$('.slimScrollPopup').slimScroll({
railVisible: true,
railColor: '#ffffff',
color: '#1C85C7',
height:350,
size : '7px'
});
}
else if(!maxWidth.matches)
{
if((".popup_rotation").find('slimScrollDiv').exist())
{
(".popup_rotation").find('slimScrollDiv').removeClass("slimScrollDiv")
}
}



});


/* Page To Top Script */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
document.getElementById("myBtn").style.display = "block";
} else {
document.getElementById("myBtn").style.display = "none";
}
}

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

/* Product Plus / Minus Digits Counter */

function incrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data('field');
  var parent = $(e.target).closest('div');
  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  if (!isNaN(currentVal)) {
    parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
  } else {
    parent.find('input[name=' + fieldName + ']').val(0);
  }
}

function decrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data('field');
  var parent = $(e.target).closest('div');
  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  if (!isNaN(currentVal) && currentVal > 0) {
    parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
  } else {
    parent.find('input[name=' + fieldName + ']').val(0);
  }
}

$('.input-group').on('click', '.button-plus', function(e) {
  incrementValue(e);
});

$('.input-group').on('click', '.button-minus', function(e) {
  decrementValue(e);
});
/* End Product Plus / Minus Digits Counter */