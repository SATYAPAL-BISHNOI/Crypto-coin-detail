
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Coins from './components/Coins'
import Exchanges from './components/Exchanges'
import CoinDetails from './components/CoinDetails'


function App() {

  return (
   <Router>
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
