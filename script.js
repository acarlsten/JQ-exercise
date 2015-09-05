$(document).ready(function() {

/* Create a Wrapper */
$('body').append('<div class="wrapper"></div>');


var gridsize = 17; /* initially set to 16x16, will be changed via prompt later, should probably have turned this into an argument for the below function but ehh */

/* MAIN BOX CREATING FUNCTION */
function CreateBox() {

  /* Clear the canvas and debug info before proceeding */

  $(".wrapper").empty();
  $(".debugwrap").remove();

  /* Create gridsize x gridsize grid of boxes */

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
      $('.splash').append('<div class="debugwrap"></div>');
      $('.debugwrap').append('<div class="debug"><h4>Debug stuff</h4><p>Number of boxes is '+numBox+'.<br>Number of rows is '+numRows+'.<br>Number of boxes per row is '+numBoxPRow+'.<br>Wrapper dimensions are '+wrapH+'px height and '+wrapW+'px width.</p></div>');
} /* END OF BOXCREATOR FUNCTION */

CreateBox(); /* Call the function once to set up default page */




/* First button to change gridsize */
$('#gridchanger').on('click', function () {
  x = prompt("Enter a new grid size, i.e. 12 -> 12x12 grid, 1-64 accepted.", "16");

  y = parseFloat(x) + 1; /* make it 1 to 1 */

    if ((y < 66 /* I don't know why this is necessary */) && (y > 0)){
      $('.wrapper').css('max-width', '400px'); /* Hacky as heck, but to prevent the wrapper from slowly expanding if you pick the same gridsize as is already set */
      gridsize = y;
      CreateBox();
      }
      else {
        alert("UNACCEPTABLE, 1-64 only");
      }

});


/******** TODO: IMPLEMENT THE COLOR SWITCHING MECHANIC VIA ADDING A HIGHLIGHTED CLASS
*********       Implement more versions of it with random shades of a color (don't forget border color), and a gradual "eraser" effect
*********       also perhaps a cool fading animation. Use other buttons to activate these modes, probably going to need lots of resetting,
*********       i.e. you should only have to set gridsize once, after that you should be able to reset the canvas and start painting in a
*********       new mode (with the same size you once set) */


});
