import { getMetaMaskProvider, transfer } from './MetaMaskServices';
import { useState } from 'react';
require("dotenv").config();

function App() {

  const [message, setMessage] = useState("");

  function transferClick() {
    transfer("0x2E72cbF5eeA8c97892FBB4be33fBdFBfF12C6e6A", process.env.TESTE_TRANSFER,
      0.005).then(tx => setMessage(tx));
  }


  return (
    <div>
      TESTE METAMASK
      <br />
      <button onClick={getMetaMaskProvider}>MetaMask</button>
      <br />
      <button onClick={transferClick}>Transfer</button>
      <br />
      {message}
    </div>
  );
}

export default App;