import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import moment from "moment";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import i18n from '@/i18n';
import { getLang } from '@/common/lang';
import * as echarts from 'echarts';
import VueECharts from 'vue-echarts';
import VueCompositionAPI from '@vue/composition-api';
// import Account from '@/eth/Account';

import App from './App.vue';
import router from './router';
import store from './store';
import './filters/toFixed';
import './filters/formatTime';
import './filters/trimAddress';

import './directive/numberInput';

import '@/styles/theme-overrides/index.scss';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueCompositionAPI);

Vue.component('v-charts', VueECharts);

Vue.config.productionTip = false;

window.__g_store__ = store;
window.__g_router__ = router;
window.__g_i18n__ = i18n;
// window.__g_account__ = new Account();
// Vue.prototype.$account = window.__g_account__;

if (window.ethereum) {
  window.ethereum.on('chainChanged', () => {
    window.location.reload();
  });

  // For now, 'eth_accounts' will continue to always return an array
  window.ethereum
    .request({ method: 'eth_accounts' })
    .then((accounts) => {
      store.dispatch('handleAccountsChanged', accounts);
      if (accounts?.length) {
        store.commit('UPDATE_STATE', {
          isMetamask: true,
        });
      }

    })
    .catch((err) => {
      // Some unexpected error.
      // For backwards compatibility reasons, if no accounts are available,
      // eth_accounts will return an empty array.
      console.error(err);
    });

  // Note that this event is emitted on page load.
  // If the array of accounts is non-empty, you're already
  // connected.
  window.ethereum.on('accountsChanged', (accounts) => {
    store.dispatch('handleAccountsChanged', accounts);
    if (accounts?.length) {
      store.commit('UPDATE_STATE', {
        isMetamask: true,
      });
    }
  });
}

// console.log( window.connector.connected)
window.connector = new WalletConnect({
  bridge: "https://bridge.walletconnect.org", // Required
  qrcodeModal: QRCodeModal,
});

// Check if connection is already established
if (window.connector.connected) {
  store.dispatch('handleAccountsChanged', window.connector.accounts);
  store.commit('UPDATE_STATE', {
    isWalletConnect: true,
  });
}

// Subscribe to connection events
window.connector.on("connect", (error, payload) => {
  if (error) {
    throw error;
  }

  // Get provided accounts and chainId
  const { accounts, chainId } = payload.params[0];
  store.dispatch('handleAccountsChanged', accounts);
  store.commit('UPDATE_STATE', {
    isWalletConnect: true,
  });
});

window.connector.on("session_update", (error, payload) => {
  console.log('gogogo')
  if (error) {
    throw error;
  }

  // Get updated accounts and chainId
  const { accounts, chainId } = payload.params[0];

  dispatch('handleAccountsChanged', accounts);
  commit('UPDATE_STATE', {
    isWalletConnect: true,
  });
});

window.connector.on("disconnect", (error, payload) => {
  if (error) {
    throw error;
  }

  // Delete connector
});


const lang = getLang();
if (['zh', 'en'].includes(lang)) {
  i18n.locale = lang;
}

if (lang === 'zh') {
  moment.locale('zh-cn');
}

// eslint-disable-next-line no-underscore-dangle
window.__g_root__ = new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');


