// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// save button function
$(function () {
  $('.saveBtn').click(function() {
    var blockId = $(this).parent('.time-block').attr('id');
    var content = $(this).parent('.time-block').find('textarea').val();
    localStorage.setItem(blockId, content);
    console.log(content, blockId)
  });

//Live moving block function
  $('.time-block').each(function() {
    var hour = $(this).attr('id').split('-')[1];

      if (hour < dayjs().hour()) {
        $(this).addClass('past');
      } else if (hour == dayjs().hour()) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }

      $(this).find('textarea').text(localStorage.getItem($(this).attr('id')));
  });

//displaying time using daysjs
  $('#currentDay').text(dayjs().format('dddd, MMMM D, h:mm:s A'));
});
  