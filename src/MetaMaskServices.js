import { Web3 } from 'web3';
import config from './config.json'

const walletAdress = config.WALLET_ADDRESS
const ABI = require('./abi.json');

export async function getMetaMaskProvider() {

  if (!window.ethereum) throw new Error("MetaMask nao encontrada");

  const web3 = new Web3(window.ethereum);

  const account = await web3.eth.requestAccounts();
  console.log(account);

  if (!account || !account.length) throw new Error('Permissao nao concedida');

  return web3;
}

export async function transfer(from, to, quantity) {
  const web3 = await getMetaMaskProvider();
  const value = Web3.utils.toWei(quantity, 'ether');
  const nonce = await web3.eth.getTransactionCount(from, 'latest');
  const transaction = {
    from,
    to,
    value,
    gas: 21000,
    nonce
  }
  const tx = web3.eth.sendTransaction(transaction);
  return (await tx).transactionHash;
}

//Contract Address: 0x3f166E5150D2fd4d9BD226b92FcC92Bb7b952901



/* export async function transfer(from, myContract, quantity) {
    const web3 = await getMetaMaskProvider();
    const value = web3.utils.toWei(quantity, 'ether');

    const nonce = web3.eth.getTransationCount(from, 'latest');
    const transaction = {
        from,
        myContract,
        value,
        gas: 21000,
        nonce
    };
    const tx = await web3.eth.sendTransaction(transaction);
    return tx.transactionHash;
} */

//transferFrom
/* mytoken.methods.approve(contractAddress, amount).send({ from: accounts[0] }).on('receipt'), (receipt) => {
    myContract.methods.transferFrom(tokenOwnerAddress, contractAddress, amount).
        send({ from: accounts[0] }).on('receipt', (receipt) => {
            // do something with receipt object
        })
} */

//Projeto transfer
/* const myContract = new web3.eth.Contract(abi);
const amount = sendAmount;
let address = myAddress;
myContract.options.address = contractAddress;
myContract.options.from = TokenOwner;
let options = myContract.options;
let data1 = myContract.methods.approve(address, amount).encodeABI();
let data2 = myContract.methods.transferFrom(address, TokenOwner, amount).encodeABI();

const ethAccount = fromPrivateKey(toBuffer("0x..."));
const fromPrivateKeyBuffer = ethAccount.getPrivateKey();

web3.eth.getTransactionCount(TokenOwner, (err, count) => {
  if (err) return;

  const txData = {
    chainId: 0x03,
    gasPrice: web3.utils.toHex(42000000000),
    gasLimit: web3.utils.toHex(90000),
    to: contractAddress,
    from: TokenOwner,
    value: 0x0,
    nonce: web3.utils.toHex(count),
    data: data1
  };
  const tx = new ethTx(txData);
  tx.sign(fromPrivateKeyBuffer);
  const serializedTx = tx.serialize().toString("hex");
  if (!serializedTx) {
    return;
  } else {
    web3.eth.sendSignedTransaction(`0x${serializedTx}`, (err, MuiTXHash) => {
      console.log("err : ", err, "Data1-MuiTXHash : ", MuiTXHash);
      // START DATA2
      web3.eth.getTransactionCount(TokenOwner, (err, count) => {
        if (err) return;

        const txData2 = {
          chainId: 0x03,
          gasPrice: web3.utils.toHex(42000000000),
          gasLimit: web3.utils.toHex(90000),
          to: contarctAddress,
          from: TokenOwner,
          value: 0x0,
          nonce: web3.utils.toHex(count + 1),
          data: data2
        };
        const tx2 = new ethTx(txData2);
        tx2.sign(fromPrivateKeyBuffer);
        const serializedTx2 = tx2.serialize().toString("hex");
        if (!serializedTx2) {
          return;
        } else {
          web3.eth.sendSignedTransaction(`0x${serializedTx2}`, (err, MuiTXHash2) => {
            console.log("err : ", err, "Data2-MuiTXHash : ", MuiTXHash2);
          });
        }
      });
      // END DATA2
    });
}
}); */


