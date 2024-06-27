
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Home from './Components/Home.jsx'
import Header from './Components/Header.jsx'
import Coins from './Components/Coins.jsx'
import Exchanges from './Components/Exchanges.jsx'
import CoinDetails from './Components/CoinDetails.jsx'


function App() {

  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/coins' element={<Coins/>}/>
      <Route path='/Exchange' element={<Exchanges/>}/>
      <Route path='/CoinDetails' element={<CoinDetails/>}/>
    </Routes>
   </Router>
  )
}

export default App
