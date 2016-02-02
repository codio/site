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

    $.post($("#demo-form").attr('action'), data, (data, status) => {
      if(status == 'success') {
        ga('send', 'event', 'Site', 'Book a demo', 'University')
        $('.section.second').fadeOut(1000, () => {
          $('.section.third').fadeIn(1000)
        })
      }
    })
    .fail(function() {
      alert('There was an error procesing your request please try again.')
    })
  })

})
