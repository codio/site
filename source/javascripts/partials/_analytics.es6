/* globals $ */

$(() => {
  $('#school-book-a-demo').on('click', function() {
    f_ga('send', 'event', 'Site', 'Book a demo', 'School')
  })
})