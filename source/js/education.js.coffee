# Education animations
# --------------------

$ ->
  
  textPos = 0
  
  text = [
    ['TEACHERS', 'TEACHING'],
    ['STUDENTS', 'LEARNING']
  ]
    
  roleEle = $('#header-teachers')
  actionEle = $('#header-teaching')
  
  transit = ->
    textPos++
    
    roleEle.transition {
      x: -2000
      complete: ->
        roleEle.text text[textPos % 2][0]
    }, 250, 'linear'
    roleEle.transition {x: 0}, 500, 'ease'

    actionEle.transition {
      x: 1200
      complete: ->
        actionEle.text text[textPos % 2][1]
    }, 250, 'linear'
    actionEle.transition {x: 0}, 500, 'ease'

  setInterval transit, 4000
  

  # Language selector
  $('#languages li a').on 'click', ->
      ele = $(@)
      iframe = $('#languages iframe')
      src = iframe.attr('src').replace /[0-9]+/, (ele.attr('href').replace('#', '') || '123')
      iframe.attr 'src', src

      ele.parents('ul').find('li').removeClass 'active'
      ele.parent().addClass 'active'

      false