/* globals $ */

$(() => {

  $('#demo-form').submit(function (event) {
    event.preventDefault()

    var data = {
      name: $('#name').val(),
      company: $('#company').val(),
      email: $('#email').val(),
      phone: $('#phone').val(),
      datetime: $('#datetime').val(),
      byEmail: $('#byEmail').prop('checked') ? 'yes' : 'no',
      byPhone: $('#byPhone').prop('checked') ? 'yes' : 'no'
    }

    $.post($("#demo-form").attr('action'), data, function(data, status) {
      if(status == 'success') {
        $('.section.second').fadeOut(1000, function() {
          $('.section.third').fadeIn(1000, function() {
          })
        })
      }
    })
    .fail(function() {
      alert('There was an error procesing your request please try again.')
    })
  })

})
