//code for 
$(document).ready(function () {
  $('section[data-type="background"]').each(function () {
    var $bgobj = $(this); // assigning the object

    $(window).scroll(function () {
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));

      // Put together our final background position
      var coords = '50% ' + yPos + 'px';

      // Move the background
      $bgobj.css({ backgroundPosition: coords });
    });
  });
// carousel
  $('.carousel').carousel()

// lightbox JQuery Goonies
  $('.lightbox').click(function () {

    $('.backdrop, .box').animate({ 'opacity': '.50' }, 300, 'linear');
    $('.box').animate({ 'opacity': '1.00' }, 300, 'linear');
    $('.backdrop, .box').css('display', 'block');
  });
  $('.close').click(function () {
    close_box()
  });
  $('.backdrop').click(function () {
    close_box()
  });
});

function close_box() {
  $('.backdrop,.box').animate({ 'opacity': '0' }, 300, 'linear', function () {
    $('.backdrop, .box').css('display', 'none');
  });
}
// lightbox JQuery Jungle Book
$('.lightbox1').click(function () {

  $('.backdrop1, .box1').animate({ 'opacity': '.50' }, 300, 'linear');
  $('.box1').animate({ 'opacity': '1.00' }, 300, 'linear');
  $('.backdrop1, .box1').css('display', 'block');
});
$('.close1').click(function () {
  close_box1()
});
$('.backdrop1').click(function () {
  close_box1()
});


function close_box1() {
$('.backdrop1,.box1').animate({ 'opacity': '0' }, 300, 'linear', function () {
  $('.backdrop1, .box1').css('display', 'none');
});
}

