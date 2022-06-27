import React from 'react'
import logo from '../imgs/logo-bookmark.svg'

const Header = () => {
  return (
    <header>
      <nav className="container flex items-center py-4 sm:mt-3 bg-gray-300 rounded shadow-lg ">
        <div className="py-"><img src={logo} alt="Logo" /></div>
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
          <li className="cursor-pointer hover:text-white">Características</li>
          <li className="cursor-pointer hover:text-white">Precios</li>
          <li className="cursor-pointer hover:text-white">Contacto</li>
          <li className="cursor-pointer hover:text-white">Descargar</li>
          <button type="button" className="bg-white text-black rounded-md px-5 py-3 uppercase hover:bg-bookmark-red hover:text-white">Register</button>
          <button type="button" className="bg-bookmark-red text-white rounded-md px-5 py-3 uppercase hover:bg-white hover:text-black">Login</button>
        </ul>
        <div className="flex sm:hidden flex-1 justify-end">
          <i className="text-2xl fas fa-bars"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header