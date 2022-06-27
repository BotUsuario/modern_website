import React from 'react'

const Contact = () => {
  return (
<section class="bg-gray-100">
  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div class="lg:py-12 lg:col-span-2">
        <p class="max-w-xl text-2xl">
        Cualquier sugerencia o queja puedes comunicarla a través de este formulario, te agradecemos cualquier tipo de crítica constructiva que nos puedas brindar.
        </p>

        <div class="mt-8">
          <a href="" class="text-2xl font-bold text-pink-600"> 1234 5678 9123</a>

          <address class="mt-2 not-italic">Alonso de Córdova 4355, Piso 15, Vitacura, Región Metropolitana</address>
        </div>
      </div>

      <div class="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
        <form action="" class="space-y-4">
          <div>
            <label class="sr-only" for="name">Nombre</label>
            <input class="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Nombre" type="text" id="name" />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="Correo"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="Numero de Telefono"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              <input class="sr-only " id="option1" type="radio" tabindex="-1" />
              <label for="option1" class="block w-full p-3 border border-gray-200 rounded-lg hover:bg-indigo-600 hover:text-white" tabindex="0">
                <span class="text-sm font-medium "> Sugerencia </span>
              </label>
            </div>

            <div>
              <input class="sr-only" id="option2" type="radio" tabindex="-1" />
              <label for="option2" class="block w-full p-3 border border-gray-200 rounded-lg hover:bg-indigo-600 hover:text-white" tabindex="0">
                <span class="text-sm font-medium"> Critica </span>
              </label>
            </div>

            <div>
              <input class="sr-only" id="option3" type="radio" tabindex="-1" />
              <label for="option3" class="block w-full p-3 border border-gray-200 rounded-lg hover:bg-indigo-600 hover:text-white" tabindex="0">
                <span class="text-sm font-medium"> Bug </span>
              </label>
            </div>
          </div>

          <div>
            <label class="sr-only" for="message">Message</label>
            <textarea
              class="w-full p-3 text-sm border-gray-200 rounded-lg"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div class="mt-4">
            <button
              type="submit"
              class="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto hover:bg-pink-600 ease-in-out duration-300"
            >
              <span class="font-medium"> Enviar </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
  )
}

export default Contact