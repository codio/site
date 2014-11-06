# Handle Codio Sessions

# Start intercom
startIntercom = (data) ->
  return unless Intercom?

  user = data.details

  Intercom 'boot',
    app_id: 'ee8711023afa04b80a6b921ddb3939c1171e0f62',
    email: user.email,
    created_at: if user.created_at then Math.round(user.created_at / 1000) else undefined,
    username: user.name,
    name: user.actual_name || user.name,
    user_id: data.account
    widget:
      activator: '#intercom'

# Show the signed in men
showUser = (user) ->
  hash = md5 user.details.email.toLowerCase()
  $('#gravatar').prop 'src', '//www.gravatar.com/avatar/' + hash + '?s=32&amp;d=mm'
  userlink = $('#userlink')
  userlink.prop 'href', "/#{user.details.name}"
  $('#userlink span').text user.details.name

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
    url: 'https://codio.com/service/'
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

  startIntercom {details: {name: "friedel"}, account: "2"}

  fetchUser session, (error, user) ->
    # Couldn't verify a signed in user
    return anonGa() if error

    startIntercom user if Intercom?
    showUser user
    signedInGa user.details.name
