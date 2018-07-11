/* globals $, numeral */

const DEFAULT_START = {
  school: 0,
  university: 3
};

const DEFAULT_RANGE = {
  school: 'year',
  university: 'year'
};

const DEFAULT_CURRENCY = {
  school: 'pound',
  university: 'pound'
};

const ACTION_BTN_TEXT = {
  school: 'Buy now',
  university: 'Buy now'
};

const ACTION_BTN_LINK = {
  school: 'http://codio-2227229.hs-sites.com/buy-school',
  university: 'http://codio-2227229.hs-sites.com/buy-university'
};

const LEARN_MORE_LINK = {
  school: '/school',
  university: '/university'
};

const eumembers = {
  "BE": 1,
  "BG": 1,
  "CZ": 1,
  "DK": 1,
  "DE": 1,
  "EE": 1,
  "IE": 1,
  "EL": 1,
  "ES": 1,
  "FR": 1,
  "HR": 1,
  "IT": 1,
  "CY": 1,
  "LV": 1,
  "LT": 1,
  "LU": 1,
  "HU": 1,
  "MT": 1,
  "NL": 1,
  "AT": 1,
  "PL": 1,
  "PT": 1,
  "RO": 1,
  "SI": 1,
  "SK": 1,
  "FI": 1,
  "SE": 1,
  "GB": 1
};

const $currencyBlock = $('.currency-block');
const $typeList = $('.nav .nav-tabs');
const $tabs = $('.nav-tabs li');
const $pricingContentCol = $('.pricing-content-col');
const $priceCount = $pricingContentCol.find('.count');
const $countNumber = $priceCount.find('.number');
const $amount = $pricingContentCol.find('.amount');
const $range = $pricingContentCol.find('.range');
const $currencyType = $pricingContentCol.find('.price-count-block .currency-type');
const $dropdown = $('.dropdown');
const $learnMoreLink = $('#learnMore');

const params = name => {
  const results = new RegExp(`[\?&]${name}=([^&#]*)`).exec(window.location.href);
  if (results === null) return null;
  return results[1] || 0;
};

const lastCurrencyType = sessionStorageStore.get('codio_site_pricing_currency')
                        ? sessionStorageStore.get('codio_site_pricing_currency') : 'none';

const lastOpenedTabType = sessionStorageStore.get('codio_site_pricing_tab') 
                          ? sessionStorageStore.get('codio_site_pricing_tab') : 'school';

const defaultType = params('type') ? params('type') : lastOpenedTabType;

const state = {
  symbol: '', 
  oldType: defaultType,
  type: defaultType,
  step: DEFAULT_START[defaultType],
  range: DEFAULT_RANGE[defaultType],
  currency: 'pound'
};

const isSafeStep = (step = state.step) => {
  const pricesOld = PRICES[state.oldType];
  const pricesNew = PRICES[state.type];

  if (pricesNew[step] === undefined) return false;

  return pricesOld[step].count === pricesNew[step].count;
};

const findItem = type => $typeList.find('li[data-type="' + type + '"]');

const currentSelection = (step = state.step) => {
  return PRICES[state.type][step];
};

const updateDisplay = step => {
  const $current = currentSelection(step);
  const $price = $current.price[state.range][state.currency];

  $countNumber.text(numeral($current.count).format('0,0'));
  
  $amount.text(numeral($price).format('0,0'));
  $range.text(state.range);
};

const setType = type => {
  state.oldType = state.type;
  state.type = type;
  state.range = DEFAULT_RANGE[type];
};

const setCurrency = currency => {
  state.currency = currency;
  state.symbol = (state.currency == "dollar") ? "$" : "£";
};

const updateFeatures = () => {
  const $featuresList = $('.features-list ul');
  $featuresList.find('li').remove();

  switch (state.type) {
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
};

const updateActionBtn = type => {
  document.getElementById("actionBtn").href = ACTION_BTN_LINK[type];
  document.getElementById("actionBtn").text = ACTION_BTN_TEXT[type];
  document.getElementById("learnMore").href = LEARN_MORE_LINK[type];
};

const setPaymentsIcons = type => {
  $('.payment-card-1').attr({'src':'/img/assets/pricing/bacs.png', 'alt':'Bacs'});
  $('.payment-card-2').attr({'src':'/img/assets/pricing/chaps.png', 'alt':'Chaps'});
  $('.payment-card-3').attr({'src':'/img/assets/pricing/visa.png', 'alt':'Visa'});
  $('.payment-card-4').attr({'src':'/img/assets/pricing/mastercard.png', 'alt':'mastercard'});
  $('.payment-card-3').css({"display" : "inline-block"});
  $('.payment-card-4').css({"display" : "inline-block"});
};

const onTabShow = type => {
  setType(type);

  if (!isSafeStep()) {
    state.step = DEFAULT_START[state.type];
  }
  updateFeatures();
  updateActionBtn(state.type);
  setPaymentsIcons(state.type);

  const $subtextUniversity = $('.subtext-university');
  const $subtextSchool = $('.subtext-school');

  $pricingContentCol.find('h3').text(type + ' Licence');

  $currencyBlock.css({'display' : 'block'});
  $('#contactUsBtn').css({'display' : 'none'});
  $('#requestQuoteBtn').css({'display' : 'none'});
  $pricingContentCol.find('.price-count-block').css({'display' : 'none'});
  $priceCount.css({'display' : 'none'});
  $subtextUniversity.css({'display' : 'none'});
  $subtextSchool.css({'display' : 'none'});
  $dropdown.css({'display' : 'none'});
  $dropdown.find('.dropdown-menu li').find('a[data-index=' + DEFAULT_START[state.type] + ']').click();
  $currencyType.text(state.symbol);
  $learnMoreLink.css({'float' : 'none'});

  if (type === 'university') {
    $currencyBlock.css({'display' : 'none'});
    $('#contactUsBtn').css({'display' : 'inline'});
    $subtextUniversity.css({'display' : 'block'});
    $pricingContentCol.find('.first-letter-uppercase').text('Explore licensing options');
  } else if (type === 'school') {
    $('#requestQuoteBtn').css({'display' : 'inline'});
    $subtextSchool.css({'display' : 'block'});
  }
};

const setupSelector = () => {
  $tabs.on('show.bs.tab', function(e) {
    const $type = $(this).data('type');
    onTabShow($type);
    sessionStorageStore.set('codio_site_pricing_tab', $type);
  });
};

const toggleChevron = e => {
  $(e.target).prev('.panel-heading').find("i.indicator").toggleClass('glyphicon-toggle-minus glyphicon-toggle-plus');
};

const setupFaqBlock = () => {
  $('#accordion-school').on('hidden.bs.collapse shown.bs.collapse', toggleChevron);
  $('#accordion-university').on('hidden.bs.collapse shown.bs.collapse', toggleChevron);
};

const updatePageForGBR = () => {
  setCurrency('pound');
};

const updatePageForUSD = () => {
  setCurrency('dollar');
};

const defineLocation = (src) => {
  try {
    $.getJSON(src + "?callback=?", (location) => {
      console.log(location.country_code);
      if (!(location.country_code && eumembers[location.country_code])) {
        updatePageForUSD();
      }
      sessionStorageStore.set('codio_site_pricing_currency', state.currency);
      onTabShow(state.type);
    });
  } catch (e) {
    console.log('Error on parsing geolocation data');
  }
};

$(document).ready(function () {
  if (document.location.pathname.lastIndexOf("/pricing", 0) !== 0) return;
  const PRICES = window.PRICES;
  setupFaqBlock();
  setupSelector();

  if (lastCurrencyType === 'none') {
    console.log('Currency is not defined');
    updatePageForGBR();
    $('#pricingTab').find('a[href="#' + state.type + '"]').tab('show');
    const geoplugin = 'https://geoip.codio.com/json/';
    defineLocation(geoplugin);
  }
  else {
    if (lastCurrencyType === 'dollar') {
      updatePageForUSD();
    } else {
      updatePageForGBR();
    }
    $('#pricingTab').find('a[href="#' + state.type + '"]').tab('show');
  }
});
