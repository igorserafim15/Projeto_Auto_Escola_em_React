import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <nav className="header__nav container">
        <div className="header__logo">Logo</div>
        <ul className="header__menu">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/sobre'>Sobre</Link></li>
          <li><Link to='/servicos'>Serviços</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header