(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-898fdd96"],{

/***/ "07a8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_da061a60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8142");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_da061a60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_da061a60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0821":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("23a2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1148":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "16c0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1abbc31f-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home/index.vue?vue&type=template&id=da061a60&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('div',{staticClass:"container"},[_vm._m(0),_vm._m(1),_c('div',{staticClass:"slogan"},[_vm._v(" The #1 Meme Token on Ethereum Blockchain ")]),_c('div',{staticClass:"buy-section"},[_c('div',{staticClass:"buy-inner-section"},[_vm._m(2),(!_vm.user.address)?_c('button',{staticClass:"connect-wallet",on:{"click":function($event){return _vm.$bvModal.show('select-modal')}}},[_vm._v("Connect Wallet")]):_vm._e(),(_vm.user.address && _vm.user.isWalletConnect)?_c('button',{staticClass:"connect-wallet",on:{"click":_vm.disconnect}},[_vm._v("Disconnect")]):_vm._e()]),_c('div',{staticClass:"button-group"},[_c('div',{staticClass:"buy-button",on:{"click":_vm.buyWithETH}},[_c('div',[_vm._v("Buy with ETH")]),_c('div',{staticClass:"price"},[_vm._v(_vm._s(_vm.ethPrice)+"ETH/1FLOKII")])])])]),_vm._m(3)]),_vm._m(4),_c('b-modal',{attrs:{"id":"buy-modal","modal-class":"buy-modal","centered":"","hide-footer":"","hide-header":""}},[_c('img',{staticClass:"close-btn",attrs:{"src":__webpack_require__("7b05"),"alt":""},on:{"click":function($event){return _vm.$bvModal.hide('buy-modal')}}}),_c('div',{staticClass:"d-block text-center"},[_c('div',{staticClass:"input-wrapper"},[_c('div',{staticClass:"amount-input"},[_c('input',{directives:[{name:"model",rawName:"v-model.number",value:(_vm.amount),expression:"amount",modifiers:{"number":true}},{name:"number-input",rawName:"v-number-input"}],ref:"amountInput",attrs:{"type":"text"},domProps:{"value":(_vm.amount)},on:{"input":function($event){if($event.target.composing){ return; }_vm.amount=_vm._n($event.target.value)},"blur":function($event){return _vm.$forceUpdate()}}}),_c('span',{staticClass:"unit"},[_vm._v("FLOKII")])]),_c('div',{staticClass:"amount"},[_vm._v(" "+_vm._s(_vm.total)+_vm._s(_vm.buyType)+" ")])])]),_c('div',{staticClass:"modal-button-group"},[_c('b-button',{on:{"click":function($event){return _vm.$bvModal.hide('buy-modal')}}},[_vm._v("Cancel")]),_c('b-button',{attrs:{"disabled":_vm.buyLoading},on:{"click":_vm.buy}},[_vm._v("Ok")])],1)]),_c('b-modal',{attrs:{"id":"select-modal","modal-class":"select-modal","centered":"","hide-footer":"","hide-header":""}},[_c('img',{staticClass:"close-btn",attrs:{"src":__webpack_require__("7b05"),"alt":""},on:{"click":function($event){return _vm.$bvModal.hide('select-modal')}}}),_c('div',{staticClass:"connect-button-group"},[_c('b-button',{on:{"click":_vm.unlockByMetaMask}},[_vm._v("Metamask")]),_c('b-button',{on:{"click":_vm.unlockByWalletConnect}},[_vm._v("WalletConnect")])],1)])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nav-bar"},[_c('div',{staticClass:"nav-logo-wrapper"},[_c('img',{staticClass:"nav-logo",attrs:{"src":__webpack_require__("31ab"),"alt":""}}),_vm._v(" FLOKII ")]),_c('div',{staticClass:"audit"},[_c('a',{attrs:{"href":"/Floki_Kishu_Inu.pdf"}},[_vm._v(" Audited By: TechRate ")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"logo-wrapper"},[_c('img',{attrs:{"src":__webpack_require__("e9ae"),"alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"buy-content"},[_vm._v(" Option1 "),_c('br'),_vm._v(" Buy directly from your wallet. ")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"buy-section"},[_c('div',{staticClass:"buy-inner-section"},[_c('div',{staticClass:"buy-content"},[_vm._v(" Option2 "),_c('br'),_vm._v(" Buy directly from your wallet. ")])]),_c('div',{staticClass:"address-group"},[_c('div',{staticClass:"address-btn",attrs:{"id":"address"}},[_vm._v(" 0xaF3Ab58B158C4779B53B00F9FcA2565427C9F430 ")]),_c('div',{staticClass:"copy-btn",attrs:{"data-clipboard-target":"#address"}},[_c('img',{attrs:{"src":__webpack_require__("cc1c"),"alt":""}})])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer"},[_c('div',{staticClass:"build-with"},[_vm._v(" Price feed by "),_c('img',{attrs:{"src":__webpack_require__("522d"),"alt":""}})]),_c('div',{staticClass:"footer-content"},[_c('div',{staticClass:"footer-logo-wrapper"},[_c('img',{attrs:{"src":__webpack_require__("31ab"),"alt":""}}),_vm._v(" FLOKII ")]),_c('div',{staticClass:"desc"},[_vm._v(" A decentralized community driven platform with facility of swap. earn. yield. lend. and borrow. leveraging under one application. Welcome to Defi universe. ")]),_c('div',{staticClass:"social-group"},[_c('a',{attrs:{"href":"https://twitter.com/flokikishu/status/1422106726342434817?s=21","target":"_blank"}},[_c('img',{attrs:{"src":__webpack_require__("7f330"),"alt":""}})]),_c('a',{attrs:{"href":"https://t.me/Flokikishu","target":"_blank"}},[_c('img',{attrs:{"src":__webpack_require__("96e2"),"alt":""}})]),_c('a',{attrs:{"href":"https://github.com/Floki-Kishu-Inu/","target":"_blank"}},[_c('img',{attrs:{"src":__webpack_require__("299a"),"alt":""}})])]),_c('div',{staticClass:"link-group"},[_c('a',{staticClass:"link-btn",attrs:{"href":"/Floki_Kishu_Inu.pdf"}},[_vm._v("Audit Report")]),_c('a',{staticClass:"link-btn",attrs:{"href":"mailto:Contact@floki-kishu.io"}},[_vm._v("Support")]),_c('a',{staticClass:"link-btn",attrs:{"href":"https://floki-kishu.io/#"}},[_vm._v("Floki-Kishu.io")])]),_c('div',{staticClass:"copyright"},[_vm._v(" 2021 FLOKI KISHU INU. ALL RIGHTS RESERVED ")])])])}]


// CONCATENATED MODULE: ./src/views/Home/index.vue?vue&type=template&id=da061a60&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__("3835");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__("b680");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.repeat.js
var es_string_repeat = __webpack_require__("38cf");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js
var bignumber = __webpack_require__("e36d");

// EXTERNAL MODULE: ./node_modules/ethers/lib.esm/ethers.js + 5 modules
var ethers = __webpack_require__("6779");

// EXTERNAL MODULE: ./node_modules/clipboard/dist/clipboard.js
var dist_clipboard = __webpack_require__("b311");
var clipboard_default = /*#__PURE__*/__webpack_require__.n(dist_clipboard);

// EXTERNAL MODULE: ./src/config/index.js + 3 modules
var config = __webpack_require__("f121");

// EXTERNAL MODULE: ./src/eth/ethereum.js
var eth_ethereum = __webpack_require__("b88c");

// CONCATENATED MODULE: ./src/common/sendTransaction.js





console.log(bignumber["a" /* BigNumber */]); // console.log(provider)

var sendTransaction = /*#__PURE__*/function () {
  var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _ref2,
        to,
        data,
        gas,
        _ref2$value,
        value,
        gasPrice,
        _g_store__$state$use,
        address,
        isMetamask,
        isWalletConnect,
        transactionParameters,
        txHash,
        _txHash,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, to = _ref2.to, data = _ref2.data, gas = _ref2.gas, _ref2$value = _ref2.value, value = _ref2$value === void 0 ? '0x00' : _ref2$value;
            _context.next = 3;
            return eth_ethereum["e" /* provider */].getGasPrice();

          case 3:
            gasPrice = _context.sent;
            // const txCount = await provider.getTransactionCount(ethereum.selectedAddress, 'pending');
            _g_store__$state$use = __g_store__.state.user, address = _g_store__$state$use.address, isMetamask = _g_store__$state$use.isMetamask, isWalletConnect = _g_store__$state$use.isWalletConnect;
            transactionParameters = {
              // nonce: txCount, // ignored by MetaMask
              gasPrice: gasPrice.toHexString(),
              // customizable by user during MetaMask confirmation.
              gas: bignumber["a" /* BigNumber */].from(gas || 240000).toHexString(),
              // customizable by user during MetaMask confirmation.
              to: to,
              // Required except during contract publications.
              from: address,
              // must match user's active address.
              value: value,
              // Only required to send ether to the recipient from the initiating external account.
              data: data,
              // Optional, but used for defining smart contract creation and interaction.
              chainId: config["a" /* default */].chainId // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.

            };

            if (!isMetamask) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return window.ethereum.request({
              method: 'eth_sendTransaction',
              params: [transactionParameters]
            });

          case 9:
            txHash = _context.sent;
            return _context.abrupt("return", txHash);

          case 11:
            console.log(isWalletConnect);

            if (!isWalletConnect) {
              _context.next = 17;
              break;
            }

            _context.next = 15;
            return window.connector.sendTransaction(transactionParameters);

          case 15:
            _txHash = _context.sent;
            return _context.abrupt("return", _txHash);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sendTransaction() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var common_sendTransaction = (sendTransaction);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home/index.vue?vue&type=script&lang=js&









//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// @ is an alias to /src






console.log(eth_ethereum["b" /* FLOKIIPreSaleInterface */]);
/* harmony default export */ var Homevue_type_script_lang_js_ = ({
  name: 'Home',
  components: {},
  data: function data() {
    return {
      buyType: '',
      buyLoading: false,
      amount: '',
      usdtPrice: 0.007,
      ethPrice: 0
    };
  },
  filters: {
    trimAddress: function trimAddress(address) {
      if (address) {
        return address.replace(/^(.{7}).*(.{3})$/g, function (str, $1, $2) {
          return "".concat($1, "...").concat($2);
        });
      }

      return '';
    }
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(['user'])), {}, {
    total: function total() {
      // console.log(Number.isNaN(this.amount))
      // console.log(this.amount)
      if (this.amount > 0) {
        if (this.buyType === 'USDT') {
          return (this.amount * this.usdtPrice).toFixed(6);
        }

        if (this.buyType === 'ETH') {
          return (this.amount * this.ethPrice).toFixed(6);
        }
      }

      return 0;
    }
  }),
  created: function created() {
    var _this = this;

    this.getPrices();
    var clipboard = new clipboard_default.a('.copy-btn');
    clipboard.on('success', function (e) {
      __g_root__.$bvToast.toast('Copy success!', {
        title: _this.$t('tip'),
        variant: 'success',
        autoHideDelay: 5000
      });
    });
    clipboard.on('error', function (e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
    });
  },
  methods: {
    getPrices: function getPrices() {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _yield$FLOKIIPreSaleC, _yield$FLOKIIPreSaleC2, ethPrice;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return eth_ethereum["a" /* FLOKIIPreSaleContract */].functions.getEthPrice();

              case 2:
                _yield$FLOKIIPreSaleC = _context.sent;
                _yield$FLOKIIPreSaleC2 = Object(slicedToArray["a" /* default */])(_yield$FLOKIIPreSaleC, 1);
                ethPrice = _yield$FLOKIIPreSaleC2[0];
                // console.log(this.usdtPrice)
                // console.log(ethPrice)
                _this2.ethPrice = (_this2.usdtPrice / ethPrice).toFixed(8); // console.log(ethPrice.div(1e6).mul(this.usdtPrice));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    unlockByWalletConnect: function unlockByWalletConnect() {
      // console.log('xxx');
      // this.$store.dispatch('unlockByMetaMask');
      this.$store.dispatch('unlockByWalletConnect');
      this.$bvModal.hide('select-modal'); // __g_account__.unlockByMetaMask();
    },
    unlockByMetaMask: function unlockByMetaMask() {
      // console.log('xxx');
      // this.$store.dispatch('unlockByMetaMask');
      this.$store.dispatch('unlockByMetaMask');
      this.$bvModal.hide('select-modal'); // __g_account__.unlockByMetaMask();
    },
    disconnect: function disconnect() {
      this.$store.dispatch('disconnectByWalletConnect');
    },
    buy: function buy() {
      if (this.buyType === 'ETH') {
        this.ethBuySubmit();
      } else {
        this.usdtBuySubmit();
      }
    },
    ethBuySubmit: function ethBuySubmit() {
      var _this3 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var value, txHash, claimTx;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this3.amount) {
                  _context2.next = 3;
                  break;
                }

                __g_root__.$bvToast.toast('Please input amount', {
                  title: _this3.$t('tip'),
                  variant: 'danger',
                  autoHideDelay: 5000
                });

                return _context2.abrupt("return", false);

              case 3:
                value = bignumber["a" /* BigNumber */].from(Math.floor(_this3.ethPrice * 1e18)).mul(_this3.amount);

                if (!value.gt(_this3.user.ethBalance)) {
                  _context2.next = 7;
                  break;
                }

                __g_root__.$bvToast.toast('Balance is not enough', {
                  title: _this3.$t('tip'),
                  variant: 'danger',
                  autoHideDelay: 5000
                });

                return _context2.abrupt("return", false);

              case 7:
                _context2.prev = 7;
                _this3.buyLoading = true;
                _context2.next = 11;
                return common_sendTransaction({
                  to: config["a" /* default */].FLOKIIPreSaleAddress,
                  value: ethers["utils"].hexValue(value),
                  data: eth_ethereum["b" /* FLOKIIPreSaleInterface */].encodeFunctionData('purchaseByETH()')
                });

              case 11:
                txHash = _context2.sent;
                _context2.next = 14;
                return eth_ethereum["e" /* provider */].waitForTransaction(txHash);

              case 14:
                claimTx = _context2.sent;

                if (claimTx.status === 1) {
                  __g_root__.$bvToast.toast('Buy success', {
                    title: _this3.$t('tip'),
                    variant: 'success',
                    autoHideDelay: 5000
                  });
                } else {
                  __g_root__.$bvToast.toast('Buy fail', {
                    title: _this3.$t('tip'),
                    variant: 'danger',
                    autoHideDelay: 5000
                  });
                }

                _context2.next = 21;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](7);
                console.log(_context2.t0);

              case 21:
                _this3.buyLoading = false;

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[7, 18]]);
      }))();
    },
    usdtBuySubmit: function usdtBuySubmit() {
      var _this4 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var realPrice, allowance, approveTxHash, approveTx, bidTxHash, bidTx;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this4.amount) {
                  _context3.next = 3;
                  break;
                }

                __g_root__.$bvToast.toast('Please input amount', {
                  title: _this4.$t('tip'),
                  variant: 'danger',
                  autoHideDelay: 5000
                });

                return _context3.abrupt("return", false);

              case 3:
                realPrice = bignumber["a" /* BigNumber */].from(Math.floor(_this4.usdtPrice * 1e6)).mul(_this4.amount);

                if (!realPrice.gt(_this4.user.usdtBalance)) {
                  _context3.next = 7;
                  break;
                }

                __g_root__.$bvToast.toast('Balance is not enough', {
                  title: _this4.$t('tip'),
                  variant: 'danger',
                  autoHideDelay: 5000
                });

                return _context3.abrupt("return", false);

              case 7:
                _this4.buyLoading = true;
                _context3.prev = 8;
                _context3.next = 11;
                return eth_ethereum["c" /* USDTContract */].allowance(ethereum.selectedAddress, config["a" /* default */].FLOKIIPreSaleAddress);

              case 11:
                allowance = _context3.sent;

                if (!allowance.lt(realPrice)) {
                  _context3.next = 24;
                  break;
                }

                _context3.next = 15;
                return common_sendTransaction({
                  to: config["a" /* default */].USDTAddress,
                  data: eth_ethereum["d" /* USDTInterface */].encodeFunctionData('approve', [config["a" /* default */].FLOKIIPreSaleAddress, bignumber["a" /* BigNumber */].from('9'.repeat(32)).toHexString()])
                });

              case 15:
                approveTxHash = _context3.sent;
                _context3.next = 18;
                return eth_ethereum["e" /* provider */].waitForTransaction(approveTxHash);

              case 18:
                approveTx = _context3.sent;

                if (!(approveTx.status !== 1)) {
                  _context3.next = 23;
                  break;
                }

                __g_root__.$bvToast.toast('Approve fail', {
                  title: _this4.$t('tip'),
                  variant: 'danger',
                  autoHideDelay: 5000
                });

                _this4.buyLoading = false;
                return _context3.abrupt("return");

              case 23:
                console.log(approveTx);

              case 24:
                _context3.next = 26;
                return common_sendTransaction({
                  to: config["a" /* default */].FLOKIIPreSaleAddress,
                  gas: 960000,
                  data: eth_ethereum["b" /* FLOKIIPreSaleInterface */].encodeFunctionData('purchaseByUSDT', [realPrice])
                });

              case 26:
                bidTxHash = _context3.sent;
                _context3.next = 29;
                return eth_ethereum["e" /* provider */].waitForTransaction(bidTxHash);

              case 29:
                bidTx = _context3.sent;

                if (bidTx.status === 1) {
                  __g_root__.$bvToast.toast('Buy success.', {
                    title: _this4.$t('tip'),
                    variant: 'success',
                    autoHideDelay: 5000
                  });
                } else {
                  __g_root__.$bvToast.toast('Buy fail, please retry.', {
                    title: _this4.$t('tip'),
                    variant: 'danger',
                    autoHideDelay: 5000
                  });
                }

                _context3.next = 35;
                break;

              case 33:
                _context3.prev = 33;
                _context3.t0 = _context3["catch"](8);

              case 35:
                _this4.buyLoading = false;

              case 36:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[8, 33]]);
      }))();
    },
    buyWithETH: function buyWithETH() {
      var _this5 = this;

      if (!this.user.address) {
        __g_root__.$bvToast.toast('Please connect wallet', {
          title: this.$t('tip'),
          variant: 'danger',
          autoHideDelay: 5000
        });

        return false;
      }

      this.buyType = 'ETH';
      this.$bvModal.show('buy-modal');
      setTimeout(function () {
        _this5.$refs.amountInput.focus();
      }, 500);
    },
    buyWithUSDT: function buyWithUSDT() {
      var _this6 = this;

      if (!this.user.address) {
        __g_root__.$bvToast.toast('Please connect wallet', {
          title: this.$t('tip'),
          variant: 'danger',
          autoHideDelay: 5000
        });

        return false;
      }

      this.buyType = 'USDT';
      this.$bvModal.show('buy-modal');
      setTimeout(function () {
        _this6.$refs.amountInput.focus();
      }, 500);
    }
  }
});
// CONCATENATED MODULE: ./src/views/Home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_Homevue_type_script_lang_js_ = (Homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/Home/index.vue?vue&type=style&index=0&id=da061a60&lang=scss&scoped=true&
var Homevue_type_style_index_0_id_da061a60_lang_scss_scoped_true_ = __webpack_require__("07a8");

// EXTERNAL MODULE: ./src/views/Home/index.vue?vue&type=style&index=1&lang=scss&
var Homevue_type_style_index_1_lang_scss_ = __webpack_require__("0821");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/Home/index.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_Homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "da061a60",
  null
  
)

/* harmony default export */ var Home = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "23a2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "299a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "client/img/icon_github.cc62592b.png";

/***/ }),

/***/ "31ab":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "client/img/logo.2651da06.png";

/***/ }),

/***/ "38cf":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var repeat = __webpack_require__("1148");

// `String.prototype.repeat` method
// https://tc39.es/ecma262/#sec-string.prototype.repeat
$({ target: 'String', proto: true }, {
  repeat: repeat
});


/***/ }),

/***/ "408a":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


/***/ }),

/***/ "522d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "client/img/chainlink.1d5fe790.png";

/***/ }),

/***/ "7b05":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAABHUlEQVRIibXWMXLCQAwF0G93VFDnMhkac5UchCauQ5FUnIBbcAg4QGhpki7zMzI2WRvbK+0qmlGz6/EbrWdlFSTxz1EAuCNlYG0BVM62YG8AXu8rUiHJmrf4Jlm1a7kpp7fjX9TNaZJckjwFGx7oEJN4l/XugSdHdBLrKvREZ7EhmItGsTEwFVVhU6AVVWNzoBY1YTEwhpoxDTiFblIwLTiG/qRgFnAMNWOS5Wzr7ccFwHGwJn+BQ/g3iEbGpdZcmaQjHcP2qR0pBeu+WVIbTMU099QEWi61Cc3FzKgHZkK9MDXqialQbyyKlm1b+go60geAF1O7eoxPAGsA53ZnAeA5nEslZW7MrWyq0mYmlRyO+r2x3ClWAK7NuwD8ArF9TQEqOLfpAAAAAElFTkSuQmCC"

/***/ }),

/***/ "7f330":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "client/img/icon_twitter.e8698e5a.png";

/***/ }),

/***/ "8142":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "96e2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "client/img/icon_telegram.f7fdc6d1.png";

/***/ }),

/***/ "b311":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 134:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ clipboard; }
});

// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __webpack_require__(279);
var tiny_emitter_default = /*#__PURE__*/__webpack_require__.n(tiny_emitter);
// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __webpack_require__(370);
var listen_default = /*#__PURE__*/__webpack_require__.n(listen);
// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __webpack_require__(817);
var select_default = /*#__PURE__*/__webpack_require__.n(src_select);
;// CONCATENATED MODULE: ./src/clipboard-action.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Inner class which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 */

var ClipboardAction = /*#__PURE__*/function () {
  /**
   * @param {Object} options
   */
  function ClipboardAction(options) {
    _classCallCheck(this, ClipboardAction);

    this.resolveOptions(options);
    this.initSelection();
  }
  /**
   * Defines base properties passed from constructor.
   * @param {Object} options
   */


  _createClass(ClipboardAction, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = options.action;
      this.container = options.container;
      this.emitter = options.emitter;
      this.target = options.target;
      this.text = options.text;
      this.trigger = options.trigger;
      this.selectedText = '';
    }
    /**
     * Decides which selection strategy is going to be applied based
     * on the existence of `text` and `target` properties.
     */

  }, {
    key: "initSelection",
    value: function initSelection() {
      if (this.text) {
        this.selectFake();
      } else if (this.target) {
        this.selectTarget();
      }
    }
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     */

  }, {
    key: "createFakeElement",
    value: function createFakeElement() {
      var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
      this.fakeElem = document.createElement('textarea'); // Prevent zooming on iOS

      this.fakeElem.style.fontSize = '12pt'; // Reset box model

      this.fakeElem.style.border = '0';
      this.fakeElem.style.padding = '0';
      this.fakeElem.style.margin = '0'; // Move element out of screen horizontally

      this.fakeElem.style.position = 'absolute';
      this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

      var yPosition = window.pageYOffset || document.documentElement.scrollTop;
      this.fakeElem.style.top = "".concat(yPosition, "px");
      this.fakeElem.setAttribute('readonly', '');
      this.fakeElem.value = this.text;
      return this.fakeElem;
    }
    /**
     * Get's the value of fakeElem,
     * and makes a selection on it.
     */

  }, {
    key: "selectFake",
    value: function selectFake() {
      var _this = this;

      var fakeElem = this.createFakeElement();

      this.fakeHandlerCallback = function () {
        return _this.removeFake();
      };

      this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;
      this.container.appendChild(fakeElem);
      this.selectedText = select_default()(fakeElem);
      this.copyText();
      this.removeFake();
    }
    /**
     * Only removes the fake element after another click event, that way
     * a user can hit `Ctrl+C` to copy because selection still exists.
     */

  }, {
    key: "removeFake",
    value: function removeFake() {
      if (this.fakeHandler) {
        this.container.removeEventListener('click', this.fakeHandlerCallback);
        this.fakeHandler = null;
        this.fakeHandlerCallback = null;
      }

      if (this.fakeElem) {
        this.container.removeChild(this.fakeElem);
        this.fakeElem = null;
      }
    }
    /**
     * Selects the content from element passed on `target` property.
     */

  }, {
    key: "selectTarget",
    value: function selectTarget() {
      this.selectedText = select_default()(this.target);
      this.copyText();
    }
    /**
     * Executes the copy operation based on the current selection.
     */

  }, {
    key: "copyText",
    value: function copyText() {
      var succeeded;

      try {
        succeeded = document.execCommand(this.action);
      } catch (err) {
        succeeded = false;
      }

      this.handleResult(succeeded);
    }
    /**
     * Fires an event based on the copy operation result.
     * @param {Boolean} succeeded
     */

  }, {
    key: "handleResult",
    value: function handleResult(succeeded) {
      this.emitter.emit(succeeded ? 'success' : 'error', {
        action: this.action,
        text: this.selectedText,
        trigger: this.trigger,
        clearSelection: this.clearSelection.bind(this)
      });
    }
    /**
     * Moves focus away from `target` and back to the trigger, removes current selection.
     */

  }, {
    key: "clearSelection",
    value: function clearSelection() {
      if (this.trigger) {
        this.trigger.focus();
      }

      document.activeElement.blur();
      window.getSelection().removeAllRanges();
    }
    /**
     * Sets the `action` to be performed which can be either 'copy' or 'cut'.
     * @param {String} action
     */

  }, {
    key: "destroy",

    /**
     * Destroy lifecycle.
     */
    value: function destroy() {
      this.removeFake();
    }
  }, {
    key: "action",
    set: function set() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';
      this._action = action;

      if (this._action !== 'copy' && this._action !== 'cut') {
        throw new Error('Invalid "action" value, use either "copy" or "cut"');
      }
    }
    /**
     * Gets the `action` property.
     * @return {String}
     */
    ,
    get: function get() {
      return this._action;
    }
    /**
     * Sets the `target` property using an element
     * that will be have its content copied.
     * @param {Element} target
     */

  }, {
    key: "target",
    set: function set(target) {
      if (target !== undefined) {
        if (target && _typeof(target) === 'object' && target.nodeType === 1) {
          if (this.action === 'copy' && target.hasAttribute('disabled')) {
            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
          }

          if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
          }

          this._target = target;
        } else {
          throw new Error('Invalid "target" value, use a valid Element');
        }
      }
    }
    /**
     * Gets the `target` property.
     * @return {String|HTMLElement}
     */
    ,
    get: function get() {
      return this._target;
    }
  }]);

  return ClipboardAction;
}();

/* harmony default export */ var clipboard_action = (ClipboardAction);
;// CONCATENATED MODULE: ./src/clipboard.js
function clipboard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clipboard_typeof = function _typeof(obj) { return typeof obj; }; } else { clipboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clipboard_typeof(obj); }

function clipboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function clipboard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function clipboard_createClass(Constructor, protoProps, staticProps) { if (protoProps) clipboard_defineProperties(Constructor.prototype, protoProps); if (staticProps) clipboard_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */

function getAttributeValue(suffix, element) {
  var attribute = "data-clipboard-".concat(suffix);

  if (!element.hasAttribute(attribute)) {
    return;
  }

  return element.getAttribute(attribute);
}
/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */


var Clipboard = /*#__PURE__*/function (_Emitter) {
  _inherits(Clipboard, _Emitter);

  var _super = _createSuper(Clipboard);

  /**
   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
   * @param {Object} options
   */
  function Clipboard(trigger, options) {
    var _this;

    clipboard_classCallCheck(this, Clipboard);

    _this = _super.call(this);

    _this.resolveOptions(options);

    _this.listenClick(trigger);

    return _this;
  }
  /**
   * Defines if attributes would be resolved using internal setter functions
   * or custom functions that were passed in the constructor.
   * @param {Object} options
   */


  clipboard_createClass(Clipboard, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
      this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
      this.text = typeof options.text === 'function' ? options.text : this.defaultText;
      this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
    }
    /**
     * Adds a click event listener to the passed trigger.
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     */

  }, {
    key: "listenClick",
    value: function listenClick(trigger) {
      var _this2 = this;

      this.listener = listen_default()(trigger, 'click', function (e) {
        return _this2.onClick(e);
      });
    }
    /**
     * Defines a new `ClipboardAction` on each click event.
     * @param {Event} e
     */

  }, {
    key: "onClick",
    value: function onClick(e) {
      var trigger = e.delegateTarget || e.currentTarget;

      if (this.clipboardAction) {
        this.clipboardAction = null;
      }

      this.clipboardAction = new clipboard_action({
        action: this.action(trigger),
        target: this.target(trigger),
        text: this.text(trigger),
        container: this.container,
        trigger: trigger,
        emitter: this
      });
    }
    /**
     * Default `action` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultAction",
    value: function defaultAction(trigger) {
      return getAttributeValue('action', trigger);
    }
    /**
     * Default `target` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultTarget",
    value: function defaultTarget(trigger) {
      var selector = getAttributeValue('target', trigger);

      if (selector) {
        return document.querySelector(selector);
      }
    }
    /**
     * Returns the support of the given action, or all actions if no action is
     * given.
     * @param {String} [action]
     */

  }, {
    key: "defaultText",

    /**
     * Default `text` lookup function.
     * @param {Element} trigger
     */
    value: function defaultText(trigger) {
      return getAttributeValue('text', trigger);
    }
    /**
     * Destroy lifecycle.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.listener.destroy();

      if (this.clipboardAction) {
        this.clipboardAction.destroy();
        this.clipboardAction = null;
      }
    }
  }], [{
    key: "isSupported",
    value: function isSupported() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
      var actions = typeof action === 'string' ? [action] : action;
      var support = !!document.queryCommandSupported;
      actions.forEach(function (action) {
        support = support && !!document.queryCommandSupported(action);
      });
      return support;
    }
  }]);

  return Clipboard;
}((tiny_emitter_default()));

/* harmony default export */ var clipboard = (Clipboard);

/***/ }),

/***/ 828:
/***/ (function(module) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),

/***/ 438:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var closest = __webpack_require__(828);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),

/***/ 879:
/***/ (function(__unused_webpack_module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),

/***/ 370:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var is = __webpack_require__(879);
var delegate = __webpack_require__(438);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),

/***/ 817:
/***/ (function(module) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),

/***/ 279:
/***/ (function(module) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(134);
/******/ })()
.default;
});

/***/ }),

/***/ "b680":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toInteger = __webpack_require__("a691");
var thisNumberValue = __webpack_require__("408a");
var repeat = __webpack_require__("1148");
var fails = __webpack_require__("d039");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = (c % n) * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = String(data[index]);
      s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "cc1c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "client/img/copy_btn.b9ba2761.png";

/***/ }),

/***/ "e9ae":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "client/img/top_logo.b565e6fd.png";

/***/ })

}]);