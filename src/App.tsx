
import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Mock } from './mock/Mock'


export default function App() {
  return (
    <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/mock' element={ <Mock/>}/>
    </Routes>
  )
}