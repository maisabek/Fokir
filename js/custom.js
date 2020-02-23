$(function(){
    $('.info-list li').click(function(){
    $(this).addClass('selected').siblings('li').removeClass('selected');
    $('.about,.history,.specification,.technical,.review').hide();
    $('.'+$(this).data('class')).fadeIn();
    });
});


$(function(){
        $('.li2').click(function(){
        $('.li2').css("color","goldenrod");

        $('.content1').hide();

        $('.content2').fadeIn();
        
        });
});
$(function(){
    $('.li1').click(function(){
    $('.li1').css("color","goldenrod");
    $('.content2').hide();
    $('.content1').fadeIn();
    });
});
$(document).ready(function(){
    $(".sperator").css("transform","translate(-100%)")
    // $(".designer").fadeToggle(2000);
    $(".sperator").css("transform","translate(100%)")
    // $(".developer").fadeToggle(2000);
});

var slideIndex=0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("con");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); 
}

$(document).ready(function($) {
  $(window).scroll(function() {
        $('.hov1 a').addClass('alt-color');
  });
});
$(document).ready(function(){
    $('.information-h2').countTo();
    //{
    // from:0,
    // to:1000,
    // speed:3000,
    // refreshInterval:10,
    // });
  });
  var sections = document.getElementsByClassName("section"),
    li= document.getElementsByClassName("a");
window.onscroll = function () { 
    for (var i = 0 ; i < sections.length ; i++ ) {
        if (window.scrollY >= sections[i].offsetTop&&window.scrollY <= sections[i].offsetTop + sections[i].offsetHeight) {  
            li[i].classList.add("red");
            
        } else {
            li[i].classList.remove("red");
        }
        
    }
    
}