$(document).ready(function(){
// hamburger
$('.ham').click(function(){
  $('.ham').stop().toggleClass('on');
  $('body').toggleClass('open');
  });
  //.main_slider bxslider

  var mainslides = $('.slides').bxSlider({
    mode:'horizontal',
    controls:false,
    pager:true,
    pagerSelector:'.main_slider .pager'
  });
  var controlBtn = $('.main_slider .controls span');
  
  controlBtn.click(function(){
    if($(this).hasClass('next')){
      mainslides.goToPrevSlide();
    }else{
      mainslides.goToNextSlide()
    }
  });
  //.Stats_excerpt_section Number Animation
  var executed = false;
  var $statItem = $('.item .count');
  var $Ssection = $('.Stats_excerpt_section');
  
  $(window).scroll(function(){
    if($(this).scrollTop() >= $Ssection.offset().top - 300 && executed == false){
      $statItem.each(function(){
        var currentItem = $(this),
            $rateNUm = currentItem.attr('data-rate');
            $({mycount:0}).animate({mycount:$rateNUm},{
              duration:2500,
              progress:function(){
                var now = this.mycount;
                currentItem.text(Math.floor(now));
              },  //중간중간 진행중에 할일 
            });
      });
      executed = true;
    } else if( $(window).scrollTop() < $Ssection.offset().top -1000){
    $statItem.text('0');
    executed = false; }
  });
  
  // .Latest_blog_section bxslider

  var blogSlides = $('.Latest_blog_list').bxSlider({
    mode:'horizontal',
    controls:false,
    pager:false,
    minSlides:1,
    maxSlides:3,
    moverSlides:1,
    slideWidth: 370
    
  });

  var controlBtn2 = $('.Latest_blog_wrap .controls span');
  
  controlBtn2.click(function(){
    if($(this).hasClass('prev')){
      blogSlides.goToPrevSlide();
    }else{
      blogSlides.goToNextSlide();
    }
  });

  // .Portfolio_section sorting

  var $sortBtn = $('.sorting span'),
      $targetList = $('.Portfolio_section_list li');

      $sortBtn.click(function(){
        if($(this).text() == "All"){
          $targetList.fadeIn();
        }
        else{
        $('.sorting span').removeClass('active')
        $(this).addClass('active');
        var $targetClass = "." + $(this).text();
        $targetList.fadeOut();
        $($targetClass).fadeIn();
      }
      });

  // partner_list slider
  var partner_list_slider = $('.partner_list').bxSlider({
    mode:'horizontal',
    controls:false,
    pager:false,
    minSlides:2,
    maxSlides:9,
    slideWidth:170,
    slideMargin:30,
    auto:true,
    pause:2000,
    speed:2000
  });

  // Testimonials_section  slide_tab

  var $tabLink = $('.tablinks span'),
      $targetItem = $('.review_contents .item');

      $tabLink.click(function(){
        var $targetItemIdx = $(this).index();
        $tabLink.removeClass('active');
        $(this).addClass('active');
        $targetItem.css('opacity',0).removeClass('active');
        $targetItem.eq($targetItemIdx).animate({opacity:1},300).addClass('active');
      });
      
  // Testimonials_section accordion    
  var $accHeader = $('.accordion header'),
      $accContent = $('.accordion div');  

      $accHeader.click(function(){
        $accHeader.removeClass('active');
        var $this = $(this);
        $this.addClass('active').next().slideToggle();
        $this.next().siblings('div').slideUp();
      });
      $accHeader.eq(0).trigger('click');
});