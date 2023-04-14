import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import "./styles/Navbar.css"

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const { products } = useSelector(store => store.cart)
  const { token } = useSelector(store => store.userInfo)

  const toggleMenu = () => {
    setMenu(!menu)
  }
  const close = () => {
    setMenu(!menu)
  }
  
  return (
    <nav className='navbar'>
        <Link className='navbar__name' to="/"><h2>e-commerce</h2></Link>
        <button onClick={toggleMenu} className='menuH'><i className=' bx bx-menu'></i></button>
        <div className={`navbar__containerLinks ${ menu ? 'active' : ''}`}>
            <Link onClick={close} className='navbar__link ' to="/login"><i className='bx bx-user'></i></Link>
            <Link onClick={close} className='navbar__link ' to="/purchases"><i className='bx bx-box'></i></Link> 
            <Link onClick={close}  className='navbar__link' to="/cart">{token ? <span>{products?.length}</span> : ""}<i  className='bx bx-cart'></i></Link>
        </div>
    </nav>
  )
}

export default Navbar