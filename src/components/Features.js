import React from 'react'
import ilustration1 from '../imgs/illustration-features-tab-1.png'
import ilustration2 from '../imgs/illustration-features-tab-2.png'
import ilustration3 from '../imgs/illustration-features-tab-3.png'

const Features = () => {
  return (
    <section className="bg-bookmark-white py-20 mt-20 lg:mt-60">
    <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
      <h1 className="text-3xl text-center text-bookmark-blue font-bold">Características</h1>
      <p className="text-center text-bookmark-grey mt-4 font">
        <ul>
            <li>Controla diferentes tipos de tareas y contenidos</li>
            <li>Trabaja con listados y tablas para optimizar tiempo</li>
            <li>Integración con aplicaciones de trabajo colaborativo</li>
            <li>Permite tener el foco en la actividad que quieras priorizar</li>
        </ul>
        <hr className='mt-7'/>
      </p>
    </div>
    <div className="relative mt-20 lg:mt-24">
      <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
          <img
            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src={ilustration1}
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h1 className="text-3xl text-bookmark-blue font-semibold"><span className='text-5xl'>1 </span>Toma nota</h1>
          <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
          Capture notas rápidamente y organícelas como desee, sin importar dónde se encuentre. Notion lo recuerda todo para
           que tú no tengas que hacerlo.
          </p>
          <p className="text-bookmark-grey text-center lg:text-left sm:w-3/4 lg:w-full mb-2">Ya sea que se trate de tareas pendientes, un recordatorio o su próxima gran idea, Notion facilita agregar y 
            encontrar más adelante.</p>
          <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black">Mas informacion</button>
        </div>
      </div>
      <div
        className="
          hidden
          lg:block
          overflow-hidden
          bg-bookmark-purple
          rounded-r-full
          absolute
          h-80
          w-2/4
          -bottom-24
          -left-36
        "
      ></div>
    </div>
    <div className="relative mt-20 lg:mt-52">
      <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
          <img
            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src={ilustration3}
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col items-center lg:items-start">
        <h1 className="text-3xl text-bookmark-blue font-semibold"><span className='text-5xl'>2 </span>Organizarse</h1>
          <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
          Su presupuesto, recetas, artículos para leer: en lugar de usar varias aplicaciones para recopilar esta información, manténgalo todo en un solo lugar.
          </p>
          <p className="text-bookmark-grey py-1 text-center lg:text-left sm:w-3/4 lg:w-full">
          En Notion, puede crear una base de operaciones para las muchas cosas que suceden en su vida y construirla para que coincida con la forma en que funciona su cerebro.
          </p>
          <h3 className='font-semibold text-3xl my-2 text-center pb-6 lg:text-left'>La activista de derechos humanos Amira mantiene muchos platos girando</h3>
        </div>
      </div>
      <div
        className="
          hidden
          lg:block
          overflow-hidden
          bg-bookmark-purple
          rounded-l-full
          absolute
          h-80
          w-2/4
          -bottom-24
          -right-36
        "
      ></div>
    </div>
    <div className="relative mt-20 lg:mt-52">
      <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
          <img
            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src={ilustration2}
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col items-center lg:items-start">
        <h1 className="text-3xl text-bookmark-blue font-semibold"><span className='text-5xl'>3 </span>Seguimiento de tareas</h1>
          <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
          Administrar cualquier proyecto, desde solicitudes de trabajo hasta una lista de tareas, es un acto de malabarismo. En Notion, puede obtener una vista completa de lo que debe hacerse
           para que no se pierda ninguna pelota.
          </p>
          <h3 className='text-bookmark-blue font-semibold text-3xl my-2 text-center pb-6 lg:text-left'>El escritor independiente Swapna lleva la cuenta
            en todas sus tareas</h3>
          <p className="text-bookmark-grey text-center lg:text-left sm:w-3/4 lg:w-full">
          Swapna, escritora espacial y científica, suele trabajar en varias piezas a la vez, cada semana. Con Notion,
           puede crear listas detalladas de tareas pendientes para todos los proyectos mientras realiza un seguimiento del estado de cada uno a través de su proceso.
          </p>
          <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black mt-4">Mas Informacion</button>
        </div>
      </div>
      <div
        className="
          hidden
          lg:block
          overflow-hidden
          bg-bookmark-purple
          rounded-r-full
          absolute
          h-80
          w-2/4
          -bottom-24
          -left-36
        "
      ></div>
    </div>
    <div className="relative mt-20 lg:mt-52">
      <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
          <img
            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src={ilustration3}
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col items-center lg:items-start">
        <h1 className="text-3xl text-bookmark-blue font-semibold"><span className='text-5xl'>4 </span>Empieza a escribir</h1>
          <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
          Simplemente comienza a escribir Notion y todo lo demás se desvanece. Lo hemos diseñado para ayudarlo a concentrarse en la tarea que tiene entre manos.
          </p>
          <p className="text-bookmark-grey py-1 text-center lg:text-left sm:w-3/4 lg:w-full">
          La experiencia de escritura de Notion es tan simple o sofisticada como lo necesite: es un hogar para pensar sin distracciones donde puede organizar sus pensamientos con la facilidad de arrastrar y soltar.
          </p>
        </div>
      </div>
      <div
        className="
          hidden
          lg:block
          overflow-hidden
          bg-bookmark-purple
          rounded-l-full
          absolute
          h-80
          w-2/4
          -bottom-24
          -right-36
        "
      ></div>
    </div>
  </section>
  )
}

export default Features