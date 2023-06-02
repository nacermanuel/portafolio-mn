import React from 'react'
import ReactDOM from 'react-dom/client'
import { Container } from './components/Container.tsx'
import App from './App.tsx'
import './main.css'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Container>
        <App />
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
)
