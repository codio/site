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

  setInterval transit, 5000