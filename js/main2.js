$(document).ready(function(){

    if(! $('html').hasClass('cssvwunit')){
        headerHeight();
    }
});


$(window).resize(function(){
    if(! $('html').hasClass('cssvwunit')){
        headerHeight();
    }
});

$(window).load(function(){
      if(! $('html').hasClass('cssvwunit')){
        headerHeight();
    }
});


function headerHeight(){
    $('.jumbotron').height($(window).height());
}