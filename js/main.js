$(document).ready(function() {
  $(".parallax").parallax();
  $(".carousel").carousel({
    dist: -150
  });
  $(".slider").slider({
    indicators: false,
    height: 350,
    transition: 500,
    interval: 2000
  });
  $('.modal').modal();
  $('.button-collapse').sideNav();
  $('.tooltipped').tooltip({
    enterDelay:1,
  });
  $('#toast').click(function(){
    Materialize.toast('Added to chart', 3000);
  })
  $('#toast1').click(function(){
    Materialize.toast('Added to chart', 3000);
  })
  $('#toast2').click(function(){
    Materialize.toast('Added to chart', 3000);
  })
  $('#toast4').click(function(){
    Materialize.toast('Added to chart', 3000);
  })
  $('#toast5').click(function(){
    Materialize.toast('Added to chart', 3000);
  })
  $('#toast6').click(function(){
    Materialize.toast('Added to chart', 3000);
  })
});
