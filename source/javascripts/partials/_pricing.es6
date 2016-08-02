/* globals $, numeral */

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

const ACTION_BTN_TEXT = {
  individual: 'Free Trial',
  business: 'Buy now',
  school: 'Buy now',
  university: 'Buy now'
}

const ACTION_BTN_LINK = {
  individual: 'https://codio.com/p/signup',
  business: 'mailto:help@codio.com',
  school: 'http://codio-2227229.hs-sites.com/buy-school',
  university: 'http://codio-2227229.hs-sites.com/buy-university'
}

const LEARN_MORE_LINK = {
  individual: '/developer',
  business: '/developer',
  school: '/school',
  university: '/university'
}

const $currency = $('.currency-block .currency');
const $typeList = $('.nav .nav-tabs');
const $types = $typeList.find('li.item');
const $currencyOption = $('.currency-block .currency-option');
const $tabs = $('.nav-tabs li');
const $pricingContentCol = $('.pricing-content-col');
const $countNumber = $pricingContentCol.find('.count .number')
const $amount = $pricingContentCol.find('.amount');
const $range = $pricingContentCol.find('.range');

const params = name => {
  const results = new RegExp(`[\?&]${name}=([^&#]*)`).exec(window.location.href);
  if (results == null) return null
    return results[1] || 0;
}

const lastOpenedTabType = sessionStorageStore.get('codio_site_pricing_tab') 
                          ? sessionStorageStore.get('codio_site_pricing_tab') : 'school';
const defaultType = params('type') ? params('type') : lastOpenedTabType;

const state = {
  symbol: '$', 
  oldType: defaultType,
  type: defaultType,
  step: 0,
  range: DEFAULT_RANGE[defaultType],
  currency: DEFAULT_CURRENCY[defaultType],
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

  PRICES[state.type].forEach(function(current, $index) {
    const $price = current.price[state.range][state.currency];
    $list.append('<li><a class="menu-item" data-index="' + $index + '">' + numeral(current.count).format('0,0') + '</a></li>');
  })

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

const updateActionBtn = type => {
  document.getElementById("actionBtn").href = ACTION_BTN_LINK[type];
  document.getElementById("actionBtn").text = ACTION_BTN_TEXT[type];
  document.getElementById("learnMore").href = LEARN_MORE_LINK[type];
}

const setPaymentsIcons = type => {
  if (type == "individual") {
    $('.payment-card-1').attr('src', '/img/assets/pricing/visa.png');
    $('.payment-card-2').attr('src', '/img/assets/pricing/mastercard.png');
    $('.payment-card-3').css({"display" : "none"});
    $('.payment-card-4').css({"display" : "none"});
  } else {
    $('.payment-card-1').attr('src', '/img/assets/pricing/bacs.png');
    $('.payment-card-2').attr('src', '/img/assets/pricing/chaps.png');
    $('.payment-card-3').attr('src', '/img/assets/pricing/visa.png');
    $('.payment-card-4').attr('src', '/img/assets/pricing/mastercard.png');
  }
}

const onTabShow = type => {
  if (document.location.pathname.lastIndexOf("/pricing", 0) !== 0) return;

  setType(type);
  setCurrency(DEFAULT_CURRENCY[state.type]);

  if (!isSafeStep()) {
    state.step = DEFAULT_START[state.type];
  }

  fillUserLicences();
  updateFeatures();
  updateActionBtn(state.type);
  setPaymentsIcons(state.type);

  $pricingContentCol.find('h3').text(type + " Licence");
  $('.dropdown .dropdown-menu li').find('a[data-index=' + DEFAULT_START[state.type] + ']').click();
  if (state.type == "individual"){
    $('.dropdown').css({"display" : "none"});
    $('.information-block span').css({"display" : "none"});
  } else {
    $('.dropdown').css({"display" : "block"})
    $('.information-block span').css({"display" : "inherit"});
  }
}

const setupSelector = () => {
  $currency.find('input[name=currency]').on('change', function () {
    state.currency = this.value;
    setCurrencySign();
    updateDisplay();
  });

  $tabs.on('show.bs.tab', function(e) {
    const $type = $(this).data('type');
    onTabShow($type);
    sessionStorageStore.set('codio_site_pricing_tab', $type);
  });
}

const toggleChevron = e => {
  $(e.target).prev('.panel-heading').find("i.indicator").toggleClass('glyphicon-toggle-minus glyphicon-toggle-plus');
}

const setupFaqBlock = () => {
  $('#accordion-individual').on('hidden.bs.collapse shown.bs.collapse', toggleChevron);
  $('#accordion-business').on('hidden.bs.collapse shown.bs.collapse', toggleChevron);
  $('#accordion-school').on('hidden.bs.collapse shown.bs.collapse', toggleChevron);
  $('#accordion-university').on('hidden.bs.collapse shown.bs.collapse', toggleChevron);
}

$(document).ready(function () {
  $('#pricingTab a[href="#' + state.type + '"]').tab('show');
  onTabShow(state.type);
});

$(() => {
  const PRICES = window.PRICES
  setupFaqBlock();
  setupSelector();
});
