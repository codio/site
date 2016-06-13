/* globals $, numeral */

const PRICES = window.PRICES

const DEFAULT_START = {
  individual: 0,
  business: 0,
  school: 0,
  university: 3
}

const DEFAULT_CURRENCY = {
  individual: 'dollar',
  business: 'dollar',
  school: 'pound',
  university: 'pound'
}

const DEFAULT_RANGE = {
  individual: 'month',
  business: 'year',
  school: 'year',
  university: 'year'
}

const $currency = $('.currency-block .currency')
const $typeList = $('.nav .nav-tabs')
const $types = $typeList.find('li.item')
const $currencyOption = $('.currency-block .currency-option')
const $tabs = $('.nav-tabs li')
const $countNumber = $('.pricing-content-col .count .number')
const $amount = $('.pricing-content-col .amount')
const $range = $('.pricing-content-col .range')

const params = name => {
  const results = new RegExp(`[\?&]${name}=([^&#]*)`).exec(window.location.href)
  if (results == null) return null
    return results[1] || 0
}

const defaultType = params('type') ? params('type') : 'school'

const state = {
  symbol: '$', 
  oldType: defaultType,
  type: defaultType,
  range: DEFAULT_RANGE['school'],
  currency: DEFAULT_CURRENCY['school'],
}

const setCurrency = currency => {
  state.currency = currency
  $currency.find(`input[name=currency][value=${currency}]`).prop('checked', true)
  $currency.find(`input[name=currency][value=${currency}]`).trigger('change')
}

const findItem = type => $typeList.find('li[data-type="' + type + '"]')

const currentSelection = (step = state.step) => {
  return PRICES[state.type][step]
}

const updateDisplay = step => {
  $('.pricing-content-col .price-count-block .currency-type').text(state.symbol);
  
  const $current = currentSelection(step)
  const $price = $current.price[state.range][state.currency]

  $countNumber.text(numeral($current.count).format('0,0'))

  setCurrency(state.currency)
  $amount.text(numeral($price).format('0,0'))
  $range.text(state.range)
}

const setType = type => {
  state.oldType = state.type
  state.type = type
  state.range = DEFAULT_RANGE[type]
}

const setupCurrencySelector = () => {
  $currency.find('input[name=currency]').on('change', function () {
    state.currency = this.value
    if (this.value == "dollar") {
    	$('.display-price .currency-label-uk').css({"color" : "#a8b2c4"})
      $('.display-price .currency-label-us').css({"color" : "#212c3f"})
      state.symbol = "$"
    } else {
      $('.display-price .currency-label-uk').css({"color" : "#212c3f"})
      $('.display-price .currency-label-us').css({"color" : "#a8b2c4"})
      state.symbol = "£"
    }
    updateDisplay()
  })
}

const fillUserLicences = () => {
  const $list = $('.dropdown ul')
  $list.find('li').remove()

  let $index = 0
  for (let current of PRICES[state.type]) {
    const $price = current.price[state.range][state.currency]
    $list.append('<li><a data-index="' + $index + '">' + numeral(current.count).format('0,0') + '</a></li>')
    $index++
  }

  $(".dropdown .dropdown-menu li a").click(function(){
    const $index = $(this).data('index')
    updateDisplay($index)
  });

}

const setupSelector = () => {
  $tabs.on('shown.bs.tab', function(e) {
    const $type = $(this).data('type')

    setType($type)
    setCurrency(DEFAULT_CURRENCY[state.type])

    fillUserLicences()

    $('.pricing-content-col h3').text($type + " Licence")

    $('.dropdown .dropdown-menu li').find('a[data-index=' + DEFAULT_START[state.type] + ']').click()
  })
}

$(() => {
  setupCurrencySelector()
  setupSelector()

  $('#pricingTab a[href="#' + state.type + '"]').tab('show')
})
