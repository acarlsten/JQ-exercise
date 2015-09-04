$(document).ready(function() {

/* Create a Wrapper */
$('body').append('<div class="wrapper"></div>');

/* Create 16x16 grid as a child of .wrapper WITH A DUMB LOOP */
var gridsize = 17; /* initially set to 16x16, will be changed via prompt later */

$('.wrapper').append(function() {
  y = 1;
  while (y < gridsize) {
      $('.wrapper').append('<div class="row'+y+' rows"></div>');
        x = 1;
        while (x < gridsize) {
          $('.row'+y).append('<div class="box"></div>');
          x++;
        }
      y++;
    }
});


/* Set boxes height and width to adapt to box size */

  /* Declare Variables, unsure if all are needed yet */
    var numBox = $('.box').length;
    var numRows = $('.rows').length;
    var numBoxPRow = numBox / numRows;
    var wrapH = $('.wrapper').height();
    var wrapW = $('.wrapper').width();
    var calcWidth = wrapW / numBoxPRow;
    var calcHeight = wrapH / numRows;

  /* Set the width of boxes to WrapW / numBoxPRow */
$('.box').css('width', ''+calcWidth+'px');
$('.wrapper').css('max-width', (parseFloat($('.wrapper').css('max-width')) + 2 * numBoxPRow + 'px')); /* Compensates for the 1px border depending on the amount of boxes per row, 2 per */

/* Set the height of boxes to WrapH / numRows */
$('.box').css('height', ''+calcHeight+'px');
$('.wrapper').css('height', (parseFloat($('.wrapper').css('height')) + 4 + 'px'));


/* Testing stuff */
$('.splash').append('<div class="debug"><h4>Debug stuff</h4><p>Number of boxes is '+numBox+'.<br>Number of rows is '+numRows+'.<br>Number of boxes per row is '+numBoxPRow+'.<br>Wrapper dimensions are '+wrapH+'px height and '+wrapW+'px width.</p></div>');




});
