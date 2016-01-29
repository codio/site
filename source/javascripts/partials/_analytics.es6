/* globals $ */

$(() => {
  $('#school-book-a-demo').on('click', function() {
    ga('send', 'event', 'Site', 'Book a demo', 'School')
  })

})