/* eslint-disable no-param-reassign */
// import WalletConnect from "@walletconnect/client";
// import QRCodeModal from "@walletconnect/qrcode-modal";
import { USDTContract, provider } from '@/eth/ethereum';

// const isMetamask = !!window.ethereum;

const user = {
  // namespaced: true,
  state: {
    address: '',
    chainId: '',
    isMetamask: false,
    isWalletConnect: false,
    loaded: false,

    ethBalance: 0,
    usdtBalance: 0,
  },

  mutations: {
    UPDATE_STATE: (state, payload) => {
      Object.assign(state, payload);
    },
    RESET_STATE: (state) => {
      Object.assign(state, {
        address: '',
        chainId: '',
      });
    },
  },

  actions: {
    async handleAccountsChanged({ commit, dispatch, state }, accounts) {
      if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        // const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        commit('UPDATE_STATE', {
          // address: accounts[0],
          // chainId,
          loaded: true,
        });
        console.log('Please connect to MetaMask.');
      } else if (accounts[0] !== state.address) {
        // const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        commit('UPDATE_STATE', {
          address: accounts[0],
          // chainId,
          loaded: true,
        });
        dispatch('getBalances');
      }
    },

    unlockByMetaMask({ dispatch }) {
      if (typeof window.ethereum === 'undefined') {
        throw Error('MetaMask is not installed!');
      }

      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          dispatch('handleAccountsChanged', accounts);
        })
        .catch((err) => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            console.log('Please connect to MetaMask.');
          } else {
            console.error(err);
          }
        });
    },

    // disconnectByMetaMask() {

    // },

    unlockByWalletConnect({ dispatch, commit }) {
      // Check if connection is already established
      if (!window.connector.connected) {
        // create new session
        window.connector.createSession();
      } else {
        dispatch('handleAccountsChanged', window.connector.accounts);
        commit('UPDATE_STATE', {
          isWalletConnect: true,
        });
      }
    },

    disconnectByWalletConnect({ commit }) {
      window.connector.killSession();
      commit('UPDATE_STATE', {
        address: '',
      })
    },

    async getBalances({ commit, state }) {
      // console.log(coinBidContract, this.user.address)
      const [ethBalance, usdtBalance ] = await Promise.all([
        provider.getBalance(state.address),
        USDTContract.balanceOf(state.address),
      ]);

      commit('UPDATE_STATE', {
        ethBalance,
        usdtBalance,
        // earnedBalance,
        // dailyEarning,
      });
    },

    // 获取用户信息
    // async GetUserInfo({ state, commit }) {
    //   const response = await getUser(state.token);
    //   commit('SET_IS_LOGIN', true);
    //   commit('SET_ACCOUNT', response.name);
    //   commit('SET_NAME', response.name);
    //   commit('SET_UID', response.id);
    //   response.resources = [];
    //   return response;
    // },

    // // 登出
    // async LogOut({ commit }) {
    //   await logout();
    //   commit('RESET_STATE');
    //   window.location.href = '/login';
    // },

    // LoginByUsername({ commit }, payload) {
    //   return new Promise((resolve, reject) => {
    //     login({
    //       username: payload.username,
    //       password: payload.password,
    //       // csrfmiddlewaretoken: Cookies.get('csrftoken'),
    //     })
    //       .then((response) => {
    //         commit('SET_IS_LOGIN', true);
    //         commit('SET_ACCOUNT', payload.username);
    //         commit('SET_NAME', payload.username);
    //         resolve(response);
    //         return null;
    //       })
    //       .catch((error) => {
    //         reject(error);
    //         return null;
    //       });
    //   });
    // },
  },
};

export default user;
