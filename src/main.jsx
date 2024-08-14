import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Contenido from './Contenido'
import Input from './Input'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contenido />
    <Input />
  </StrictMode>,
)
