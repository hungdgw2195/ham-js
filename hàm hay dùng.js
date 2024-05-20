/* Scrool bookmark
-------------------------------------- */
$('a[href^="#"]').click(function() {
    var the_id = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(the_id).offset().top
    }, 1000);
    return false;
});


/* Scroll back to top
-------------------------------------- */
$(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
        $('#toTop').fadeIn(500);
    } else {
        $('#toTop').fadeOut(500);
    }
});

$('#toTop').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});
  /* Scroll back to top
-------------------------------------- */
  $(window).scroll(function() {
    var activePoint = $('#js-header').height();
    var scrolltop = $(document).scrollTop() + window.innerHeight;

    if ($(this).scrollTop() > activePoint + 100) {
      $('#js-header').addClass('fixed');
    } else {
      $('#js-header').removeClass('fixed');
    };
  });

/* Resize swap images
-------------------------------------- */
$(window).on('resize', function() {
    var win = $(this);
    if (win.width() < 768) {
        var posScroll = 0;
        $('img').each(function() {
            $(this).attr("src", $(this).attr("src").replace('_pc', '_sp'));
        });
    } else {
        var posScroll = 100;
        $('img').each(function() {
            $(this).attr("src", $(this).attr("src").replace('_sp', '_pc'));
        });
    }
});


/* Fade scroll
-------------------------------------- */
window.onload = function() {
    $(window).scroll(function() {
        $('.fadeDown, .fadeLeft').each(function() {
            let elemPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 300) {
                $(this).addClass('ef-slide');
            }
        });
    }).trigger("scroll");
}


/* Hover swap images
-------------------------------------- */
$('img').hover(
    function() {
        $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
    },
    function() {
        $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
    }
);


/* Scroll paralax
-------------------------------------- */
$(window).bind('scroll', function() {
    var scrollPos = $(window).scrollTop();
    $('.para01').css('bottom', (300 - (scrollPos * 0.2)) + 'px');
    $('.para02').css('top', (0 - (scrollPos * -0.2)) + 'px');
    $('.para03').css('top', (600 - (scrollPos * -0.2)) + 'px');
    $('.para04').css('top', (0 - (scrollPos * -0.2)) + 'px');
});


/* Active navWipe sroll
-------------------------------------- */
var myScrollPos = $('a.active').offset().left + $('a.active').outerWidth(true)/2 + $('.wrapWipe').scrollLeft() - $('.wrapWipe').width()/2;
$('.wrapWipe').scrollLeft(myScrollPos);


/* Zoom
-------------------------------------- */
(function($, $window) {
    "use strict";
    /**
     * Hide container
     */
    var hideContainer = function() {
        var hiddenContainer = document.createElement('style'),
            cssText = '#wrapper { visibility: hidden; }';
 
        hiddenContainer.setAttribute('type', 'text/css');
        hiddenContainer.appendChild(document.createTextNode(cssText));
 
        $('head').append(hiddenContainer);
    };
    /**
     * Adjust viewport
     */
    var adjustViewport = function() {
        var setting = 'target-densitydpi=device-dpi,width=device-width,user-scalable=no',
            ratio, currentRatio;
 
        $('meta[name="viewport"]').attr('content', setting);
 
        $window
            .on('load.adjustViewport resize.adjustViewport', function() {
                currentRatio = $window.width() / 980;
                if (currentRatio === ratio) {
                    return;
                }
                ratio = currentRatio;
                $('html').css('zoom', ratio);
                $('#wrapper').css('visibility', 'visible');
            })
            .trigger('resize.adjustViewport');
    };
    if (/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {
        hideContainer();
 
        var wBr = $(window).width();
        if (wBr > 600) {
            $(adjustViewport);
        }
 
    }
})(window.jQuery, window.jQuery(window));
 
 
/* Menu accordion
-------------------------------------- */
var wBrowser = $(window).width();
if (wBrowser <= 640) {
    $('.question-answer h3:first').addClass('active');
    $('.cont-answer').hide();
    $('.cont-answer:first').slideDown();
    $('.question-answer h3').click(function() {
        var hasClass = $(this).hasClass('active');
        if (!hasClass) {
            $('.cont-answer').slideUp();
            $('.question-answer h3').removeClass('active');
            var $get_answer = $(this).next();
            $get_answer.slideToggle(400);
            if ('.cont-answer:visible') {
                $get_answer.prev().addClass('active');
            }
        } else {
            $('.cont-answer').slideUp();
            $('.question-answer h3').removeClass('active');
        }
    });
};

/* Check button */
var open = 'images/btn_open.png';
var close = 'images/btn_close.png';

$('.accordion').click(function(event) {
    event.preventDefault();
    var thisElem = $(this).find('img');
    if (thisElem.attr('src') === open) {
        thisElem.attr('src', close);
    } else {
        thisElem.attr('src', open)
    }
    $(this).stop().next().slideToggle();
});
 
 
/* Reponsive for meta
-------------------------------------- */
$(window).resize(function() {
    if (screen.width <= 640) {
        $('meta[name="viewport"]').attr('content', 'width=640, user-scalable=no, shrink-to-fit=no');
    } else if (screen.width <= 1440) {
        $('meta[name="viewport"]').attr('content', 'width=1440, user-scalable=no, shrink-to-fit=no');
    } else {
        $('meta[name="viewport"]').attr('content', 'width=device-width, user-scalable=no, shrink-to-fit=no');
    }
}).resize();


/* Match height
-------------------------------------- */
equalheight = function(container) {
    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function() {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}
$(window).on('load', function() {
    equalheight('.sectionThumbnail .items');
});
$(window).resize(function() {
    equalheight('.sectionThumbnail .items');
});

  // modal
  $(".js-modal").click(function() {
    $(".modal_ykien").fadeIn(500);
  });
  $(".close").click(function() {
    $(".modal_ykien").fadeOut(500);
  });
  $(document).click(function(e) {
    if ($(e.target).is('#modal_ykien')) {
      $('#modal_ykien').fadeOut(500);
    }
  });

  //IE jumping fixed elements fix
  if (navigator.userAgent.match(/Trident\/7\./)) { // if IE
    $('body').on("mousewheel", function() {
      //Remove default behavior
      event.preventDefault();

      //Scroll without smoothing
      var wheelDelta = event.wheelDelta;
      var currentScrollPosition = window.pageYOffset;
      window.scrollTo(0, currentScrollPosition - wheelDelta);
    });
  }



// page top
function btnScrollTop(): void {
    const seBackToTop: string = ".js-pagetop";
    const seFooter: string = "footer";
    const yTop: number = 0;
    const pxInBackToTop: number = 180 + yTop;
    const msBTTScroll: number = 1000;

    const eBtt = $(seBackToTop);
    const seFoot = $(seFooter);
    const yDefBttBtn: number = parseInt(eBtt.css("bottom") || "0");
    let isInBttBtn: boolean = false;
    let isOverFooter: boolean = false;
    // $(window).scroll(setBttPos).resize(setBttPos);

    // function setBttPos(): void {
    //   const y: number = $(window).scrollTop();
    //   if (y > pxInBackToTop) {
    //     if (!isInBttBtn) {
    //       isInBttBtn = true;
    //       eBtt.addClass("is-active");
    //     }
    //   } else {
    //     if (isInBttBtn) {
    //       isInBttBtn = false;
    //       eBtt.removeClass("is-active");
    //     }
    //   }
    //   if (seFoot.length > 0) {
    //     const yf: number =
    //       seFoot.offset()?.top + yDefBttBtn - y - $(window).height()!;
    //     if (yf < 0 - 80) {
    //       isOverFooter = true;
    //       eBtt.stop().css("bottom", yDefBttBtn - yf - 80 + "px");
    //     } else if (isOverFooter) {
    //       isOverFooter = false;
    //       eBtt.stop().css("bottom", yDefBttBtn + "px");
    //     }
    //   }
    // }

    $(".js-pagetop").click(function () {
        $("html, body").stop().animate({ scrollTop: yTop }, msBTTScroll);
        return false;
    });
}