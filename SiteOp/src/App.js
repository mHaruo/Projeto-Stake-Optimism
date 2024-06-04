import { getMetaMaskProvider, deposite, Connect } from "./MetaMaskServices";
import "./App.css";
/* import "./App.html"; */



function App() {
    return (

        <body>

            <button onClick={getMetaMaskProvider} class="conectar">MetaMask</button>
            <button onClick={deposite} class="stake">Add Stake Token</button>
            
            <button onClick={getMetaMaskProvider} class="removestake">Remove Stake</button>
            <button onClick={getMetaMaskProvider} class="claimnft">Clain NFT</button>

            <input type="number" class="amountadd"></input>
            <input type="number" class="amountrem"></input>

        </body>


    )

}

export default App;

