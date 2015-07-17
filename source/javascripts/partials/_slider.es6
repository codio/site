/* globals $, numeral */

const PRICES = window.PRICES

const SYMBOLS = {
  dollar: '$',
  pound: '$pound;'
}

const DEFAULT_START = {
  developer: 0,
  school: 3,
  university: 3
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
  currency: 'pound',
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
const $currency = $('.slider .currency')
const $amount = $('.slider .amount')
const $range = $('.slider .range')
const $typeList = $('.slider .type-list')
const $types = $typeList.find('li.item')

const setup = (steps, initialStep) => {
  return $dragWrapper.slider({
    min: 0,
    max: PRICES[state.type].length - 1,
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
  if (!isSafeStep(step)) {
    state.step = DEFAULT_START[state.type]
  }

  return PRICES[state.type][step]
}

const updateDisplay = step => {
  const current = currentSelection(step)
  const price = current.price[state.range][state.currency]

  $countNumber.text(numeral(current.count).format('0,0'))

  $currency.innerHTML = SYMBOLS[state.currency]
  $amount.text(numeral(price).format('0,0'))
  $range.text(state.range)
}

const stepCount = type => PRICES[type].length

const findItem = type => $typeList.find('li[data-type="' + type + '"]')

const setType = type => {
  state.typeOld = state.type
  state.type = type
  state.range = DEFAULT_RANGE[type]
}

const setupSelector = () => {
  const $active = findItem(state.type)

  $active.addClass('active')

  $types.click(function (event) {
    $types.removeClass('active')
    const $this = $(this)
    $this.addClass('active')

    setType($this.data('type'))

    // update the slider
    state.slider.slider('option', 'max', PRICES[state.type].length - 1)

    if (!isSafeStep()) {
      state.step = DEFAULT_START[state.type]
    }

    updateDisplay()
  })
}

$(() => {

  setupSelector()

  state.slider = setup(stepCount(state.type), DEFAULT_START[state.type])
  updateDisplay()
})
