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
        <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2">
        <img className="w-auto h-[1.5rem]" src={reactjs} alt="react" /> <p>React JS</p> 
        </div>    
  )
}

const Redux = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2">
    <img className="w-auto h-[1.5rem]" src={redux} alt="redux" /> <p>Redux</p> 
    </div> 
  )
}

const Typescript = ()=>{
  return(
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2">
      <img className="w-auto h-[1.5rem]" src={typescript} alt="typescript" /> <p>TypeScript</p> 
    </div>       
  )
}

const Tailwind = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2">
      <img className="w-auto h-[1.5rem]" src={tailwind} alt="tailwind" /> <p>Tailwind CSS</p> 
    </div>  
  )
}

const Node = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2">
      <img className="w-auto h-[1.5rem]" src={nodejs} alt="nodejs" /> <p>Node JS</p> 
    </div>  
  )
}

const Express = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2">
      <img className="w-auto h-[1.5rem]" src={express} alt="express" /> <p>Express JS</p> 
    </div>  
  )
}

const Api = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2">
      <img className="w-auto h-[1.5rem]" src={api} alt="API" /> <p>Rest API</p> 
    </div>
  )
}

const CleanA = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2">
      <img className="w-auto h-[1.5rem]" src={clean} alt="clean" /> <p>Clean Architecture</p> 
    </div>  
  )
}

const Railway = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2">
      <img className="w-auto h-[1.5rem]" src={railway} alt="railway" /> <p>Railway</p> 
    </div>  
  )
}

const Sequelize = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2">
        <img className="w-auto h-[1.5rem]" src={sequelize} alt="sequelize" /> <p>Sequelize</p> 
    </div>  
  )
}


const Postgre = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2">
    <img className="w-auto h-[1.5rem]" src={postgresql} alt="postgresql" /> <p>PostgreSQL</p> 
    </div>  
  )
}

const Firebase = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2">
        <img className="w-auto h-[1.5rem]" src={firebase} alt="firebase" /> <p>Firebase</p> 
    </div>   
  )
}

 



export const ModalTodo = ( {heigth, onclose}: Props) => {

    const windowH = {
        top: `${Math.ceil(heigth + 40)}px`
    }
    
  return (
    <div className={`bg-gradient-to-b from-[#365852] from-10% via-[#422457] via-100%  text-slate-800 absolute w-[80%] h-[85%] left-[10%] rounded-lg border border-white flex flex-col justify-center items-center px-7`} style={windowH}>
        <button className="absolute top-0 right-0 mr-2 mt-2" onClick={onclose}>x</button> 
        <p className="text-[25px] font-bold pb-2 text-white">Visual Tool for Task Tracking</p>  
   
        <ul>
          <li className="font-semibold text-start text-white py-2">&#9989; This is <React/> web application. Since, there will be a lot of interaction and manipulation of `tasks` I decided to manage a global state using <Redux/>. </li>

          <li className="font-semibold text-start text-white py-2">&#9989;I used the <Tailwind/> framework and the MaterialUI components library to create a elegant UI.</li>

          <li className="font-semibold text-start text-white py-2">&#9989;The backend was built with <Node/> using <Typescript/> and the <Express/> framework.</li>

          <li className="font-semibold text-start text-white py-2">&#9989;A CRUD <Api/> was implemented to manage users and tasks. I utilized <Sequelize/> as the ORM and <Postgre/> cloud-based database provided by <Railway/>.</li>

          <li className="font-semibold text-start text-white py-2">&#9989;To handle responsibilities in a decoupled manner and facilitate easy modifications, I adopted a <CleanA/>.</li>

          <li className="font-semibold text-start text-white py-2">&#9989;For frontend deployment, I am using <Firebase/>.</li>

          <li className="font-semibold text-start text-white py-2">&#9989;For backend deployment, I have opted for <Railway/>.</li>
        </ul>
        <div className="flex flex-row pt-3 w-full justify-around items-center">
          <a className="flex justify-center items-center w-full" href="https://todoapp-pern.web.app/" target="_blank">
          <div className="bg-[#4a106b] border-4 border-[#ffffff] rounded-lg hover:bg-[#fffeff] hover:text-black cursor-pointer text-xl text-white text-center w-[50%] h-auto py-2">
             &#128187; Web Site &#128187;
          </div> 
          </a>
 
          <a className="flex justify-center items-center w-full" href="https://github.com/nacermanuel/pern-todoapp-typescript" target="_blank">
          <div className="bg-[#4a106b] border-4 border-[#ffffff] rounded-lg hover:bg-[#fffeff] hover:text-black cursor-pointer text-xl text-white text-center w-[50%] h-auto py-2">
             &#128373; Source Code &#128373;
          </div> 
          </a>
        </div>

    </div>
  )
}