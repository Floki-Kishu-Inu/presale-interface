<i18n>
{
  "en": {
    "home": "Home",
    "auction": "Auction",
    "governance": "Governance",
    "introduce": "Introduce",
    "signUp": "登录",
    "whitePaper": "White Paper"
  },
  "zh": {
    "home": "首页",
    "auction": "拍卖",
    "governance": "治理",
    "introduce": "介绍",
    "signUp": "登录",
    "whitePaper": "白皮书"
  }
}
</i18n>
<template>
  <div>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { setLang, getLang } from "@/common/lang"

export default {
  filters: {
    ellipsis(address) {
      return address.replace(/^(.{4}).*(.{3})$/, '$1...$2');
    }
  },
  data() {
    return {
      lang: getLang(),
      atTop: true,
      expand: false,

    };
  },
  computed: {
    ...mapState(['user']),
    isHome() {
      return this.$route.path === '/';
    },
    langText() {
      const langMap = {
        zh: '简体中文',
        en: 'English',
      }
      return langMap[this.lang];
    }
  },
  mounted() {
    document.addEventListener('scroll', (e) => {
      if (window.scrollY > 0) {
        this.atTop = false;
      } else {
        this.atTop = true;
      }
    });
  },

  methods: {
    onToggleClick() {
      this.expand = !this.expand;
    },
    changeLang(lang) {
      setLang(lang);
      location.reload();
    },
    ...mapActions(['showComingSoon']),

    unlock() {
      this.$store.dispatch('unlockByMetaMask');
      // __g_account__.unlockByMetaMask();
    },

    onClickGovernance() {
      window.open('https://gov.coin-bid.io/#/');
    }
  },
};
</script>

<style lang="scss" scoped>
.logo {
  width: 124px;
  margin-right: 48px;
}

.navbar-nav {
  align-items: center;
  & .nav-item {
    color: #000;
    margin-right: 24px;

    .nav-link {
      color: #000000;
      text-align: center;
      font-size: 16px;
      // width: 76px;
      padding: 0 12px;
      display: inline-block;
      height: 26px;
      line-height: 26px;
      border-radius: 13px;
      &.active {
        background: #00D750;
        color: #fff;

      }
    }
  }
  .address-btn {
    margin-right: 12px;
    color: #000000;

    &:hover {
      // color: #00D750;
    }
  }
}

.lang-switch {
  color: #000000;
  margin-right: 12px;
}

.sign-btn,
.whitepaper-btn {
  height: 40px;
  padding: 0.25rem 1rem;
  font-weight: bold;
  background: #fff !important;
  color: #00D750 !important;
  line-height: 30px;
  // &:hover,
  // &:active {

  // }
  & img {
    width: 18px;
  }
}
.sign-btn {

  margin-right: 10px;
}

.navbar {
  padding: 40px 1rem;
  // background-color: transparent !important;

  &.bg-light {
    background-color: #fff !important;
    box-shadow: 0px 8px 20px 0px rgba(153, 153, 153, 0.12);
  }
}

@media (max-width: 1200px) {
  .navbar {
    background-color: #fff !important;
  }

  .navbar-nav {
    .nav-item {
      margin-right: 0;
    }
  }
}

@media (max-width: 992px) {
  .navbar-nav {
    .nav-item {
      padding: 8px 0;
    }

    .btn {
      margin-top: 12px;
    }
  }
}
</style>
