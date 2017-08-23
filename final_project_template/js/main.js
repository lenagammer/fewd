

$('.hamburger-icon').on('click', function () {
$('#superburger').slideToggle();
});


$('.headeretc').on('click', function () {
$('.about').fadeIn();
});


$('#w1 h4').on('click' , function (){
  $('#w1 .writing'). slideToggle();
});


$('#w2 h4').on('click' , function (){
  $('#w2 .writing'). slideToggle();
});

$('#w3 h4').on('click' , function (){
  $('#w3 .writing'). slideToggle();
});


$('#w4 h4').on('click' , function (){
  $('#w4 .writing'). slideToggle();
});
//expand .read section with javascript?

$('#playheader').on('click' , function(){
  $('#pastwork').fadeIn(500);
});

$('#pastwork').on('click' , function(){
  $('#current').fadeIn(500);
});

//how to use scroll instead?





$('#button').on('click', function () {
   $('#slideout').slideToggle(500);
   $('.links').addClass('linksactive');
 });




 $('#email h4').on('click', function() {
   $('#modal-border'). slideToggle();
 });

 //need to fix this!
