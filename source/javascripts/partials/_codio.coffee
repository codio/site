# Handle Codio Sessions

# Show the signed in men
showUser = (user) ->
  hash = md5 user.details.email.toLowerCase()
  $('.gravatar').prop 'src', '//www.gravatar.com/avatar/' + hash + '?s=32&amp;d=mm'
  userlink = $('.userlink')
  $('.userlink span').text user.details.name

  $('.signed-out').hide()
  $('.signed-in').show()


# Set google analytics tracking for anonymous users
anonGa = ->
  return unless ga?
  ga 'set', 'dimension1', 'no'
  ga 'set', 'dimension3', 'anonymous'

# Set google analytics tracking for signed in users
signedInGa = (name) ->
  return unless ga?
  ga 'set', 'dimension1', 'yes'
  ga 'set', 'dimension3', name

# Fetch a codio user by its session
#
# session - String
# done    - Callback
#
fetchUser = (session, done) ->
  # Request Setup

  $.ajax
    type: 'POST'
    url: '/service/'
    data: acrequest: JSON.stringify
      object: 'AccountManager'
      method: 'getMyInfo'
      params:
        session_id: session
    success: (data) ->

      if not data? or data.code isnt 1
        return done new Error("Failed request: #{data?.response.message}")

      done null, data.response


$ ->

  # Fetch the session id from the cookie
  session = monster.get 'crafted_session'

  anonGa() if not session?

  fetchUser session, (error, user) ->
    # Couldn't verify a signed in user
    return anonGa() if error

    showUser user
    signedInGa user.details.name
