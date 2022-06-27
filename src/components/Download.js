import React from 'react'
import chrome from '../imgs/logo-chrome.svg'
import firebox from '../imgs/logo-firefox.svg'
import opera from '../imgs/logo-opera.svg'

const Download = () => {
  return (
    <section className="py-20 mt-20">
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 className="text-3xl text-center text-bookmark-blue">Descargar extension</h1>
        <p className="text-center text-bookmark-grey mt-4">
          Aqui podras usar la extension Bookmark para poder ornizarte desde cualquier navegador
          sin si quiera descargar el programa.
        </p>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
        <div className="flex flex-col rounded-md shadow-md lg:mb-16">
          <div className="p-6 flex flex-col items-center">
            <img src={chrome} alt="Logo Chrome" />
            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg font-bold">Add to Chrome</h3>
          </div>
          <hr className="border-b border-bookmark-white" />
          <div className="flex p-6">
            <button type="button" className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black">
              Add & Install Extension
            </button>
          </div>
        </div>
        <div className="flex flex-col rounded-md shadow-md lg:my-8">
          <div className="p-6 flex flex-col items-center">
            <img src={firebox} alt="Logo Firebox" />
            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg font-bold">Add to Firefox</h3>
          </div>
          <hr className="border-b border-bookmark-white" />
          <div className="flex p-6">
            <button type="button" className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black">
              Add & Install Extension
            </button>
          </div>
        </div>
        <div className="flex flex-col rounded-md shadow-md lg:mt-16">
          <div className="p-6 flex flex-col items-center">
            <img src={opera} alt="Logo Opera" />
            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg font-bold">Add to Opera</h3>
          </div>
          <hr className="border-b border-bookmark-white" />
          <div className="flex p-6">
            <button type="button" className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black">
              Add & Install Extension
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download