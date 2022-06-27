import React from 'react'
import hero from '../imgs/hero-bg.png'

const Hero = () => {
  return (
    <section className="relative">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="text-bookmark-blue text-3xl md:text-4 font-bold lg:text-5xl text-center lg:text-left mb-6">
            Notas para todos
          </h2>
          <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
            Vea como funciona nuestra aplicacion de notas, con una interfaz limpia y sencilla, para poder 
            oganizarte de una maanera mas optima a travez del navegador
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <button type="button" className="btn btn-purple font-semibold hover:bg-bookmark-white hover:text-black">
              Consiguelo en Chrome
            </button>
            <button type="button" className="btn btn-white font-semibold hover:bg-bookmark-purple hover:text-white">
              Consiguelo en Firebox
            </button>
          </div>
        </div>
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={hero} alt="hero logo" />
        </div>
      </div>
      <div
        className="
          hidden
          md:block
          overflow-hidden
          bg-bookmark-purple
          rounded-l-full
          absolute
          h-80
          w-2/4
          top-32
          right-0
          lg:
          -bottom-28
          lg:-right-36
        "
      ></div>
    </section>
  )
}

export default Hero