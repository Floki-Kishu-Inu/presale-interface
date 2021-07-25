<template>
  <div
    class="app-wrapper">
      <div class="fixed-header">
        <navbar />
      </div>
      <router-view
      />
      <footerbar />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from './components/Navbar.vue';
import Footerbar from './components/Footerbar.vue';

export default {
  name: 'Layout',
  components: {
    Navbar,
    Footerbar,
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
  async created() {
    console.log(this.$bvToast);
    // require('@/initEnums');

    if (window.ethereum) {

      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      // window.ethereum
      //   .request({ method: 'eth_accounts' })
      //   .then((accounts) => {
      //     store.dispatch('handleAccountsChanged', accounts);
      //   })
      //   .catch((err) => {
      //     // Some unexpected error.
      //     // For backwards compatibility reasons, if no accounts are available,
      //     // eth_accounts will return an empty array.
      //     console.error(err);
      //   });

      // const { chainId } = window.ethereum;
      if (!(chainId === '0x2a' || chainId === '0x1')) {
        __g_root__.$bvToast.toast(this.$t('selectNet'), {
          title: this.$t('tip'),
          autoHideDelay: 5000,
        });
      }
    }
  },
  methods: {
    // handleClickOutside() {
    //   this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    // }
  },
};
</script>

<style lang="scss" scoped>
  // @import "~@/styles/mixin.scss";
  // @import "~@/styles/variable.scss";

  // .app-wrapper {
  //   @include clearfix;
  //   position: relative;
  //   height: 100%;
  //   width: 100%;

  //   &.mobile.openSidebar {
  //     position: fixed;
  //     top: 50px;
  //   }
  // }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 50px;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    height: 124px;
  }

  .hideSidebar {
    .fixed-header {
      width: 100%;
    }
    .main-container {
      width: 100%;
      margin-left: 0 !important;
    }
  }
</style>
