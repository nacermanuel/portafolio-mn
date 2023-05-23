//import React from 'react'
import nextjs from '../assets/images/nextjs.png'
import typescript from '../assets/images/typescript.png'
import tailwind from '../assets/images/tailwindcss.png'
import nodejs from '../assets/images/nodejs.png'
import express from '../assets/images/express.png'
import api from '../assets/images/api.png'
import mongoose from '../assets/images/mongoose.png'
import mongodb from '../assets/images/mongodb.png'
import clean from '../assets/images/clean.png'
import vercel from '../assets/images/vercel.svg'
import railway from '../assets/images/railway.svg'


interface Props{
    heigth: number
    onclose: any
}

const NextJS = ()=>{
  return(
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] gap-2 inline-flex max-[1024px]:scale-[0.8]">
      <img className="w-auto h-[1.5rem]" src={nextjs} alt="nextjs" /> <p>Next JS</p> 
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

const Mongoose = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
      <img className="bg-white w-auto h-[1.5rem]" src={mongoose} alt="mongoose" /> <p>Mongoose</p> 
    </div>  
  )
}

const Mongo = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
      <img className="w-auto h-[1.5rem]" src={mongodb} alt="mongodb" /> <p>MongoDB</p> 
    </div>   
  )
}

const CleanA = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
      <img className="w-auto h-[1.5rem]" src={clean} alt="clean" /><p>Clean Architecture</p> 
    </div>  
  )
}

const Vercel = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
      <img className="w-auto h-[1.5rem]" src={vercel} alt="vercel" /> <p>Vercel</p> 
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

export const ModelAnfisaES = ( {heigth, onclose}: Props) => {

    const windowH = {
        top: `${Math.ceil(heigth + 40)}px`
    }
    
  return (
    <div id='divModalAnfisa' className={`bg-gradient-to-b from-[#365852] from-10% via-[#422457] via-100%  text-slate-800 absolute w-[80%] h-[85%] left-[10%] rounded-lg border border-white flex flex-col justify-center items-center px-7 max-[1024px]:w-[90%] max-[1024px]:left-[5%] max-[1024px]:px-2 max-[1024px]:h-[90vh]`} style={windowH}>
        <button className="absolute top-0 right-0 mr-2 mt-2 max-[1024px]:px-[4px] max-[1024px]:py-[1px] " onClick={onclose}>x</button> 
        <p className="text-[25px] font-bold pb-2 text-white max-[1024px]:text-[18px] max-[1024px]:mt-5">Anfisa - B2B cosmetics shop</p>  
   
        <ul className=' max-[1024px]:overflow-auto'>
          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989;Esta es una aplicación web <NextJS/> desarrollada con <Typescript/>. Al ser un catálogo multi-marca y multi-producto, Next.js permite crear una combinación de componentes SSR y CSR, lo que da una indexación optimizada en motores de búsqueda.</li>

          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989;Usamos el framework <Tailwind/> y la librería de componentes daisyUI para crear un excelente interfaz de usuario.</li>

          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989;El back-end se construyó con <Node/> usando <Typescript/> y el framework<Express/>.</li>

          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989;Se implementó un CRUD <Api/> para manejar productos, marcas y categorías. Utilizamos <Mongoose/> como ORM y <Mongo/>Atlas como base de datos en la nube.</li>

          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989;Para manejar las responsabilidades de manera desacoplada y facilitar futuras modificaciones, decidí utilizar<CleanA/>.</li>

          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989;Para el despliegue de front-end, estamos usando <Vercel/>.</li>

          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989;Para el despliegue de back-end, hemos elegido <Railway/>.</li>
        </ul>
        <div id='divBotones' className="flex flex-row pt-3 w-full justify-around items-center max-[1024px]:items-center max-[1024px]:h-[9vh] max-[1024px]:py-2">
          <a className="flex justify-center items-center w-full max-[1024px]:h-full" href="https://anfisa.vercel.app/" target="_blank">
          <div className="bg-[#4a106b] border-4 border-[#ffffff] rounded-lg hover:bg-[#fffeff] hover:text-black cursor-pointer text-xl text-white text-center w-[50%] h-auto py-2 max-[1024px]:h-[90%] max-[1024px]:w-[90%] max-[1024px]:text-sm">
             &#128187; Ver Web &#128187;
          </div> 
          </a>
 
          <a className="flex justify-center items-center w-full max-[1024px]:h-full" href="https://github.com/LuisAlomia/anfisa" target="_blank">
          <div className="bg-[#4a106b] border-4 border-[#ffffff] rounded-lg hover:bg-[#fffeff] hover:text-black cursor-pointer text-xl text-white text-center w-[50%] h-auto py-2 max-[1024px]:h-[90%] max-[1024px]:w-[90%] max-[1024px]:text-sm">
             &#128373; Ver Repositorio &#128373;
          </div> 
          </a>
        </div>

    </div>
  )
}
