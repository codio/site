# Handle education support form
$ ->

  formSubmitted = false

  $('#education-support').on 'submit', (e)->
    return true if formSubmitted

    e.preventDefault()
    $this = $(this)

    if $.trim($this.find('input[name=email]').val()) == ""
      alert('Please enter your email address');
      $this.find('input[name=email]').focus()
      return false

    name = $.trim($this.find('input[name=first_name]').val())
    if name != ""
      if (names = name.split(' ')).length > 1
        $this.find('input[name=first_name]').val(names[0])
        $this.find('input[name=last_name]').val(names[1])


    formSubmitted = true

    # curl -X POST \
    #   -H "X-Parse-Application-Id: OjkybAxI0uyVsFkw1iNcYIavzBVgFI1aXo7g9Oo4" \
    #   -H "X-Parse-REST-API-Key: iDzEg9jeVe59j1DX5ci24dbbMC8E9Ij89hvCtc5x" \
    #   -H "Content-Type: application/json" \
    #   -d '{"username":"cooldude6","password":"p_n7!-e8","phone":"415-392-0202"}' \
    #   https://api.parse.com/1/users

    email = $.trim($this.find('input[name=email]').val())

    $.ajax 'https://api.parse.com/1/users',
      type: 'POST'
      dataType: 'json'
      data: '{"username":"' + email + '","password":"password","email":"' + email + '"}'
      contentType: "application/json"
      headers:
        "X-Parse-Application-Id": "OjkybAxI0uyVsFkw1iNcYIavzBVgFI1aXo7g9Oo4"
        "X-Parse-REST-API-Key": "iDzEg9jeVe59j1DX5ci24dbbMC8E9Ij89hvCtc5x"
      success: ->
        $this.submit()