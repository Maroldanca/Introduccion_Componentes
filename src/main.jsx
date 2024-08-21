import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Contenido from './Contenido'
import Input from './Input'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header className='encabezado'>
      <section className='logotipo'></section>
      <nav className='menu'>
        <a href="Enlace"></a>
        <a href="Enlace"></a>
        <a href="Enlace"></a>
        <a href="Enlace"></a>
        <a href="Enlace"></a>
      </nav>
    </header>
    <div>
      <main>
        <h1>Galeria de imagenes</h1>
        <div>
          <img src="" alt="img" />
          <img src="" alt="img" />
          <img src="" alt="img" />
          <img src="" alt="img" />
          <img src="" alt="img" />
          <img src="" alt="img" />
          <img src="" alt="img" />
          <img src="" alt="img" />
          <img src="" alt="img" />
        </div>
      </main>
      <div>
        <section>
          <h2>Titulo de contenido</h2>
        </section>
        <section>
          <h2>Titulo de contenido</h2>
        </section>
      </div>
    </div>
  </StrictMode>,
)
