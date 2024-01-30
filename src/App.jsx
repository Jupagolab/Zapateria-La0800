//import { useState } from 'react'
import './App.css'
import ListaZapatos from './componentes/ListaZapatos'

function App() {

  return (
    <>
      <div className='flex flex-wrap justify-center items-center my-0 mx-auto box-border shadow min-w-96 overflow-hidden w-screen min-h-[80vh]'>
        <header className='flex items-center justify-center bg-morado-500 dark:bg-morado-100 p-6 w-full h-28'>
          <a href='/' className="logo bg-morado-700 dark:bg-morado-300 rounded-xl h-9/12 py-2.5 px-5">
            <h1>Zapateria La 0800</h1>
          </a>
        </header>
        <main className='mx-auto justify-center items-center w-full h-full p-12'>
          <div>
            <h2 className='text-morado-300 dark:text-[white] my-6'>¡Bienvenido a La 0800!</h2>

          </div>
          { /*               LISTA DE ZAPATOS               */}
          <div>
            <h2 className='text-morado-300 dark:text-[white] my-6'>Lista de Zapatos</h2>
            <ListaZapatos />
          </div>

        </main>
        <footer className='flex justify-center items-center w-full p-6 bg-morado-500 dark:bg-morado-100'>
          <div className='grid grid-cols-1 gap-6'>
            <p>Forma Parte de Zapateria La 0800</p>
            <p>la0800@correoFicticio.com</p>
            <div className='mx-auto flex flex-wrap gap-9'>
              <img src="/x-twitter.png" alt="icono" className='sm:w-7 md:w-8 lg:w-8 xl:w-9 '/>
              <img src="/instagram.png" alt="icono" className='sm:w-7 md:w-8 lg:w-8 xl:w-9' />
              <img src="/facebook.png" alt="icono" className='sm:w-7 md:w-8 lg:w-8 xl:w-9' />
            </div>
            <p>&copy; 2023 Todos los derechos reservados</p>
          </div>
        </footer>

      </div>
    </>
  )
}

export default App
