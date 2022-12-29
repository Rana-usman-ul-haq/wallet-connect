import{ useState } from 'react';
import './App.css';
import ConnectWallet from './connectWallet.js';


function App() {
  const [accounts, setAccounts] = useState([]);

  return (

  
  <div className="App">
    < ConnectWallet accounts={accounts} setAccounts={setAccounts} />
</div>


)
}


export default App;
