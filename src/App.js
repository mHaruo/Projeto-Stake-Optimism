import Web3 from "web3";
import { getMetaMaskProvider, transfer } from "./MetaMaskServices"
import config from './config.json'

const contaTeste = config.TESTE_TRANSFER;

function App() {

  /* const [message, setMessage] = useState("");

  function transferClick() {
    transfer("0x2E72cbF5eeA8c97892FBB4be33fBdFBfF12C6e6A", process.env.WALLET_ADDRESS,
      0.005).then(tx => setMessage(tx));
  } */
  /*  getAccount = async (e) => (
     e.preventDefault();
   try {
     window.web3 = new Web3(window.ethereum);
     const account = await window.ethereum.request(method: 'eth_requestAccount'));
       alert(account[0]);
   } catch (e) {
     alert("error with Metamask")
     console.log(e);
   }
  } */
  async function transferClick() {
    const web3 = new Web3(window.ethereum);
    const wallet = await web3.eth.getAccounts();
    const walletConectada = wallet[0];

    const valorInput = document.getElementById('valorStake').value;
    if (!valorInput) {
      alert('Por favor, insira um valor válido.');
      return;
    }

    transfer(walletConectada, contaTeste, Number(valorInput));
  }

  return (
    <>
      <div>
        TESTE METAMASK
        <br />
        <button onClick={getMetaMaskProvider}>MetaMask</button>
        <br />
        <button onClick={transferClick}>Transfer</button>
        <br />
        <input type="number" placeholder="Valor do deposito" id='valorStake'></input>

      </div >
    </>
  )
}

export default App
