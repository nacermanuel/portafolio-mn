import React from "react"
import AnfisaImage from './assets/anfisa.gif';
import typescript from './assets/images/typescript.png'
import javascript from './assets/images/javascript.png'
import html from './assets/images/html.png'
import css from './assets/images/css.png'
import nodejs from './assets/images/nodejs.png'
import react from './assets/images/reactjs.png'
import redux from './assets/images/redux.png'
import nextjs from './assets/images/nextjs.png'
import express from './assets/images/express.png'
import tailwind from './assets/images/tailwindcss.png'
import mongodb from './assets/images/mongodb.png'
import mongoose from './assets/images/mongoose.png'
import postgresql from './assets/images/postgre.png'
import sequelize from './assets/images/sequelize.png'
import api from './assets/images/api.png'
import vercel from './assets/images/vercel.svg'
import git from './assets/images/git.png'
import gitflow from './assets/images/gitflow.png'
import railway from './assets/images/railway.svg'
import firebase from './assets/images/firebase.jpg'
import clean from './assets/images/clean.png'
import linkedin from './assets/images/linkedin1.jpg'
import youtube from './assets/images/youtube.png' 
import gmail from './assets/images/gmail.png'
import { Form } from "./components/Form";
import { ModelAnfisa } from "./components/ModelAnfisa";
import TodoGit from './assets/todo.gif'
import { ModalTodo } from "./components/ModalTodo";
import mn from './assets/manuel.jpg'

interface Prop{
    language: any
}


function AppEn({language}: Prop) {
  const [project1 , setProject1] = React.useState(false)
  const [project2 , setProject2] = React.useState(false)
  const [modal1, setModal1] = React.useState(false)
  const [modal2, setModal2] = React.useState(false)
  const style1 = 'flex flex-col h-auto justify-between'
  const style2 = 'hidden'


  const openModal1 = ()=> {
    setModal1(true)
    document.body.style.overflow = 'hidden' ;
  }

  const closeModal1 = () => {
    setModal1(false)
    document.body.style.overflow = 'auto' ;    
  }

  const openModal2 = ()=> {
    setModal2(true)
    document.body.style.overflow = 'hidden' ;
  }

  const closeModal2 = () => {
    setModal2(false)
    document.body.style.overflow = 'auto' ;    
  } 

  const windowH = window.scrollY

  const divBackground = {
    top: `${Math.ceil(windowH)}px`
  }


  return (
    <>
    
    <div id="divApp1" className="flex flex-col justify-center items-center pt-20">

      {/* SECCION 1 */}
      <div id="divSec1" className="w-[100%] flex flex-row justify-between items-center pb-8 max-[1024px]:mx-4 max-[1024px]:justify-evenly">
        <div className="flex flex-row gap-2 ">
          <div className={`w-[50px] h-[50px] rounded-full bg-cover bg-no-repeat bg-center`} style={{ backgroundImage: `url(${mn})` }}></div>

          <p className="text-[30px] font-bold max-[1024px]:text-[25px]">Manuel Nácer</p> 
        </div>
        <div className="flex gap-2 max-[1024px]:flex-col-reverse">
          <div className="border border-white rounded-lg h-fit px-3 hover:bg-[#302b46] cursor-pointer ">
            <a href="https://drive.google.com/file/d/1mOiVR1jir5DTfTZgXs8jjTq2SWYzGxxX/view?usp=sharing" target="_blank">
              <p className="text-white font-thin">Resume &#128196;</p> 
            </a>
          </div>
          <div className="border border-white rounded-lg h-fit px-3 hover:bg-[#302b46] cursor-pointer" onClick={()=> language()}>
            { <p className="text-white font-thin text-center">Español&#128257;</p> }
          </div>
        </div>
      </div>

      {/* SECCION 2 */}
      <div id="divSec2" className="bg-[#302b46] w-full rounded-lg py-4 px-12 font-semibold text-center hover:bg-[#574e80] cursor-none max-[1024px]:w-[95%] max-[1024px]:px-2">
        Hello, I'm Manuel, a full-stack web developer. I've acquired  my skills through a rigorous bootcamp called SoyHenry and extensive self-study, but my true expertise has come from building my own projects. My passion lies in leveraging technology as a problem solver, and my goal is to work on projects that align with this vision.
        <br />
        <br />
         In addition to my technical skills, I have held leading roles in the operation of businesses with annual revenue surpassing USD$100,000. This hands-on experience has given me a deep understanding of commercial strategies, expertise in running complex Facebook ads campaigns, and a comprehensive grasp of financial structures within businesses. I leverage my tech skills and business expertise to bring value to the table. 
      </div>

      {/* SECCION 3 */}

      <div id="divSec3" className="pt-12 flex flex-col w-full max-[1024px]:w-[95%]">
        <p className="text-[25px] font-bold pb-6">Projects &#128188;</p>
        <div id="divSec3Proyectos" className="flex flex-row w-full gap-4 justify-around items-center max-[1024px]:flex-col">

          {/* PROYECTO ANFISA */}
          <div id="divSec3ProyectosAnfisa" className=" bg-[#302b46] min-w-[25rem] w-[45%] min-h-[19rem] h-auto rounded-lg py-4 px-12 font-semibold text-center hover:bg-[#574e80] max-[1024px]:w-[100%] max-[1024px]:min-w-[20rem] max-[1024px]:px-2 max-[1024px]:mb-4" onMouseEnter={()=>setProject1(true)} onMouseLeave={()=>setProject1(false)}>
            <p className="text-[25px] font-bold pb-2">Sales Tool for B2B Business</p>
            <div className={`${ project1 ? style2 : style1} max-[1024px]:h-auto max-[1024px]:pb-4 max-[1024px]:flex max-[1024px]:flex-col`}>
              <img className="rounded-md" src={AnfisaImage} alt="anfisa web" />
            </div>
            <div className={`${ project1 ? style1 : style2} max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:h-auto`}>
              <p className="text-[17px] font-normal max-[1024px]:pb-4">Anfisa is a B2B cosmetics shop. They grew the business to 80 orders per month just by using WhatsApp as a sales tool. When they reached 110 sales per month, the number of messages became unmanageable. Therefore, we built this tool where customers can place orders themselves and complete the purchase via WhatsApp using a shareable link of their order.</p>
              <div className="bg-[#4a106b] border-4 border-[#ffffff] rounded-lg h-fit px-3 hover:bg-[#fffeff] hover:text-black cursor-pointer text-xl" onClick={()=> openModal1()}>
                More 
              </div>   
            </div>
          </div>

          {/* PROYECTO TASK TRACKER */}
          <div id="divSec3ProyectosTodo" className="bg-[#302b46] min-w-[25rem] w-[45%] min-h-[19rem] h-auto rounded-lg py-4 px-12 font-semibold text-center hover:bg-[#574e80] max-[1024px]:w-[100%] max-[1024px]:min-w-[20rem] max-[1024px]:px-2" onMouseEnter={()=>setProject2(true)} onMouseLeave={()=>setProject2(false)}>
            <p className="text-[25px] font-bold pb-2">Visual Tool for Task Tracking</p>
            <div className={`${ project2 ? style2 : style1}  max-[1024px]:h-auto max-[1024px]:pb-4 max-[1024px]:flex max-[1024px]:flex-col`}>
              <img className="rounded-md" src={TodoGit} alt="todo app gif" />
            </div>            
            <div className={`${ project2 ? style1 : style2} max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:h-auto`}>
              <p className="text-[17px] font-normal max-[1024px]:pb-4">As a software developer, I have learned that one of the most fundamental aspects when building complex products is how to organize the workflow. Many times, I have started projects but didn't finish them due to a lack of organization. That's why I built a tool to structure the workflow when developing any project.</p>
              <div className="bg-[#4a106b] border-4 border-[#ffffff] rounded-lg h-fit px-3 hover:bg-[#fffeff] hover:text-black cursor-pointer text-xl" onClick={()=> openModal2()}>
                More 
              </div>   
            </div>

          </div>
          
        </div>
      </div>

      {/* SECCION 4 */}
      <div id="divSec4" className="pt-12 flex flex-col w-full max-[1024px]:w-[95%]">
        <p className="text-[25px] font-bold pb-6">Technologies &#128104;&#8205;&#128187;</p>

        <div className="flex flex-row gap-3 pb-3 max-[1024px]:flex-wrap">

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={typescript} alt="typescript" /> <p>TypeScript</p> 
          </div>   

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={javascript} alt="javascript" /> <p>JavaScript</p> 
          </div>  

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={html} alt="html" /> <p>HTML</p> 
          </div>  

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={css} alt="CSS" /> <p>CSS</p> 
          </div>  

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={tailwind} alt="tailwind" /> <p>Tailwind CSS</p> 
          </div>  

        </div>

        <div className="flex flex-row gap-3 pb-3 max-[1024px]:flex-wrap">

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={nodejs} alt="nodejs" /> <p>Node JS</p> 
          </div>  

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={react} alt="react" /> <p>React JS</p> 
          </div>   

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={redux} alt="redux" /> <p>Redux</p> 
          </div>  

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={nextjs} alt="nextjs" /> <p>Next JS</p> 
          </div>  

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={express} alt="express" /> <p>Express JS</p> 
          </div>  

        </div>   

        <div className="flex flex-row gap-3 pb-3 max-[1024px]:flex-wrap">

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={api} alt="API" /> <p>Rest API</p> 
          </div>

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={mongodb} alt="mongodb" /> <p>MongoDB</p> 
          </div>  

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="bg-white w-auto h-[1.5rem]" src={mongoose} alt="mongoose" /> <p>Mongoose</p> 
          </div>   

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={postgresql} alt="postgresql" /> <p>PostgreSQL</p> 
          </div>  

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={sequelize} alt="sequelize" /> <p>Sequelize</p> 
          </div>  

        </div>         

      </div>

      {/* SECCION 5 */}
      <div id="divSec5" className="pt-2 flex flex-col w-full max-[1024px]:w-[95%]">
        <p className="text-[25px] font-bold pb-6">Others</p>

        <div className="flex flex-row gap-3 pb-3 max-[1024px]:flex-wrap">

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={git} alt="git" /> <p>Git</p> 
          </div>   

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={gitflow} alt="gitflow" /> <p>Git Flow</p> 
          </div>  

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={railway} alt="railway" /> <p>Railway</p> 
          </div>  

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={vercel} alt="vercel" /> <p>Vercel</p> 
          </div>  

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={firebase} alt="firebase" /> <p>Firebase</p> 
          </div>  

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={clean} alt="clean" /> <p>Clean Architecture</p> 
          </div>  

        </div>
 
      </div>

      {/* SECCION 6 */}
      <div id="divSec6" className="pt-12 flex flex-col w-full max-[1024px]:w-[95%]">
        <p className="text-[25px] font-bold pb-6">Contact &#128236;</p>
        <div className="flex flex-row gap-3 pb-3 max-[1024px]:flex-col">
          <div className="w-[50%] max-[1024px]:w-[100%]">
            <p className="pb-3">Let's build something! Contact me:</p>

            <div className="flex flex-col justify-center items-start gap-3">

                <a className="flex flex-row justify-center items-center gap-3  " href="https://github.com/nacermanuel" target="_blank">
                  <img className="w-auto h-[2.5rem] rounded-full" src={gitflow} alt="git" />
                  <p>https://github.com/nacermanuel</p>
                </a>

                <a className="flex flex-row justify-center items-center gap-3  " href="https://www.linkedin.com/in/mfnacer/" target="_blank">
                  <img className="w-auto h-[2.5rem] rounded-lg" src={linkedin} alt="linkedin" />
                  <p>https://www.linkedin.com/in/mfnacer/</p>
                </a>

                <a className="flex flex-row justify-center items-center gap-3  " href="https://youtube.com/@bootcamp3rs" target="_blank">
                  <img className="w-auto h-[2rem]" src={youtube} alt="youtube" />
                  <p>https://youtube.com/@bootcamp3rs</p>
                </a>

                <a className="flex flex-row justify-center items-center gap-3  " href="mailto:nacermanuel@gmail.com" target="_blank">
                  <img className="w-auto h-[2rem]" src={gmail} alt="git" />
                  <p>nacermanuel@gmail.com</p>
                </a>

            </div>
          </div>

          <div className="w-[50%] max-[1024px]:w-[100%]">
            <Form/>
          </div>

        </div>
      </div>
      
    </div>
    { modal1 && <div className="w-[100%] h-[120vh] left-0 bg-black absolute opacity-70" style={divBackground}></div> }
    { modal1 && <ModelAnfisa heigth={windowH} onclose={()=> closeModal1() }/>}

    { modal2 && <div className="w-[100%] h-[120vh] left-0 bg-black absolute opacity-70" style={divBackground}></div> }
    { modal2 && <ModalTodo heigth={windowH} onclose={()=> closeModal2() }/>}

    </>
  )
}

export default AppEn
