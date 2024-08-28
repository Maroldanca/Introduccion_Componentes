import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Encabezado from './Encabezado'
import Contenido from './Contenido'
import './index.css'
import Home from './pages/home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Encabezado />
    <div className='contenido'>
      <Contenido />
      <section>
        <article>
          <h2>Titulo de contenido</h2>
        </article>
        <article>
          <h2>Titulo de contenido</h2>
        </article>
      </section>
    </div>
  </StrictMode>,
)
