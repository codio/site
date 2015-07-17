/* global md5, $, monster, ga, Intercom */

function showUser (user) {
  const hash = md5(user.details.email.toLowerCase())
  $('.gravatar').prop('src', '//www.gravatar.com/avatar/' + hash + '?s=32&ampd=mm')

  $('.userlink span').text(user.details.name)
  $('.signed-out').hide()
  $('.signed-in').show()
}

function bootIntercom (user) {
  let createdAt
  let email
  let account

  if (user && user.details) {
    createdAt = user.details.created_at
    createdAt = (createdAt) ? Math.round(createdAt / 1000) : undefined
    createdAt = (isNaN(createdAt)) ? undefined : createdAt

    email = user.details.email
    account = user.account
  }

  Intercom('boot', {
    app_id: 'hzz6oifn',
    email: email,
    user_id: account,
    created_at: createdAt
  })
}

function anon () {
  anonGa()
  bootIntercom()
}

function signedIn (user) {
  signedInGa(user.details.name)
  bootIntercom(user)
}

function anonGa () {
  if (typeof ga === 'undefined' || ga === null) {
    return
  }
  ga('set', 'dimension1', 'no')
  ga('set', 'dimension3', 'anonymous')
}

function signedInGa (name) {
  if (typeof ga === 'undefined' || ga === null) {
    return
  }
  ga('set', 'dimension1', 'yes')
  ga('set', 'dimension3', name)
}

function fetchUser (session, done) {
  return $.ajax({
    type: 'POST',
    url: '//codio.dev/service/',
    data: {
      acrequest: JSON.stringify({
        object: 'AccountManager',
        method: 'getMyInfo',
        params: {
          session_id: session
        }
      })
    },
    success: function (data) {
      if ((data == null) || data.code !== 1) {
        const message = data ? '' : data.response.message
        return done(new Error('Failed request: ' + message))
      }
      return done(null, data.response)
    }
  })
}

$(() => {
  const session = monster.get('crafted_session')
  if (session == null) return anon()

  fetchUser(session, (error, user) => {
    if (error) return anon()

    // showUser(user)
    signedIn(user)
  })
})
