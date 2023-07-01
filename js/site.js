$(document).ready(function () {

    $(".navbar").on("click", ".navbarButton", function(){
        $(".navbar .links").slideToggle("slow");
    });

    $('.navbar .links').on('click',"a", function () {
        $(this).parent().addClass('active').siblings().removeClass();
        
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - $('.navigation').height()
        }, 700);
    });
    
    // go top button
    var goTopBtn = $('.go_top');
    
    $(window).on('scroll', function () {
        
        if ($(window).scrollTop() >= 700) {
            goTopBtn.fadeIn();
        } else {
            goTopBtn.fadeOut();
        }
        
    });
    
    goTopBtn.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });
    
});