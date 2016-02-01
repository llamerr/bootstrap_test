$('.glyphicon-chevron-down').click(function(ev){
  $(ev.target).parent('.pull-right').nextAll('.tab-content').first()[0].scrollIntoView();
  $($(ev.target).parent('.pull-right').nextAll('.pull-right')[0]).show().addClass('skip');
  $($(ev.target).parent('.pull-right').nextAll('.pull-right')[1]).show().addClass('skip');
});
$('.glyphicon-chevron-up').click(function(ev){
  $(ev.target).parent('.pull-right').prevAll('.tab-content').first()[0].scrollIntoView();
  $($(ev.target).parent('.pull-right').prevAll('.pull-right')[0]).show().addClass('skip');
  $($(ev.target).parent('.pull-right').prevAll('.pull-right')[1]).show().addClass('skip');
});

$(window).scroll(function(ev) {
  $('.pull-right').each(function(i, el){
    if ($(el).hasClass('skip')) {
      $(el).removeClass('skip');
      console.log('shit')
    } else {
      $(el).show();
      var top = el.getBoundingClientRect().top,
        bot = window.innerHeight - top;
      if (top < 200 && bot > 200 || top > 200 && bot < 200) {
        $(el).show();
      } else {
        $(el).hide();
      }
    }
  })
});
