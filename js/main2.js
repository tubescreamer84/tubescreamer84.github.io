$(document).ready(function(){

    $('.scroll-down').click(function(){
        $('html, body').animate({
            scrollTop: $("#about").offset().top - $('header').outerHeight()
        }, 1000);
    });

    $('.menu a').click(function(e){
         e.preventDefault();
       
        if($(this).attr('data-section') == 'home'){
            scrollMe('home');

        }else{
            $('li.active').removeClass('active');
        $(this).parent('li').addClass('active');
        scrollMe($(this).attr('data-section')); 
        }
       

    });

    $('a.details').click(function(e){
        console.log('click');
        e.preventDefault();
        $(this).siblings('.more-info').slideToggle();
    });

    $('.mobile-button').click(function(){
        $('header').toggleClass('show');
    });

    // $('.over').addClass('fade');

});

$(window).scroll(function(){
   if($(window).scrollTop() > 0){
       $('body').addClass('scrolling');
   }else{
       $('body').removeClass('scrolling');
   }

});


function scrollMe(element){
    console.log(element);
    if(element == 'home'){
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    }else{
        $('html, body').animate({
            scrollTop: $('#'+ element).offset().top - $('header').outerHeight()
        }, 700);
    }
   


}