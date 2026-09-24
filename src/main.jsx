import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import OntarysSite from './OntarysSite.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OntarysSite />
  </StrictMode>,
)
