//code for 
$(document).ready(function () {
  $('section[data-type="background"]').each(function () {
    var $bgobj = $(this); 

    $(window).scroll(function () {
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));
      var coords = '50% ' + yPos + 'px';
      $bgobj.css({ backgroundPosition: coords });
    });
  });



  // lightbox Goonies
  $(document).ready(function () {

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
});

// lightbox Jungle Book

$(document).ready(function () {
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

});

// lightbox Iron Giant
$(document).ready(function () {
  $('.lightbox2').click(function () {

    $('.backdrop2, .box2').animate({ 'opacity': '.50' }, 300, 'linear');
    $('.box2').animate({ 'opacity': '1.00' }, 300, 'linear');
    $('.backdrop2, .box2').css('display', 'block');
  });
  $('.close2').click(function () {
    close_box1()
  });
  $('.backdrop2').click(function () {
    close_box2()
  });


  function close_box2() {
    $('.backdrop2,.box2').animate({ 'opacity': '0' }, 300, 'linear', function () {
      $('.backdrop2, .box2').css('display', 'none');
    });
  }

});

// lightbox Gremlins
$(document).ready(function () {
  $('.lightbox3').click(function () {

    $('.backdrop3, .box3').animate({ 'opacity': '.50' }, 300, 'linear');
    $('.box3').animate({ 'opacity': '1.00' }, 300, 'linear');
    $('.backdrop3, .box3').css('display', 'block');
  });
  $('.close3').click(function () {
    close_box3()
  });
  $('.backdrop3').click(function () {
    close_box3()
  });


  function close_box3() {
    $('.backdrop3,.box3').animate({ 'opacity': '0' }, 300, 'linear', function () {
      $('.backdrop3, .box3').css('display', 'none');
    });
  }

});

// lightbox Star Wars
$(document).ready(function () {
  $('.lightbox4').click(function () {

    $('.backdrop4, .box4').animate({ 'opacity': '.50' }, 300, 'linear');
    $('.box4').animate({ 'opacity': '1.00' }, 300, 'linear');
    $('.backdrop4, .box4').css('display', 'block');
  });
  $('.close4').click(function () {
    close_box4()
  });
  $('.backdrop4').click(function () {
    close_box4()
  });


  function close_box4() {
    $('.backdrop4,.box4').animate({ 'opacity': '0' }, 300, 'linear', function () {
      $('.backdrop4, .box4').css('display', 'none');
    });
  }

});

// lightbox Terminator
$(document).ready(function () {
  $('.lightbox5').click(function () {

    $('.backdrop5, .box5').animate({ 'opacity': '.50' }, 300, 'linear');
    $('.box5').animate({ 'opacity': '1.00' }, 300, 'linear');
    $('.backdrop5, .box5').css('display', 'block');
  });
  $('.close5').click(function () {
    close_box5()
  });
  $('.backdrop5').click(function () {
    close_box5()
  });
});
function close_box5() {
  $('.backdrop5,.box5').animate({ 'opacity': '0' }, 300, 'linear', function () {
    $('.backdrop5, .box5').css('display', 'none');
  });
}




// lightbox Batman
$(document).ready(function () {

  $('.lightbox6').click(function () {

    $('.backdrop6, .box6').animate({ 'opacity': '.50' }, 300, 'linear');
    $('.box6').animate({ 'opacity': '1.00' }, 300, 'linear');
    $('.backdrop6, .box6').css('display', 'block');
  });
  $('.close6').click(function () {
    close_box6()
  });
  $('.backdrop6').click(function () {
    close_box6()
  });
});

function close_box6() {
  $('.backdrop6,.box6').animate({ 'opacity': '0' }, 300, 'linear', function () {
    $('.backdrop6, .box6').css('display', 'none');
  });
}


// lightbox Gremlins2
$(document).ready(function () {

  $('.lightbox7').click(function () {

    $('.backdrop7, .box7').animate({ 'opacity': '.50' }, 300, 'linear');
    $('.box7').animate({ 'opacity': '1.00' }, 300, 'linear');
    $('.backdrop7, .box7').css('display', 'block');
  });
  $('.close7').click(function () {
    close_box7()
  });
  $('.backdrop7').click(function () {
    close_box7()
  });
});

function close_box7() {
  $('.backdrop7,.box7').animate({ 'opacity': '0' }, 300, 'linear', function () {
    $('.backdrop7, .box7').css('display', 'none');
  });
}


// lightbox The Thing
$(document).ready(function () {
  $('.lightbox8').click(function () {

    $('.backdrop8, .box8').animate({ 'opacity': '.50' }, 300, 'linear');
    $('.box8').animate({ 'opacity': '1.00' }, 300, 'linear');
    $('.backdrop8, .box8').css('display', 'block');
  });
  $('.close8').click(function () {
    close_box8()
  });
  $('.backdrop8').click(function () {
    close_box8()
  });


  function close_box8() {
    $('.backdrop8,.box8').animate({ 'opacity': '0' }, 300, 'linear', function () {
      $('.backdrop8, .box8').css('display', 'none');
    });
  }

});

// lightbox nightmare
$(document).ready(function () {
  $('.lightbox9').click(function () {

    $('.backdrop9, .box9').animate({ 'opacity': '.50' }, 300, 'linear');
    $('.box9').animate({ 'opacity': '1.00' }, 300, 'linear');
    $('.backdrop9, .box9').css('display', 'block');
  });
  $('.close9').click(function () {
    close_box9()
  });
  $('.backdrop9').click(function () {
    close_box9()
  });


  function close_box9() {
    $('.backdrop9,.box9').animate({ 'opacity': '0' }, 300, 'linear', function () {
      $('.backdrop9, .box9').css('display', 'none');
    });
  }

});

// lightbox Big Trouble
$(document).ready(function () {
  $('.lightbox10').click(function () {

    $('.backdrop10, .box10').animate({ 'opacity': '.50' }, 300, 'linear');
    $('.box10').animate({ 'opacity': '1.00' }, 300, 'linear');
    $('.backdrop10, .box10').css('display', 'block');
  });
  $('.close10').click(function () {
    close_box10()
  });
  $('.backdrop10').click(function () {
    close_box10()
  });


  function close_box10() {
    $('.backdrop10,.box10').animate({ 'opacity': '0' }, 300, 'linear', function () {
      $('.backdrop10, .box10').css('display', 'none');
    });
  }

});

// lightbox Aliens
$(document).ready(function () {
  $('.lightbox11').click(function () {

    $('.backdrop11, .box11').animate({ 'opacity': '.50' }, 300, 'linear');
    $('.box11').animate({ 'opacity': '1.00' }, 300, 'linear');
    $('.backdrop11, .box11').css('display', 'block');
  });
  $('.close11').click(function () {
    close_box11()
  });
  $('.backdrop11').click(function () {
    close_box11()
  });


  function close_box11() {
    $('.backdrop11,.box11').animate({ 'opacity': '0' }, 300, 'linear', function () {
      $('.backdrop11, .box11').css('display', 'none');
    });
  }

});

// nice Select tool registration page
$(document).ready(function () {
  $('select').niceSelect()
})

$('#carouselFade').carousel();