
$ ->
  tabs = new jqTabs $('#tabs'), {}

  tabs.on 'change', (id) ->
    selector = "#tab#{id+1}"
    setTimeout ->
      $('.tab').not(selector).css 'display': 'none'
      $(selector).css 'display': 'block'
    , 250
