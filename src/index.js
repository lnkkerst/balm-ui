import mdlComponentHandler from './styles/mdlComponentHandler';
import UiBadge from './components/badge';
import UiButton from './components/button';
import UiDialog from './components/dialog';
import UiList from './components/list';
import UiLoading from './components/loading';
import UiCheckbox from './components/form/checkbox';
import UiRadio from './components/form/radio';
// import UiTextfield from './components/form/textfield';

const BalmUI = {
  UiBadge,
  UiButton,
  UiDialog,
  UiList,
  UiLoading,
  UiCheckbox,
  UiRadio,
  // UiTextfield,
  install(Vue) {
    Vue.component('ui-badge', UiBadge);
    Vue.component('ui-button', UiButton);
    Vue.component('ui-dialog', UiDialog);
    Vue.component('ui-list', UiList);
    Vue.component('ui-loading', UiLoading);
    Vue.component('ui-checkbox', UiCheckbox);
    Vue.component('ui-radio', UiRadio);
    // Vue.component('ui-textfield', UiTextfield);
    // Vue.prototype.$ui = mdlComponentHandler;
  }
};

module.exports = BalmUI;

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUI);
}
