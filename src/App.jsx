import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import WishList from './pages/WishList'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> 
      <Navbar />
        
          <Routes>       
            <Route path='/' element={<Home />}></Route>
            <Route path='/shop' element={<Shop />}></Route>
            <Route path='/cart' element={<Cart />}> </Route>
            <Route path='/wishlist' element={<WishList />}> </Route>
          </Routes>
          <Footer />   
        </div>
    </>
  )
}

export default App
