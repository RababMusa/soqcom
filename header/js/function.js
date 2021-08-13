$(function(){
    $('.divlangAR').hide();

    $('.divlang.divlangEN, .divlangAR').on(
      'click',
      function() 
      {
        $('.divlang.divlangEN, .divlangAR').toggle()
      }
    );
    $(".nav-item").click(function (e) { 
      $(".nav-item").removeClass("active");
      $(this).addClass("active");
    });
});