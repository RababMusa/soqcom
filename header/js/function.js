$(function(){
    $('.divlangAR').hide();

    $('.divlang.divlangEN, .divlangAR').on(
      'click',
      function() 
      {
        $('.divlang.divlangEN, .divlangAR').toggle()
      }
    );
});