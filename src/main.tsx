import React from 'react'
import ReactDOM from 'react-dom/client'
import { Container } from './components/Container.tsx'
import { App } from './App.tsx'
import './main.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>,
)
