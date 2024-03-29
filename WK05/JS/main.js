$(document).ready(function () {
    var lastScrollTop = 0;

    $(window).scroll(function () {
        var currentScrollTop = $(this).scrollTop();
        var translatePos = currentScrollTop;
        var rotateDeg = currentScrollTop;
        translatePos = translatePos * 0.8;
        var scalingFactor = 1 - currentScrollTop * .002;
        var translateRectY = 70 - currentScrollTop * 0.1;
        var borderRadiusFactor = currentScrollTop * 0.05;
        var colorFactor = currentScrollTop * 0.7;

        $('#circle-a').css("transform", "translate(" + translatePos + "px, 0px) rotate(" + rotateDeg + "deg) scale(" + scalingFactor + ")");

        $('#circle-b').css("transform", "translate(" + (-translatePos) + "px, 0px) rotate(" + rotateDeg + "deg) scale(" + scalingFactor + ")");

        $('#red').css("transform", "translate(100px, " + (-translateRectY) + "vh)");

        $('#blue').css("transform", "translate(-100px, " + translateRectY + "vh)");

        $('.box').css("border-radius", borderRadiusFactor + "%");
        $('.box').css("transform", "rotate(" + rotateDeg + "deg)");
        


        //Scrolling down
        if (currentScrollTop > lastScrollTop) {
            if ($('#top-nav').hasClass('active')) {
                // $("#top-nav").removeClass("active");   
            }
        }
        //Scrolling up
        else {
            $("#top-nav").addClass("active");
        }
        //Update scroll position
        lastScrollTop = currentScrollTop;

        if (currentScrollTop < 1) {
            if (!$('#top-nav').hasClass('top')) {
                $('#top-nav').addClass('top');
            }

        } else {
            $('#top-nav').removeClass('top');
        }

    });

    //Show the banner detail panel
    $('#bar-btn').click(function () {
        if(!$(this).hasClass('active')){
            $('#menu-container').addClass('active');
            $(this).addClass('active');
            $('#close-btn').addClass('active');
        }
    });

    $('#close-btn').click(function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('#bar-btn').removeClass('active');
            $('#menu-container').removeClass('active');
        }
    });
});

