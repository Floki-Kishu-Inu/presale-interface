<template>
  <div class="home">
    <div class="container">
      <div class="nav-bar">
        <div class="nav-logo-wrapper">
          <img class="nav-logo" src="~@/assets/img_v2/logo.png" alt="">
          FLOKII
        </div>
        <div class="audit">
          <a href="/Floki_Kishu_Inu.pdf">
          Audited By: TechRate
          </a>
        </div>
      </div>
       <div class="logo-wrapper">
        <img src="~@/assets/img_v2/top_logo.png" alt="">
      </div>
      <div class="slogan">
        The #1 Meme Token on Ethereum Blockchain
      </div>

      <div class="buy-section">
        <div class="buy-inner-section">
          <div class="buy-content">
            Buy directly from your wallet.
          </div>

          <button class="connect-wallet"  v-if="!user.address" @click="$bvModal.show('select-modal')">Connect Wallet</button>
          <button class="connect-wallet"  v-if="user.address && user.isWalletConnect" @click="disconnect">Disconnect</button>
        </div>

        <div class="button-group">
          <div class="buy-button" @click="buyWithETH">
            <div>Buy with ETH</div>
            <div class="price">{{ethPrice}}ETH/1FLOKII</div>
          </div>
          <div class="buy-button" @click="buyWithUSDT">
            <div>Buy with USDT</div>
            <div class="price">{{usdtPrice}}USDT/1FLOKII</div>
          </div>
        </div>

      </div>

      <!-- <div class="button-group">
        <div class="button-row">
          <div class="button"
          @click="buyWithETH">Buy with ETH</div>
          <span class="button-text">{{ethPrice}}ETH / 1FLOKII</span>
        </div>
        <div class="button-row">
          <div class="button"
          @click="buyWithUSDT"
          >Buy with USDT</div>
          <span class="button-text">{{usdtPrice}}USDT / 1FLOKII</span>
        </div>
      </div> -->
      <!-- <div class="address" v-if="user.address">
        Contract address: {{user.address | trimAddress}}
      </div>
      <div class="list-wrapper">
        <div class="list-container">
          <div class="list-item">Alice bought 3000 FLOKII</div>
          <div class="list-item">Bob bought 2530 FLOKII</div>
        </div>
      </div> -->
    <!--
      <div class="media-group">
        <div class="media-item">
          <img src="~@/assets/img/twitter.png" alt="">
          <span>Twitter</span>
        </div>
        <div class="media-item">
          <img src="~@/assets/img/facebook.png" alt="">
          <span>Facebook</span>
        </div>
        <div class="media-item">
          <img src="~@/assets/img/github.png" alt="">
          <span>Github</span>
        </div>
      </div> -->
    </div>

    <div class="footer">
      <div class="build-with">
        Price feed by <img src="~@/assets/img_v2/chainlink.png" alt="">
      </div>
      <div class="footer-content">
       <div class="footer-logo-wrapper">
          <img src="~@/assets/img_v2/logo.png" alt="">
          FLOKII
       </div>
       <div class="desc">
         A decentralized community driven platform with facility of swap. earn. yield. lend. and borrow. leveraging under one application. Welcome to Defi universe.
       </div>
       <div class="social-group">
         <a href="https://twitter.com/flokikishu/status/1422106726342434817?s=21" target="_blank">
           <img src="~@/assets/img_v2/icon_twitter.png" alt="">
         </a>
         <a href="https://t.me/Flokikishu" target="_blank">
           <img src="~@/assets/img_v2/icon_telegram.png" alt="">
         </a>
         <a href="https://github.com/Floki-Kishu-Inu/" target="_blank">
           <img src="~@/assets/img_v2/icon_github.png" alt="">
         </a>
       </div>

       <div class="link-group">
         <a class="link-btn" href="/Floki_Kishu_Inu.pdf">Audit Report</a>
         <a class="link-btn" href="mailto:Contact@floki-kishu.io">Support</a>
         <a class="link-btn" href="https://floki-kishu.io/#">Floki-Kishu.io</a>
       </div>

       <div class="copyright">
         2021 FLOKI KISHU INU. ALL RIGHTS RESERVED
       </div>
      </div>
    </div>
    <b-modal id="buy-modal" modal-class="buy-modal" centered hide-footer hide-header>
      <img class="close-btn" @click="$bvModal.hide('buy-modal')" src="~@/assets/img/close-btn.png" alt="">
      <div class="d-block text-center">
        <!-- <h3>Hello From This Modal!</h3> -->
        <div class="input-wrapper">
          <input type="text" v-model.number="amount">
          <div class="amount">
          {{total}}{{buyType}}
        </div>
        </div>

      </div>
      <div class="modal-button-group">
        <b-button @click="$bvModal.hide('buy-modal')">Cancel</b-button>
        <b-button @click="buy" :disabled="buyLoading">Ok</b-button>
      </div>
    </b-modal>

     <b-modal id="select-modal" modal-class="select-modal" centered hide-footer hide-header>
      <img class="close-btn" @click="$bvModal.hide('select-modal')" src="~@/assets/img/close-btn.png" alt="">
      <div class="connect-button-group">
        <b-button @click="unlockByMetaMask">Metamask</b-button>
        <b-button @click="unlockByWalletConnect">WalletConnect</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';
import { utils, BigNumber } from 'ethers';
import config from '@/config';
import {
  FLOKIIPreSaleInterface, FLOKIIPreSaleContract, USDTContract, USDTInterface, provider,
} from '@/eth/ethereum';
import sendTransaction from '@/common/sendTransaction';

console.log(FLOKIIPreSaleInterface);
export default {
  name: 'Home',
  components: {

  },

  data() {
    return {
      buyType: '',
      buyLoading: false,

      amount: 0,
      usdtPrice: 0.007,
      ethPrice: 0,
    };
  },

  filters: {
    trimAddress(address) {
      if (address) {
        return address.replace(/^(.{7}).*(.{3})$/g, (str, $1, $2) => `${$1}...${$2}`);
      }
      return '';
    },
  },

  computed: {
    ...mapState(['user']),

    total() {
      if (this.buyType === 'usdt') {
        return (this.amount * this.usdtPrice).toFixed(6);
      }

      if (this.buyType === 'eth') {
        return (this.amount * this.ethPrice).toFixed(6);
      }
      return 0;
    },
  },

  created() {
    this.getPrices();
  },
  methods: {

    async getPrices() {
      const [ethPrice] = await FLOKIIPreSaleContract.functions.getEthPrice();

      // console.log(this.usdtPrice)
      // console.log(ethPrice)
      this.ethPrice = (this.usdtPrice / ethPrice).toFixed(8)
      // console.log(ethPrice.div(1e6).mul(this.usdtPrice));
    },
    unlockByWalletConnect() {
      // console.log('xxx');
      // this.$store.dispatch('unlockByMetaMask');
      this.$store.dispatch('unlockByWalletConnect');
      this.$bvModal.hide('select-modal');
      // __g_account__.unlockByMetaMask();
    },

    unlockByMetaMask() {
      // console.log('xxx');
      // this.$store.dispatch('unlockByMetaMask');
      this.$store.dispatch('unlockByMetaMask');
      this.$bvModal.hide('select-modal');
      // __g_account__.unlockByMetaMask();
    },

    disconnect() {
      this.$store.dispatch('disconnectByWalletConnect');
    },

    buy() {

      if (this.buyType === 'eth') {
        this.ethBuySubmit();
      } else {
        this.usdtBuySubmit();
      }
    },

    async ethBuySubmit() {
      // this.$bvModal.hide('buy-modal')


      if (!this.amount) {
        __g_root__.$bvToast.toast('Please input amount', {
          title: this.$t('tip'),
          variant: 'fail',
          autoHideDelay: 5000,
        });
        return false;
      }

      this.buyLoading = true;

      // console.log(BigNumber.from(this.ethPrice * 1e18).mul(this.amount))
      // console.log(BigNumber.from(this.amount))
      // console.log(BigNumber.from(this.amount).mul(this.ethPrice).mul(1e18))
      const txHash = await sendTransaction({
        to: config.FLOKIIPreSaleAddress,
        value: utils.hexValue(BigNumber.from(this.ethPrice * 1e18).mul(this.amount)),
        data: FLOKIIPreSaleInterface.encodeFunctionData('purchaseByETH()'),
      });
      const claimTx = await provider.waitForTransaction(txHash);

      this.buyLoading = false;

      if (claimTx.status === 1) {
        __g_root__.$bvToast.toast('Buy success', {
          title: this.$t('tip'),
          variant: 'success',
          autoHideDelay: 5000,
        });
      } else {
        __g_root__.$bvToast.toast('Buy fail', {
          title: this.$t('tip'),
          variant: 'danger',
          autoHideDelay: 5000,
        });
      }
    },

    async usdtBuySubmit() {


      if (!this.amount) {
        __g_root__.$bvToast.toast('Please input amount', {
          title: this.$t('tip'),
          variant: 'fail',
          autoHideDelay: 5000,
        });
        return false;
      }

      const realPrice = this.amount * this.usdtPrice;

      const allowance = await USDTContract.allowance(
        ethereum.selectedAddress,
        config.FLOKIIPreSaleAddress,
      );

      console.log(allowance);
      if (allowance.lt(realPrice * 1e6)) {
        this.submitting = true;
        const approveTxHash = await sendTransaction({
          to: config.USDTAddress,
          data: USDTInterface.encodeFunctionData('approve', [
            config.FLOKIIPreSaleAddress,
            BigNumber.from('9'.repeat(32)).toHexString(),
          ]),
        });

        const approveTx = await provider.waitForTransaction(approveTxHash);

        if (approveTx.status !== 1) {
          __g_root__.$bvToast.toast('Approve fail', {
            title: this.$t('tip'),
            variant: 'danger',
            autoHideDelay: 5000,
          });
          this.submitting = false;
          return;
        }
        console.log(approveTx);
      }

      // if (this.auction.lastPrice.gt(realPrice)) {
      //   this.pricestate = false;
      //   return;
      // }

      this.submitting = true;

      const bidTxHash = await sendTransaction({
        to: config.FLOKIIPreSaleAddress,
        gas: 960000,
        data: FLOKIIPreSaleInterface.encodeFunctionData('purchaseByUSDT', [
          realPrice * 1e6,
        ]),
      });
      const bidTx = await provider.waitForTransaction(bidTxHash);

      if (bidTx.status === 1) {
        __g_root__.$bvToast.toast('Buy success.', {
          title: this.$t('tip'),
          variant: 'success',
          autoHideDelay: 5000,
        });
      } else {
        __g_root__.$bvToast.toast('Buy fail, please retry.', {
          title: this.$t('tip'),
          variant: 'danger',
          autoHideDelay: 5000,
        });
      }
    },

    buyWithETH() {
       if (!this.user.address) {
        __g_root__.$bvToast.toast('Please connect wallet', {
          title: this.$t('tip'),
          variant: 'danger',
          autoHideDelay: 5000,
        });
        return false;
      }

      this.buyType = 'eth';
      this.$bvModal.show('buy-modal');

    },

    buyWithUSDT() {
       if (!this.user.address) {
        __g_root__.$bvToast.toast('Please connect wallet', {
          title: this.$t('tip'),
          variant: 'danger',
          autoHideDelay: 5000,
        });
        return false;
      }

      this.buyType = 'usdt';
      this.$bvModal.show('buy-modal');
    },

  },
};
</script>

<style lang="scss" scoped>
// .home {
//   min-height: 100vh;
//   background: #000;
// }

// .footer {
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
// }
.container {
  min-height: calc(100vh - 224px);
  padding-bottom: 30px;
  min-width: 100%;
  box-sizing: border-box;
}

.nav-bar {
  padding: 18px 0;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav-logo {
    width: 48px;
  }
  .nav-logo-wrapper {
    color: #fff;
  }
  & .audit {
    & a {
      color: #fff;
    }
  }
}

.logo-wrapper {
  text-align: center;
  position: relative;
  margin-top: 24px;
  img {
    width: 180px;
  }
}

.slogan {
  color: #fff;
  text-align:center;
  margin-top: 12px;
}

.buy-section {
  height: 260px;
  margin-top: 24px;
  width: 345px;
  margin-left: auto;
  margin-right: auto;
  background:
    url(~@/assets/img_v2/buy_outline.png) center / 340px auto no-repeat;
}

.buy-inner-section {
  position: relative;
  height: 180px;
  color: #fff;
  background:
    url(~@/assets/img_v2/buy_bg.png) center 18px / 310px auto no-repeat;

  .buy-content {
    color: #fff;
    text-align: center;
    padding-top: 64px;
    font-weight: bold;
    font-size: 18px;
  }
}

.connect-wallet {
  height: 28px;
  color: #fff;
  border: 1px solid #fff;
  font-size: 16px;
  font-weight: bold;
  line-height: 26px;
  text-align: center;
  border-radius: 4px;
  background: linear-gradient(to right, #2f6dd4, #be14ba);
  position: absolute;
  cursor: pointer;
  right: 36px;
  bottom: 24px;
}

.button-group {
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  .buy-button {
    background: url(~@/assets/img_v2/button_bg@2x.png) center / 100% auto no-repeat;
    width: 160px;
    text-align: center;
    height: 50px;
    color: #364c87;
    font-weight: bold;
    line-height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .price {
      font-size: 12px;
      line-height: 12px;
      margin-top: 2px;
      color: #fff;
      font-weight: 400;
    }
  }
}

// .button-group {
//   margin-top: 80px;
//    & .button-row {
//     position: relative;
//     &:nth-child(2) {
//       margin-top: 8px;
//     }
//    }

//   .button {
//     width: 351px;
//     height: 88px;
//     margin-left: auto;
//     margin-right: auto;
//     background: url(~@/assets/img/button-bg.png) center / cover no-repeat;

//     text-align: center;
//     line-height: 84px;
//     color: #fff;
//     font-size: 32px;
//     font-weight: bold;
//     cursor: pointer;

//   }

//   .button-text {
//     color: #fff;
//     position: absolute;
//     // left: 50%;
//     top: 24px;
//     font-size: 28px;
//     left: calc(50% + 180px);
//   }
// }

.footer {
  background: #171522;
}


.build-with {
  color: #fff;
  font-weight: bold;
  text-align: center;
  position: relative;
  top: -10px;
  & img {
    height: 32px;
    margin-left: 12px;
  }
}

.footer-content {
  color: #fff;
  padding: 0 20px;
  & .footer-logo-wrapper {
    font-weight: bold;
    text-align: left;
    img {
      width: 48px;
      margin-right: 12px;
    }
  }

  & .desc {
    font-size: 13px;
    margin-top: 8px;
  }

  & .social-group {
    margin-top: 8px;
    margin-bottom: 8px;
    img {
      width: 24px;
      margin-right: 24px;
    }
  }

  & .copyright {
    text-align: right;
    font-size: 13px;
    padding: 12px 0;
    margin-top: 8px;
  }

  & .link-group {
    .link-btn {
      font-size: 12px;
      border: 0;
      border-radius: 12px;
      margin-right: 6px;
      background: #aaa;
      color: #000;
      padding: 2px 8px;
    }
  }
}

// .address {
//   color: #fff;
//   font-size: 30px;
//   // left: 60px;
//   white-space: nowrap;
//   position: relative;
//   // padding-left: 260px;
//   // padding-left: 430px;
//   text-align: center;

// }

.list-wrapper {
  width: 427px;
  height: 272px;
  background: url(~@/assets/img/scroll-bg.png) center / cover no-repeat;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-top: 54px;
  padding-left: 30px;

  .list-container {
    top: 60px;
    left: 30px;
    right: 30px;
    bottom: 20px;
    position: absolute;
  }

  .list-item {
    font-size: 30px;
    color: #fff;
  }
}

.media-group {
  display: flex;
  justify-content: space-around;
  margin-top: 80px;
  margin-bottom: 48px;
  & img {
    margin-right: 16px;
  }
  .media-item {
    color: #fff;
    font-size: 30px;
  }
}

@media (max-width: 576px) {
  // .connect-wallet {
  //   margin-top: 24px;
  //   position: static;
  // }

  .container {
    min-height: auto;
  }

  .logo-wrapper {
    margin-top: 48px;
    img {
      width: 180px;
    }
}

  .button-group {
     .button-text {
        position: static;
        margin-left: 24px;
     }
  }

  .list-wrapper {
    width: 341px;
    height: 217px;

    .list-item {
      font-size: 24px;
    }
  }

  .media-group {
    text-align: center;
  }
}

</style>

<style lang="scss" >
.select-modal,
.buy-modal {

  .close-btn {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    width: 18px;
  }

  .modal-dialog {
    width: 763px !important;
    max-width: 763px;
  }

  .modal-body {
    padding-top: 54px;
  }

  .modal-content {
    background: url(~@/assets/img/modal-bg.png) center / cover no-repeat;
    width: 763px !important;
    max-width: 763px;
    height: 220px;
  }

  .input-wrapper {
    width: 408px;
    margin-left: auto;
    margin-right: auto;
    input {
      background: rgba(255, 255, 255, .2);
      border: 1px solid #fff;
      width: 408px;
      height: 48px;
      font-size: 36px;
      padding: 0 8px;
    text-align: right;
    border-radius: 4px;
    color: #fff;
    }
    .amount {
      height: 32px;
      line-height: 32px;
      border-bottom: 1px solid #fff;
      color: #fff;
      margin-top: 8px;
      font-size: 24px;
      padding: 0 8px;

    text-align: right;
    }
  }

  .modal-button-group {
    text-align: center;
    margin-top: 12px;
    & button {
      background: rgba(255, 255, 255, .02);
      border: 1px solid #fff;
      width: 128px;
      height: 42px;
      line-height: 42px;
      padding: 0;
      font-size: 24px;
      &:nth-child(1) {
        margin-right: 16px;
      }
    }
  }

  .connect-button-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & button {
      background: rgba(255, 255, 255, .02);
      border: 1px solid #fff;
      width: 280px;
      height: 48px;
      line-height: 46px;
      padding: 0;
      font-size: 24px;
      &:nth-child(2) {
        margin-top: 24px;
      }
    }
  }
}

@media (max-width: 576px) {
  .select-modal,
  .buy-modal {
    .modal-dialog {
      margin: 0;
      padding: 0;
      width: 100% !important;
      // max-width: 100%;
    }
    .modal-content {
      background: url(~@/assets/img/modal-bg.png) center / cover no-repeat;
      width: 360px !important;
      max-width: 360px;
      // height: 220px;
    }
    .input-wrapper {
      width: 100%;
      & input {
        width: 100%;
      }
    }
  }

  .modal-dialog-centered {
    justify-content: center;
  }
}

</style>
