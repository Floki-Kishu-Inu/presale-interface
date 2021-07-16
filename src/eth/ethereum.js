import { ethers } from 'ethers';
import config from '@/config';

import FLOKIIPreSaleAbi from '@/eth/abi/FLOKIIPreSale.json';
import FlokiKishuAbi from '@/eth/abi/FlokiKishu.json';
import USDTAbi from '@/eth/abi/USDT.json';

// A Web3Provider wraps a standard Web3 provider, which is
// what Metamask injects as window.ethereum into each page
// https://kovan.infura.io/v3/492234a5fc4a458191731b8d68be70ec
// const provider = new ethers.providers.Web3Provider(window.ethereum);
const provider = new ethers.providers.JsonRpcProvider(config.gethServer);

// The Metamask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
// const signer = provider.getSigner();

// console.log(provider)

const FLOKIIPreSaleContract = new ethers.Contract(config.FLOKIIPreSaleAddress, FLOKIIPreSaleAbi.abi, provider);
const FlokiKishuContract = new ethers.Contract(config.FlokiKishuAddress, FlokiKishuAbi.abi, provider);
const USDTContract = new ethers.Contract(config.USDTAddress, USDTAbi.abi, provider);

const FLOKIIPreSaleInterface = new ethers.utils.Interface(FLOKIIPreSaleAbi.abi);
const FlokiKishuInterface = new ethers.utils.Interface(FlokiKishuAbi.abi);
const USDTInterface = new ethers.utils.Interface(USDTAbi.abi);

(async () => {
  // const res = await provider.getGasPrice();
  // console.log(res.toString())
  // console.log(res.toHexString())
  // const txCount = await provider.getTransactionCount(ethereum.selectedAddress, 'pending');
  // console.log(txCount.toString())

  // const buyData = canvasAuctionInterface.encodeFunctionData('buy', [
  //   1
  // ]);

  // console.log(buyData)
})()

// NFTAuction: '0x0b464262603071A935a760ada21057d8266Ac7c4',
// NFTFactory: '0xbF85C6C600E8c8b59825B47dA1f0Fa365E0C5088',
// NFTSwap: '0xC782bc6d9807308855d7060c7f17EB360bA0A1eE',
// coinBid: '0x87Ac9DB11AfbDA826d58b25e8fc1505915E8C5eE',
// coinBidCreation: '0x03f09496c661Ac899C18EBeFBD77aAF4FaEaBffA',
// mining: '0x795D67F07C2470c7adEC38549E93FD2032b65c8e',
// canvasAuction: '

export {
  provider,
  FLOKIIPreSaleContract,
  FlokiKishuContract,
  USDTContract,

  FLOKIIPreSaleInterface,
  FlokiKishuInterface,
  USDTInterface,
}


// // Use the mainnet
// // const network = "homestead";
// const network = 42;

// // Specify your own API keys
// // Each is optional, and if you omit it the default
// // API key for that service will be used.
// const provider = ethers.getDefaultProvider(network, {
//     etherscan: YOUR_ETHERSCAN_API_KEY,
//     infura: YOUR_INFURA_PROJECT_ID,
//     // Or if using a project secret:
//     // infura: {
//     //   projectId: YOUR_INFURA_PROJECT_ID,
//     //   projectSecret: YOUR_INFURA_PROJECT_SECRET,
//     // },
//     alchemy: YOUR_ALCHEMY_API_KEY,
//     pocket: YOUR_POCKET_APPLICATION_KEY
//     // Or if using an application secret key:
//     // pocket: {
//     //   applicationId: ,
//     //   applicationSecretKey:
//     // }
// });
