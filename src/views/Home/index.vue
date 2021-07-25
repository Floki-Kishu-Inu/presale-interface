<template>
  <div class="home">
    <div class="container">
       <div class="logo-wrapper">
        <img src="~@/assets/img/logo.png" alt="">

        <button class="connect-wallet"  v-if="!user.address" @click="$bvModal.show('select-modal')">Connect Wallet</button>
        <button class="connect-wallet"  v-if="user.address && user.isWalletConnect" @click="disconnect">Disconnect</button>
      </div>
      <div class="button-group">
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
      </div>
      <div class="address" v-if="user.address">
        Contract address: {{user.address | trimAddress}}
      </div>
      <div class="list-wrapper">
        <div class="list-container">
          <div class="list-item">Alice bought 3000 FLOKII</div>
          <div class="list-item">Bob bought 2530 FLOKII</div>
        </div>
      </div>

      <div class="media-group">
        <!-- <div class="media-item">
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
        </div> -->
        
        <div class="button-row">
          <span class="button-text">Audited By: TechRateAudited By: TechRate</span>
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
  FLOKIIPreSaleInterface, USDTContract, USDTInterface, provider,
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
      ethPrice: 0.00000326,
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
  methods: {
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

      const txHash = await sendTransaction({
        to: config.FLOKIIPreSaleAddress,
        value: utils.hexValue(this.ethPrice * this.amount * 1e18),
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
      this.buyType = 'eth';
      this.$bvModal.show('buy-modal');
    },

    buyWithUSDT() {
      this.buyType = 'usdt';
      this.$bvModal.show('buy-modal');
    },

  },
};
</script>

<style lang="scss" scoped>
.logo-wrapper {
  text-align: center;
  position: relative;
  // background: url(~@/assets/img/bottom-bg@2x.png) 100% 100% / 400px auto no-repeat;
}

.connect-wallet {
  width: 260px;
  height: 54px;
  color: #fff;
  border: 1px solid #fff;
  font-size: 24px;
  font-weight: bold;
  line-height: 54px;
  text-align: center;
  border-radius: 27px;
  background: rgba(255, 255, 255, 0.2);
  position: absolute;
  left: calc(50% + 180px);
  top: 80px;
  cursor: pointer;
}

.button-group {
  margin-top: 80px;
   & .button-row {
    position: relative;
    &:nth-child(2) {
      margin-top: 8px;
    }
   }

  .button {
    width: 351px;
    height: 88px;
    margin-left: auto;
    margin-right: auto;
    background: url(~@/assets/img/button-bg.png) center / cover no-repeat;

    text-align: center;
    line-height: 84px;
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    cursor: pointer;

  }

  .button-text {
    color: #fff;
    position: absolute;
    // left: 50%;
    top: 24px;
    font-size: 28px;
    left: calc(50% + 180px);
  }
}

.address {
  color: #fff;
  font-size: 30px;
  // left: 60px;
  white-space: nowrap;
  position: relative;
  // padding-left: 260px;
  // padding-left: 430px;
  text-align: center;

}

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
  .connect-wallet {
    margin-top: 24px;
    position: static;
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
  }

  .modal-dialog {
    width: 763px !important;
    max-width: 763px;
  }

  .modal-body {
    padding-top: 60px;
  }

  .modal-content {
    background: url(~@/assets/img/modal-bg.png) center / cover no-repeat;
    width: 763px !important;
    max-width: 763px;
    height: 288px;
  }

  .input-wrapper {
    width: 408px;
    margin-left: auto;
    margin-right: auto;
    input {
      background: rgba(255, 255, 255, .2);
      border: 1px solid #fff;
      width: 408px;
      height: 56px;
      font-size: 36px;
      padding: 0 8px;
    text-align: right;
    border-radius: 4px;
    color: #fff;
    }
    .amount {
      height: 44px;
      line-height: 44px;
      border-bottom: 1px solid #fff;
      color: #fff;
      margin-top: 8px;
      font-size: 36px;
      padding: 0 8px;

    text-align: right;
    }
  }

  .modal-button-group {
    text-align: center;
      margin-top: 36px;
    & button {
      background: rgba(255, 255, 255, .02);
      border: 1px solid #fff;
      width: 128px;
      height: 46px;
      line-height: 46px;
      padding: 0;
      font-size: 36px;
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
      height: 56px;
      line-height: 46px;
      padding: 0;
      font-size: 36px;
      &:nth-child(2) {
        margin-top: 48px;
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
      height: 288px;
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
