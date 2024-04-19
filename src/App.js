import Web3 from "web3";
import { getMetaMaskProvider, transfer, wallet } from "./MetaMaskServices"
import config from './config.json'

const walletDeposito = config.WALLET_DEPOSITO;

function App() {

  async function transferClick() {
    const walletConectada = await wallet();

    const valorInput = document.getElementById('valorStake').value;
    if (!valorInput) {
      alert('Por favor, insira um valor válido.');
      return;
    }

    transfer(walletConectada, walletDeposito, Number(valorInput));
  }

  return (
    <>
      <div>
        TESTE METAMASK
        <br />
        <button onClick={getMetaMaskProvider}>MetaMask</button>
        <br />
        <button onClick={transferClick}>Depositar</button>
        <br />
        <input type="number" placeholder="Valor do deposito" id='valorStake'></input>

      </div >
    </>
  )
}

export default App
