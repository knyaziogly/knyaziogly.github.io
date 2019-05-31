$(function(){
  $('#tabs-1').show();

  $('#items li').click(function() {
    if($(this).attr('class') == 'acticve'){
      return false;
    }
    var link = $(this).children().attr('href'); //ссылка на текст вкладки для паказа
    var prevActive = $('li.acticve').children().attr("href"); //ссылка на текст пока что активной вкладки

    $('li.acticve').removeClass("acticve");
    $(this).addClass("acticve");
    //скрываем и показуем текст вкладок
    $(prevActive).fadeOut(500, function(){
      $(link).fadeIn(400);
      // Изменяем цвета
      $("items li").css("background", " #007e7d");
      $("li.acticve").css("background", "#00605f");
    });
    return false;
  });
});
