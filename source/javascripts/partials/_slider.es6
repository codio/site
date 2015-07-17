/* globals $, numeral */

const PRICES = window.PRICES

const DEFAULT_START = {
  developer: 0,
  school: 3,
  university: 3
}

const DEFAULT_CURRENCY = {
  developer: 'dollar',
  school: 'pound',
  university: 'pound'
}

const DEFAULT_RANGE = {
  developer: 'month',
  school: 'year',
  university: 'year'
}

const state = {
  oldType: 'school',
  type: 'school',
  range: DEFAULT_RANGE['school'],
  currency: DEFAULT_CURRENCY['school'],
  slider: null
}

Object.defineProperty(state, 'step', {
  get () {
    return this.slider.slider('option', 'value')
  },
  set (val) {
    this.slider.slider('option', 'value', val)
  }
})

const $dragWrapper = $('.slider .drag-wrapper')
const $countNumber = $('.slider .count .number')
const $currency = $('.slider .currency > select')
const $amount = $('.slider .amount')
const $range = $('.slider .range')
const $typeList = $('.slider .type-list')
const $types = $typeList.find('li.item')

const setup = (steps, initialStep) => {
  return $dragWrapper.slider({
    min: 0,
    max: steps - 1,
    value: initialStep,
    range: 'min'
  })
  .slider('pips', {
    first: 'pip',
    last: 'pip'
  })
  .on('slidechange slide', function slide (event, ui) {
    updateDisplay(ui.value)
  })
}

const isSafeStep = (step = state.step) => {
  const pricesOld = PRICES[state.oldType]
  const pricesNew = PRICES[state.type]

  if (pricesNew[step] === undefined) return false

  return pricesOld[step].count === pricesNew[step].count
}

const currentSelection = (step = state.step) => {
  return PRICES[state.type][step]
}

const updateDisplay = step => {
  const current = currentSelection(step)
  const price = current.price[state.range][state.currency]

  $countNumber.text(numeral(current.count).format('0,0'))

  $currency.val(state.currency)
  $amount.text(numeral(price).format('0,0'))
  $range.text(state.range)
}

const stepCount = type => PRICES[type].length

const findItem = type => $typeList.find('li[data-type="' + type + '"]')

const setType = type => {
  state.oldType = state.type
  state.type = type
  state.range = DEFAULT_RANGE[type]
}

const setupCurrencySelector = () => {
  $currency.on('change', () => {
    state.currency = $currency.val()
    updateDisplay()
  })
}

const setCurrency = currency => {
  state.currency = currency
  $currency.val(currency)
}

const setupSelector = () => {
  const $active = findItem(state.type)

  $active.addClass('active')

  $types.click(function (event) {
    $types.removeClass('active')
    const $this = $(this)
    $this.addClass('active')

    setType($this.data('type'))

    setCurrency(DEFAULT_CURRENCY[state.type])

    // update the slider
    if (!isSafeStep()) {
      state.step = DEFAULT_START[state.type]
    }

    const step = state.step
    state.slider.off()
    state.slider.slider('destroy')
    state.slider = setup(stepCount(state.type), step)

    updateDisplay()
  })
}

$(() => {
  if ($dragWrapper.length > 0) {
    setupSelector()
    setupCurrencySelector()

    state.slider = setup(stepCount(state.type), DEFAULT_START[state.type])
    updateDisplay()
  }
})
