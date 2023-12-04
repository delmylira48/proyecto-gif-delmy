import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProyectoGif } from './ProyectoGif.jsx'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // prueba si hay problemas potenciales en el desarrollo
  <React.StrictMode>
    {/* se renderiza el componente*/}
    <ProyectoGif />
  </React.StrictMode>,
)
