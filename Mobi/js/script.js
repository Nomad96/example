$(document).ready(function () {
            $("#form,.fa.fa-times").click(function () {
                $('.abs').fadeToggle('slow');
                return false;
            }); //click
    $('a.online').click(function(){
        $('.xanut').fadeToggle('fast',function(){
            $('a.online').addClass('clicked');
        });//toggle
        return false;
    });//click
    $(window).scroll(function(){
        if($(this).scrollTop()>400){
            $('.top').fadeIn();
        }
        else{
            $('.top').fadeOut();
        }
    });//scroll
    $(".top a").click(function(){
        var a=$(this).attr('href');
        var b=$(a).offset().top;
        $('body').animate({
            scrollTop:b
        },1000);//animation
        return false;
    });//click
        }); //ready