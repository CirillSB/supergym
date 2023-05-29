import {
  iosVhFix
} from './utils/ios-vh-fix';
import {
  initModals
} from './modules/modals/init-modals';
import {
  Form
} from './modules/form-validate/form';
import {
  initPlayer
} from './modules/initPlayer';
import {
  testWebP
} from './utils/test-webp';
import {
  initTabs
} from './modules/init-tabs';
// import {
//   Tabs
// } from './modules/tabs';
import {
  initCoachersCards
} from './modules/init-coachers-cards';
import {
  initDynamicAdaptive
} from './modules/init-dynamic-adaptive';
import {
  hidePoster
} from './modules/hide-poster';
// import {
//   setMaskTel
// } from './modules/set-mask-tel';
// import {
//   initHover
// } from './modules/init-hover';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  testWebP();
  // ---------------------------------

  iosVhFix();
  // setMaskTel();

  // hidePoster();
  document.addEventListener('keyup', hidePoster);
  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initTabs();
    initDynamicAdaptive();
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    initPlayer();
    initCoachersCards();
    hidePoster();
    // initHover();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
