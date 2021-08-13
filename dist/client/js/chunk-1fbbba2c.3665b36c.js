(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-1fbbba2c"],{

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3750c3dc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home/index.vue?vue&type=template&id=3cb46c34&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('div',{staticClass:"container"},[_vm._m(0),_vm._m(1),_c('div',{staticClass:"slogan"},[_vm._v(" The #1 Meme Token on Ethereum Blockchain ")]),_c('div',{staticClass:"buy-section"},[_c('div',{staticClass:"buy-inner-section"},[_c('div',{staticClass:"buy-content"},[_vm._v(" Buy directly from your wallet. ")]),(!_vm.user.address)?_c('button',{staticClass:"connect-wallet",on:{"click":function($event){return _vm.$bvModal.show('select-modal')}}},[_vm._v("Connect Wallet")]):_vm._e(),(_vm.user.address && _vm.user.isWalletConnect)?_c('button',{staticClass:"connect-wallet",on:{"click":_vm.disconnect}},[_vm._v("Disconnect")]):_vm._e()]),_c('div',{staticClass:"button-group"},[_c('div',{staticClass:"buy-button",on:{"click":_vm.buyWithETH}},[_c('div',[_vm._v("Buy with ETH")]),_c('div',{staticClass:"price"},[_vm._v(_vm._s(_vm.ethPrice)+"ETH/1FLOKII")])]),_c('div',{staticClass:"buy-button",on:{"click":_vm.buyWithUSDT}},[_c('div',[_vm._v("Buy with USDT")]),_c('div',{staticClass:"price"},[_vm._v(_vm._s(_vm.usdtPrice)+"USDT/1FLOKII")])])])])]),_vm._m(2),_c('b-modal',{attrs:{"id":"buy-modal","modal-class":"buy-modal","centered":"","hide-footer":"","hide-header":""}},[_c('img',{staticClass:"close-btn",attrs:{"src":__webpack_require__("7b05"),"alt":""},on:{"click":function($event){return _vm.$bvModal.hide('buy-modal')}}}),_c('div',{staticClass:"d-block text-center"},[_c('div',{staticClass:"input-wrapper"},[_c('div',{staticClass:"amount-input"},[_c('input',{directives:[{name:"model",rawName:"v-model.number",value:(_vm.amount),expression:"amount",modifiers:{"number":true}},{name:"number-input",rawName:"v-number-input"}],ref:"amountInput",attrs:{"type":"text"},domProps:{"value":(_vm.amount)},on:{"input":function($event){if($event.target.composing){ return; }_vm.amount=_vm._n($event.target.value)},"blur":function($event){return _vm.$forceUpdate()}}}),_c('span',{staticClass:"unit"},[_vm._v("FLOKII")])]),_c('div',{staticClass:"amount"},[_vm._v(" "+_vm._s(_vm.total)+_vm._s(_vm.buyType)+" ")])])]),_c('div',{staticClass:"modal-button-group"},[_c('b-button',{on:{"click":function($event){return _vm.$bvModal.hide('buy-modal')}}},[_vm._v("Cancel")]),_c('b-button',{attrs:{"disabled":_vm.buyLoading},on:{"click":_vm.buy}},[_vm._v("Ok")])],1)]),_c('b-modal',{attrs:{"id":"select-modal","modal-class":"select-modal","centered":"","hide-footer":"","hide-header":""}},[_c('img',{staticClass:"close-btn",attrs:{"src":__webpack_require__("7b05"),"alt":""},on:{"click":function($event){return _vm.$bvModal.hide('select-modal')}}}),_c('div',{staticClass:"connect-button-group"},[_c('b-button',{on:{"click":_vm.unlockByMetaMask}},[_vm._v("Metamask")]),_c('b-button',{on:{"click":_vm.unlockByWalletConnect}},[_vm._v("WalletConnect")])],1)])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nav-bar"},[_c('div',{staticClass:"nav-logo-wrapper"},[_c('img',{staticClass:"nav-logo",attrs:{"src":__webpack_require__("31ab"),"alt":""}}),_vm._v(" FLOKII ")]),_c('div',{staticClass:"audit"},[_c('a',{attrs:{"href":"/Floki_Kishu_Inu.pdf"}},[_vm._v(" Audited By: TechRate ")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"logo-wrapper"},[_c('img',{attrs:{"src":__webpack_require__("e9ae"),"alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer"},[_c('div',{staticClass:"build-with"},[_vm._v(" Price feed by "),_c('img',{attrs:{"src":__webpack_require__("522d"),"alt":""}})]),_c('div',{staticClass:"footer-content"},[_c('div',{staticClass:"footer-logo-wrapper"},[_c('img',{attrs:{"src":__webpack_require__("31ab"),"alt":""}}),_vm._v(" FLOKII ")]),_c('div',{staticClass:"desc"},[_vm._v(" A decentralized community driven platform with facility of swap. earn. yield. lend. and borrow. leveraging under one application. Welcome to Defi universe. ")]),_c('div',{staticClass:"social-group"},[_c('a',{attrs:{"href":"https://twitter.com/flokikishu/status/1422106726342434817?s=21","target":"_blank"}},[_c('img',{attrs:{"src":__webpack_require__("7f330"),"alt":""}})]),_c('a',{attrs:{"href":"https://t.me/Flokikishu","target":"_blank"}},[_c('img',{attrs:{"src":__webpack_require__("96e2"),"alt":""}})]),_c('a',{attrs:{"href":"https://github.com/Floki-Kishu-Inu/","target":"_blank"}},[_c('img',{attrs:{"src":__webpack_require__("299a"),"alt":""}})])]),_c('div',{staticClass:"link-group"},[_c('a',{staticClass:"link-btn",attrs:{"href":"/Floki_Kishu_Inu.pdf"}},[_vm._v("Audit Report")]),_c('a',{staticClass:"link-btn",attrs:{"href":"mailto:Contact@floki-kishu.io"}},[_vm._v("Support")]),_c('a',{staticClass:"link-btn",attrs:{"href":"https://floki-kishu.io/#"}},[_vm._v("Floki-Kishu.io")])]),_c('div',{staticClass:"copyright"},[_vm._v(" 2021 FLOKI KISHU INU. ALL RIGHTS RESERVED ")])])])}]


// CONCATENATED MODULE: ./src/views/Home/index.vue?vue&type=template&id=3cb46c34&scoped=true&

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

// EXTERNAL MODULE: ./node_modules/ethers/lib.esm/ethers.js + 5 modules
var ethers = __webpack_require__("6779");

// EXTERNAL MODULE: ./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js
var bignumber = __webpack_require__("e36d");

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
    this.getPrices();
  },
  methods: {
    getPrices: function getPrices() {
      var _this = this;

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
                _this.ethPrice = (_this.usdtPrice / ethPrice).toFixed(8); // console.log(ethPrice.div(1e6).mul(this.usdtPrice));

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
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var txHash, claimTx;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this2.amount) {
                  _context2.next = 3;
                  break;
                }

                __g_root__.$bvToast.toast('Please input amount', {
                  title: _this2.$t('tip'),
                  variant: 'fail',
                  autoHideDelay: 5000
                });

                return _context2.abrupt("return", false);

              case 3:
                _this2.buyLoading = true; // console.log(BigNumber.from(this.ethPrice * 1e18).mul(this.amount))
                // console.log(BigNumber.from(this.amount))
                // console.log(BigNumber.from(this.amount).mul(this.ethPrice).mul(1e18))

                _context2.next = 6;
                return common_sendTransaction({
                  to: config["a" /* default */].FLOKIIPreSaleAddress,
                  value: ethers["utils"].hexValue(bignumber["a" /* BigNumber */].from(_this2.ethPrice * 1e18).mul(_this2.amount)),
                  data: eth_ethereum["b" /* FLOKIIPreSaleInterface */].encodeFunctionData('purchaseByETH()')
                });

              case 6:
                txHash = _context2.sent;
                _context2.next = 9;
                return eth_ethereum["e" /* provider */].waitForTransaction(txHash);

              case 9:
                claimTx = _context2.sent;
                _this2.buyLoading = false;

                if (claimTx.status === 1) {
                  __g_root__.$bvToast.toast('Buy success', {
                    title: _this2.$t('tip'),
                    variant: 'success',
                    autoHideDelay: 5000
                  });
                } else {
                  __g_root__.$bvToast.toast('Buy fail', {
                    title: _this2.$t('tip'),
                    variant: 'danger',
                    autoHideDelay: 5000
                  });
                }

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    usdtBuySubmit: function usdtBuySubmit() {
      var _this3 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var realPrice, allowance, approveTxHash, approveTx, bidTxHash, bidTx;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this3.amount) {
                  _context3.next = 3;
                  break;
                }

                __g_root__.$bvToast.toast('Please input amount', {
                  title: _this3.$t('tip'),
                  variant: 'fail',
                  autoHideDelay: 5000
                });

                return _context3.abrupt("return", false);

              case 3:
                realPrice = _this3.amount * _this3.usdtPrice;
                _context3.next = 6;
                return eth_ethereum["c" /* USDTContract */].allowance(ethereum.selectedAddress, config["a" /* default */].FLOKIIPreSaleAddress);

              case 6:
                allowance = _context3.sent;
                console.log(allowance);

                if (!allowance.lt(realPrice * 1e6)) {
                  _context3.next = 21;
                  break;
                }

                _this3.submitting = true;
                _context3.next = 12;
                return common_sendTransaction({
                  to: config["a" /* default */].USDTAddress,
                  data: eth_ethereum["d" /* USDTInterface */].encodeFunctionData('approve', [config["a" /* default */].FLOKIIPreSaleAddress, bignumber["a" /* BigNumber */].from('9'.repeat(32)).toHexString()])
                });

              case 12:
                approveTxHash = _context3.sent;
                _context3.next = 15;
                return eth_ethereum["e" /* provider */].waitForTransaction(approveTxHash);

              case 15:
                approveTx = _context3.sent;

                if (!(approveTx.status !== 1)) {
                  _context3.next = 20;
                  break;
                }

                __g_root__.$bvToast.toast('Approve fail', {
                  title: _this3.$t('tip'),
                  variant: 'danger',
                  autoHideDelay: 5000
                });

                _this3.submitting = false;
                return _context3.abrupt("return");

              case 20:
                console.log(approveTx);

              case 21:
                // if (this.auction.lastPrice.gt(realPrice)) {
                //   this.pricestate = false;
                //   return;
                // }
                _this3.submitting = true;
                _context3.next = 24;
                return common_sendTransaction({
                  to: config["a" /* default */].FLOKIIPreSaleAddress,
                  gas: 960000,
                  data: eth_ethereum["b" /* FLOKIIPreSaleInterface */].encodeFunctionData('purchaseByUSDT', [realPrice * 1e6])
                });

              case 24:
                bidTxHash = _context3.sent;
                _context3.next = 27;
                return eth_ethereum["e" /* provider */].waitForTransaction(bidTxHash);

              case 27:
                bidTx = _context3.sent;

                if (bidTx.status === 1) {
                  __g_root__.$bvToast.toast('Buy success.', {
                    title: _this3.$t('tip'),
                    variant: 'success',
                    autoHideDelay: 5000
                  });
                } else {
                  __g_root__.$bvToast.toast('Buy fail, please retry.', {
                    title: _this3.$t('tip'),
                    variant: 'danger',
                    autoHideDelay: 5000
                  });
                }

              case 29:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    buyWithETH: function buyWithETH() {
      var _this4 = this;

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
        _this4.$refs.amountInput.focus();
      }, 500);
    },
    buyWithUSDT: function buyWithUSDT() {
      var _this5 = this;

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
        _this5.$refs.amountInput.focus();
      }, 500);
    }
  }
});
// CONCATENATED MODULE: ./src/views/Home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_Homevue_type_script_lang_js_ = (Homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/Home/index.vue?vue&type=style&index=0&id=3cb46c34&lang=scss&scoped=true&
var Homevue_type_style_index_0_id_3cb46c34_lang_scss_scoped_true_ = __webpack_require__("bbe6");

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
  "3cb46c34",
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

/***/ "669e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7b05":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAABHUlEQVRIibXWMXLCQAwF0G93VFDnMhkac5UchCauQ5FUnIBbcAg4QGhpki7zMzI2WRvbK+0qmlGz6/EbrWdlFSTxz1EAuCNlYG0BVM62YG8AXu8rUiHJmrf4Jlm1a7kpp7fjX9TNaZJckjwFGx7oEJN4l/XugSdHdBLrKvREZ7EhmItGsTEwFVVhU6AVVWNzoBY1YTEwhpoxDTiFblIwLTiG/qRgFnAMNWOS5Wzr7ccFwHGwJn+BQ/g3iEbGpdZcmaQjHcP2qR0pBeu+WVIbTMU099QEWi61Cc3FzKgHZkK9MDXqialQbyyKlm1b+go60geAF1O7eoxPAGsA53ZnAeA5nEslZW7MrWyq0mYmlRyO+r2x3ClWAK7NuwD8ArF9TQEqOLfpAAAAAElFTkSuQmCC"

/***/ }),

/***/ "7f330":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "client/img/icon_twitter.e8698e5a.png";

/***/ }),

/***/ "96e2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "client/img/icon_telegram.f7fdc6d1.png";

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

/***/ "bbe6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3cb46c34_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("669e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3cb46c34_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3cb46c34_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e9ae":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "client/img/top_logo.b565e6fd.png";

/***/ })

}]);