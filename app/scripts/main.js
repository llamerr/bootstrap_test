$('.glyphicon-chevron-down').click(function(ev){
  $(ev.target).parent('.pull-right').nextAll('.tab-content').first()[0].scrollIntoView();
})
$('.glyphicon-chevron-up').click(function(ev){
  $(ev.target).parent('.pull-right').prevAll('.tab-content').first()[0].scrollIntoView();
})
