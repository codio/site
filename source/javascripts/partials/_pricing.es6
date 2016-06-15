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
  business: 'month',
  school: 'year',
  university: 'year'
}

const $currency = $('.currency-block .currency');
const $typeList = $('.nav .nav-tabs');
const $types = $typeList.find('li.item');
const $currencyOption = $('.currency-block .currency-option');
const $tabs = $('.nav-tabs li');
const $countNumber = $('.pricing-content-col .count .number');
const $amount = $('.pricing-content-col .amount');
const $range = $('.pricing-content-col .range');

const params = name => {
  const results = new RegExp(`[\?&]${name}=([^&#]*)`).exec(window.location.href);
  if (results == null) return null
    return results[1] || 0;
}

const defaultType = params('type') ? params('type') : 'school';

const state = {
  symbol: '$', 
  oldType: defaultType,
  type: defaultType,
  step: 0,
  range: DEFAULT_RANGE['school'],
  currency: DEFAULT_CURRENCY['school'],
}

const isSafeStep = (step = state.step) => {
  const pricesOld = PRICES[state.oldType];
  const pricesNew = PRICES[state.type];

  if (pricesNew[step] === undefined) return false;

  return pricesOld[step].count === pricesNew[step].count;
}

const findItem = type => $typeList.find('li[data-type="' + type + '"]');

const currentSelection = (step = state.step) => {
  return PRICES[state.type][step];
}

const updateDisplay = step => {
  $('.pricing-content-col .price-count-block .currency-type').text(state.symbol);
  
  const $current = currentSelection(step);
  const $price = $current.price[state.range][state.currency];

  $countNumber.text(numeral($current.count).format('0,0'));

  setCurrency(state.currency);
  $amount.text(numeral($price).format('0,0'));
  $range.text(state.range);
}

const setType = type => {
  state.oldType = state.type;
  state.type = type;
  state.range = DEFAULT_RANGE[type];
}

const setCurrencySign = () => {
  if (state.currency == "dollar") {
    $('.display-price .currency-label-uk').css({"color" : "#a8b2c4"});
    $('.display-price .currency-label-us').css({"color" : "#212c3f"});
    state.symbol = "$";
  } else {
    $('.display-price .currency-label-uk').css({"color" : "#212c3f"});
    $('.display-price .currency-label-us').css({"color" : "#a8b2c4"});
    state.symbol = "£";
  }
}

const setCurrency = currency => {
  state.currency = currency;
  $currency.find(`input[name=currency][value=${currency}]`).prop('checked', true);
  setCurrencySign();
}

const fillUserLicences = () => {
  const $list = $('.dropdown ul');
  $list.find('li').remove();

  let $index = 0;
  for (let current of PRICES[state.type]) {
    const $price = current.price[state.range][state.currency];
    $list.append('<li><a class="menu-item" data-index="' + $index + '">' + numeral(current.count).format('0,0') + '</a></li>');
    $index++;
  }

  $(".dropdown .dropdown-menu li a").click(function(){
    const $index = $(this).data('index');
    state.step = $index;
    updateDisplay($index);
  });
}

const updateFeatures = () => {
  const $featuresList = $('.features-list ul');
  $featuresList.find('li').remove();

  switch (state.type) {
    case "individual":
      $featuresList.append('<li>Full IDE & terminal access</li>');
      $featuresList.append('<li>Unlimited private projects</li>');
      $featuresList.append('<li>Extensive support</li>');
      break;
     case "business":
      $featuresList.append('<li>Full IDE & terminal access</li>');
      $featuresList.append('<li>Unlimited private projects</li>');
      $featuresList.append('<li>Extensive support</li>');
      break;
    case "school":
      $featuresList.append('<li>80+ course units mapped to national curricula</li>');
      $featuresList.append('<li>Online code editor so students code instantly</li>');
      $featuresList.append('<li>Auto-marked assessments</li>');
      $featuresList.append('<li>Teacher dashboard to monitor progress</li>');
      break;
    case "university":
      $featuresList.append('<li>Auto-Graded Assessments</li>');
      $featuresList.append('<li>Full IDE & terminal access</li>');
      $featuresList.append('<li>LMS Integration</li>');
      $featuresList.append('<li>Create project templates for your class</li>');
      $featuresList.append('<li>Unlimited Servers and private projects</li>');
      $featuresList.append('<li>Extensive university support</li>');
      break;
    default:
      break;
  }
}

const setupSelector = () => {
  $currency.find('input[name=currency]').on('change', function () {
    state.currency = this.value;
    setCurrencySign();
    updateDisplay();
  });

  $tabs.on('shown.bs.tab', function(e) {
    const $type = $(this).data('type');

    setType($type);
    setCurrency(DEFAULT_CURRENCY[state.type]);

    if (!isSafeStep()) {
      state.step = DEFAULT_START[state.type];
    }

    fillUserLicences();
    updateFeatures();

    $('.pricing-content-col h3').text($type + " Licence");

    $('.dropdown .dropdown-menu li').find('a[data-index=' + DEFAULT_START[state.type] + ']').click();
  });
}

const toggleChevron = e => {
  $(e.target).prev('.panel-heading').find("i.indicator").toggleClass('glyphicon-toggle-minus glyphicon-toggle-plus');
}

const setupFaqBlock = () => {
  $('#accordion-individual').on('hidden.bs.collapse', toggleChevron);
  $('#accordion-individual').on('shown.bs.collapse', toggleChevron);
  $('#accordion-business').on('hidden.bs.collapse', toggleChevron);
  $('#accordion-business').on('shown.bs.collapse', toggleChevron);
  $('#accordion-school').on('hidden.bs.collapse', toggleChevron);
  $('#accordion-school').on('shown.bs.collapse', toggleChevron);
  $('#accordion-university').on('hidden.bs.collapse', toggleChevron);
  $('#accordion-university').on('shown.bs.collapse', toggleChevron);
}

$(() => {
  setupFaqBlock();
  setupSelector();

  $('#pricingTab a[href="#' + state.type + '"]').tab('show');
})
