import React from 'react'
import logofooter from '../imgs/logo-bookmark-white.png'

const Footer = () => {
  return (
    <footer class="bg-bookmark-blue py-8">
      <div class="container flex flex-col md:flex-row items-center">
        <div class="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
          <img src={logofooter} alt="" />
          <ul class="flex text-white uppercase gap-12 text-xs">
            <li class="cursor-pointer hover:text-pink-600">Características</li>
            <li class="cursor-pointer hover:text-pink-600">Precios</li>
            <li class="cursor-pointer hover:text-pink-600">Contacto</li>
            <li class="cursor-pointer hover:text-pink-600">Descargar</li>
          </ul>
          
        </div>
        <div class="flex gap-10 mt-12 md:mt-0">
          <li><i class="text-white text-2xl fab fa-twitter hover:text-pink-600"></i></li>
          <li><i class="text-white text-2xl fab fa-facebook-square hover:text-pink-600"></i></li>
          <li><i class="text-white text-2xl fab fa-linkedin hover:text-pink-600"></i></li>
          <li><i class="text-white text-2xl fab fa-instagram hover:text-pink-600"></i></li>
        </div>
      </div>
    </footer>
  )
}

export default Footer