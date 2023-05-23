//import React from 'react'
import reactjs from '../assets/images/reactjs.png'
import typescript from '../assets/images/typescript.png'
import tailwind from '../assets/images/tailwindcss.png'
import nodejs from '../assets/images/nodejs.png'
import express from '../assets/images/express.png'
import api from '../assets/images/api.png'
import clean from '../assets/images/clean.png'
import railway from '../assets/images/railway.svg'
import redux from '../assets/images/redux.png'
import sequelize from '../assets/images/sequelize.png'
import postgresql from '../assets/images/postgre.png'
import firebase from '../assets/images/firebase.jpg'

interface Props{
    heigth: number
    onclose: any
}

const React = ()=>{
  return(
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
    <img className="w-auto h-[1.5rem]" src={reactjs} alt="react" /> <p>React JS</p> 
    </div>    
  )
}

const Redux = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
    <img className="w-auto h-[1.5rem]" src={redux} alt="redux" /> <p>Redux</p> 
    </div> 
  )
}

const Typescript = ()=>{
  return(
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
      <img className="w-auto h-[1.5rem]" src={typescript} alt="typescript" /> <p>TypeScript</p> 
    </div>       
  )
}

const Tailwind = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
      <img className="w-auto h-[1.5rem]" src={tailwind} alt="tailwind" /> <p>Tailwind CSS</p> 
    </div>  
  )
}

const Node = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
      <img className="w-auto h-[1.5rem]" src={nodejs} alt="nodejs" /> <p>Node JS</p> 
    </div>  
  )
}

const Express = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
      <img className="w-auto h-[1.5rem]" src={express} alt="express" /> <p>Express JS</p> 
    </div>  
  )
}

const Api = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
      <img className="w-auto h-[1.5rem]" src={api} alt="API" /> <p>Rest API</p> 
    </div>
  )
}

const CleanA = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
      <img className="w-auto h-[1.5rem]" src={clean} alt="clean" /> <p>Clean Architecture</p> 
    </div>  
  )
}

const Railway = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
      <img className="w-auto h-[1.5rem]" src={railway} alt="railway" /> <p>Railway</p> 
    </div>  
  )
}

const Sequelize = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
        <img className="w-auto h-[1.5rem]" src={sequelize} alt="sequelize" /> <p>Sequelize</p> 
    </div>  
  )
}


const Postgre = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
    <img className="w-auto h-[1.5rem]" src={postgresql} alt="postgresql" /> <p>PostgreSQL</p> 
    </div>  
  )
}

const Firebase = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
        <img className="w-auto h-[1.5rem]" src={firebase} alt="firebase" /> <p>Firebase</p> 
    </div>   
  )
}

 



export const ModalTodoES = ( {heigth, onclose}: Props) => {

    const windowH = {
        top: `${Math.ceil(heigth + 40)}px`
    }
    
  return (
    <div className={`bg-gradient-to-b from-[#365852] from-10% via-[#422457] via-100%  text-slate-800 absolute w-[80%] h-[85%] left-[10%] rounded-lg border border-white flex flex-col justify-center items-center px-7 max-[1024px]:w-[90%] max-[1024px]:left-[5%] max-[1024px]:px-2 max-[1024px]:h-[90vh]`} style={windowH}>
        <button className="absolute top-0 right-0 mr-2 mt-2 max-[1024px]:px-[4px] max-[1024px]:py-[1px]" onClick={onclose}>x</button> 
        <p className="text-[25px] font-bold pb-2 text-white max-[1024px]:text-[18px] max-[1024px]:mt-5">Visual Tool for Task Tracking</p>  
   
        <ul className=' max-[1024px]:overflow-auto'>
          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989; Esta es una aplicación web <React/>. Dado que habrá mucha interacción y manipulación de `tareas`, decidí administrar un estado global usando <Redux/>. </li>

          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989;Usé el framework <Tailwind/> framework y la librería de componentes MaterialUI para crear un interfaz de usuario elegante.</li>

          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989;El backend se construyó con <Node/> usando <Typescript/> y el framework<Express/>.</li>

          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989;Se implementó un CRUD <Api/> para manejar usuarios y tareas. Utilizamos <Sequelize/> como ORM y <Postgre/> como base de datos en la nube en <Railway/>.</li>

          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989;Para manejar las responsabilidades de manera desacoplada y facilitar futuras modificaciones, decidimos utilizar<CleanA/>.</li>

          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989;Para el despliegue de front-end, estoy usando <Firebase/>.</li>

          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989;Para el despliegue de back-end, elegí <Railway/>.</li>
        </ul>
        <div className="flex flex-row pt-3 w-full justify-around items-center max-[1024px]:items-center max-[1024px]:h-[9vh] max-[1024px]:py-2">
          <a className="flex justify-center items-center w-full max-[1024px]:h-full" href="https://todoapp-pern.web.app/" target="_blank">
          <div className="bg-[#4a106b] border-4 border-[#ffffff] rounded-lg hover:bg-[#fffeff] hover:text-black cursor-pointer text-xl text-white text-center w-[50%] h-auto py-2 max-[1024px]:h-[90%] max-[1024px]:w-[90%] max-[1024px]:text-sm">
             &#128187; Ver Web &#128187;
          </div> 
          </a>
 
          <a className="flex justify-center items-center w-full max-[1024px]:h-full" href="https://github.com/nacermanuel/pern-todoapp-typescript" target="_blank">
          <div className="bg-[#4a106b] border-4 border-[#ffffff] rounded-lg hover:bg-[#fffeff] hover:text-black cursor-pointer text-xl text-white text-center w-[50%] h-auto py-2 max-[1024px]:h-[90%] max-[1024px]:w-[90%] max-[1024px]:text-sm">
             &#128373; Ver Repositorio &#128373;
          </div> 
          </a>
        </div>

    </div>
  )
}
