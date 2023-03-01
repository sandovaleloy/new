import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Navbar from './components/Layout/Navbar'
import ProtectedUserLogged from './components/App/ProtectedUserLogged'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import Purchases from './pages/Purchases'
import { useEffect } from 'react'
import { getAllCartProducts } from './store/slices/cart.slice'
import Notification from './components/App/Notification'


function App() {
  const { token } = useSelector(store => store.userInfo)
  const dispatch = useDispatch()

  useEffect(() => {
    if(token) {
      dispatch(getAllCartProducts());
    }
  }, [token])
  

  return (
    <div className="App">
      <Navbar />
      <Notification/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Products/:id' element={<Product/>} />

        <Route element={<ProtectedUserLogged/>}>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Purchases' element={<Purchases/>}/>
        </Route>

      </Routes>

    </div>
  )
}

export default App
