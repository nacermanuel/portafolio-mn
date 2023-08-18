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
import wordpress from './assets/images/wordpress.png'
import figma from './assets/images/figma.png'
import shopify from './assets/images/shopify.png'
import TodoGit from './assets/todo.gif'
import drrosy from './assets/images/drrosy.gif'
import upwork from './assets/images/upwork.png'
import desenio from './assets/images/desenio.gif'
import elementor from './assets/images/elementor.png'
import seo from './assets/images/seo.png'
import { FormES } from "./componentsES/FormES";
import { ModelAnfisaES } from "./componentsES/ModelAnfisaES";
import { ModalTodoES } from "./componentsES/ModalTodoES";
import mn from './assets/manuel.jpg'
import { ModalDrrosyES } from "./componentsES/ModalDrrosyES";

interface Prop{
    language: any
}

function AppEs({language}: Prop) {
  const [project1 , setProject1] = React.useState(false)
  const [project2 , setProject2] = React.useState(false)
  const [project3 , setProject3] = React.useState(false)
  const [project4 , setProject4] = React.useState(false)    
  const [modal1, setModal1] = React.useState(false)
  const [modal2, setModal2] = React.useState(false)
  const [modal3, setModal3] = React.useState(false)
  const [modal4, setModal4] = React.useState(false)


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

  const openModal3 = ()=> {
    setModal3(true)
    document.body.style.overflow = 'hidden' ;
  }

  const closeModal3 = () => {
    setModal3(false)
    document.body.style.overflow = 'auto' ;    
  } 

  const openModal4 = ()=> {
    setModal4(true)
    document.body.style.overflow = 'hidden' ;
  }

  const closeModal4 = () => {
    setModal4(false)
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
            <a href="https://drive.google.com/file/d/1wdIphjb8smivPWg1W7oWOFpm_hBEDLEk/view?usp=sharing" target="_blank">
              <p className="text-white font-thin">Curriculum &#128196;</p> 
            </a>
          </div>
          <div className="border border-white rounded-lg h-fit px-3 hover:bg-[#302b46] cursor-pointer" onClick={()=> language()}>
            { <p className="text-white font-thin text-center">English&#128257;</p> }
          </div>
        </div>
      </div>

      {/* SECCION 2 */}
      <div id="divSec2" className="bg-[#302b46] w-full rounded-lg py-4 px-12 font-semibold text-center hover:bg-[#574e80] max-[1024px]:w-[95%] max-[1024px]:px-2">
        Hola, soy Manuel, desarrollador web full-stack. Adquirí mis habilidades a través de un riguroso bootcamp llamado SoyHenry y mucho estudio autodidacta. Pero la verdadera experiencia la gané construyendo mis propios proyectos. Me apasiona la idea de utilizar la tecnología para resolver problemas, y mi objetivo es trabajar en proyectos que alineen a esta visión.
        <br />
        <br />
        Además de mis habilidades técnicas, he ocupado roles de liderazgo en la operación de negocios con ingresos anuales que superan los USD$100,000. Esta experiencia práctica me ha brindado una comprensión profunda de estrategias comerciales, experiencia en la ejecución de campañas publicitarias complejas de Facebook y una comprensión integral de las estructuras financieras dentro de las empresas. Apalanco mis habilidades tecnológicas y mi experiencia de negocios para agregar valor.
      </div>

      {/* SECCION 3 */}

      <div id="divSec3" className="pt-12 flex flex-col gap-6 w-full max-[1024px]:w-[95%]">
        <p className="text-[25px] font-bold pb-6">Proyectos 2023 &#128188;</p>
        <div id="divSec3Proyectos" className="flex flex-row w-full gap-4 justify-around items-center max-[1024px]:flex-col">

          {/* PROYECTO ANFISA */}
          <div id="divSec3ProyectosAnfisa" className="bg-[#302b46] min-w-[25rem] w-[45%] min-h-[19rem] h-auto rounded-lg py-4 px-12 font-semibold text-center hover:bg-[#574e80] max-[1024px]:w-[100%] max-[1024px]:min-w-[20rem] max-[1024px]:px-2 max-[1024px]:mb-4" onMouseEnter={()=>setProject1(true)} onMouseLeave={()=>setProject1(false)}>
            <p className="text-[19px] font-bold pb-2">Web App: Catálogo de Ventas</p>
            <div className={`${ project1 ? 'hidden' : 'flex flex-col h-auto justify-between'} max-[1024px]:h-auto max-[1024px]:pb-4 max-[1024px]:flex max-[1024px]:flex-col`}>
              <img className="rounded-md" src={AnfisaImage} alt="anfisa web" />
            </div>
            <div className={`${ project1 ? 'flex flex-col h-auto justify-between' : 'hidden'} max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:h-auto`}>
              <p className="text-[17px] font-normal pb-4 max-[1024px]:pb-4">Anfisa es una tienda de cosmética B2B. Crecieron el negocio a 80 pedidos por mes usando  WhatsApp como herramienta de ventas. Cuando llegaron a las 110 ventas por mes, la cantidad de mensajes se volvió inmanejable. Por lo tanto, creamos esta herramienta en la que los clientes pueden realizar pedidos por sí mismos y completar la compra a través de WhatsApp utilizando un enlace para compartir de su pedido.</p>
              <div className="bg-[#4a106b] border-4 border-[#ffffff] rounded-lg h-fit px-3 hover:bg-[#fffeff] hover:text-black cursor-pointer text-xl" onClick={()=> openModal1()}>
                Ver cómo lo desarrollé 
              </div>   
            </div>
          </div>

          {/* PROYECTO TASK TRACKER */}
          <div id="divSec3ProyectosTodo" className="bg-[#302b46] min-w-[25rem] w-[45%] min-h-[19rem] h-auto rounded-lg py-4 px-12 font-semibold text-center hover:bg-[#574e80] max-[1024px]:w-[100%] max-[1024px]:min-w-[20rem] max-[1024px]:px-2" onMouseEnter={()=>setProject2(true)} onMouseLeave={()=>setProject2(false)}>
            <p className="text-[19px] font-bold pb-2">Web App: Control de Productividad</p>
            <div className={`${ project2 ? 'hidden' : 'flex flex-col h-auto justify-between'}  max-[1024px]:h-auto max-[1024px]:pb-4 max-[1024px]:flex max-[1024px]:flex-col`}>
              <img className="rounded-md" src={TodoGit} alt="todo app gif" />
            </div>            
            <div className={`${ project2 ? 'flex flex-col h-auto justify-between' : 'hidden'} max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:h-auto`}>
              <p className="text-[17px] font-normal pb-4 max-[1024px]:pb-4">Como desarrollador de software, aprendí que uno de los aspectos más fundamentales al crear productos complejos, es cómo organizar el flujo de trabajo. Muchas veces comencé proyectos pero no los terminé por falta de organización. Es por eso que construí una herramienta para estructurar el flujo de trabajo al desarrollar cualquier proyecto.</p>
              <div className="bg-[#4a106b] border-4 border-[#ffffff] rounded-lg h-fit px-3 hover:bg-[#fffeff] hover:text-black cursor-pointer text-xl" onClick={()=> openModal2()}>
                Ver cómo lo desarrollé 
              </div>   
            </div>
          </div>
          
        </div>

        <div id="divSec3Proyectos" className="flex flex-row w-full gap-4 justify-around items-center max-[1024px]:flex-col">

          {/* PROYECTO DR ROSY */}
          <div id="divSec3ProyectosAnfisa" className=" bg-[#302b46] min-w-[25rem] w-[45%] min-h-[19rem] h-auto rounded-lg py-4 px-12 font-semibold text-center hover:bg-[#574e80] max-[1024px]:w-[100%] max-[1024px]:min-w-[20rem] max-[1024px]:px-2 max-[1024px]:mb-4" onMouseEnter={()=>setProject3(true)} onMouseLeave={()=>setProject3(false)}>
            <p className="text-[19px] font-bold pb-2">WordPress para empresa</p>
            <div className={`${ project3 ? 'hidden' : 'flex flex-col h-auto justify-between'} max-[1024px]:h-auto max-[1024px]:pb-4 max-[1024px]:flex max-[1024px]:flex-col`}>
              <img className="rounded-md" src={drrosy} alt="anfisa web" />
            </div>
            <div className={`${ project3 ? 'flex flex-col h-auto justify-between' : 'hidden'} max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:h-auto`}>
              <p className="text-[17px] font-normal pb-4 max-[1024px]:pb-4">Rosy Sandhu, M.D., es una especialista en medicina interna certificada y directora fundadora de Neem Medical Spa, uno de los principales destinos de Wellness en Boston. Hemos construido un magnífico sitio en WordPress para mejorar la presencia en línea de la Dra. Sandhu. A través de publicaciones de blog y marketing por correo electrónico, la Dra. Sandhu podrá llegar a una audiencia más amplia, teniendo así un impacto positivo en su negocio.</p>
              <div className="bg-[#4a106b] border-4 border-[#ffffff] rounded-lg h-fit px-3 hover:bg-[#fffeff] hover:text-black cursor-pointer text-xl" onClick={()=> openModal3()}>
                Ver cómo lo desarrollé 
              </div>   
            </div>
          </div>

          {/* PROYECTO DESENIO */}
          <div id="divSec3ProyectosTodo" className="bg-[#302b46] min-w-[25rem] w-[45%] min-h-[19rem] h-auto rounded-lg py-4 px-12 font-semibold text-center hover:bg-[#574e80] max-[1024px]:w-[100%] max-[1024px]:min-w-[20rem] max-[1024px]:px-2" onMouseEnter={()=>setProject4(true)} onMouseLeave={()=>setProject4(false)}>
            <p className="text-[19px] font-bold pb-2">Landing-page de colaboración</p>
            <div className={`${ project4 ? 'hidden' : 'flex flex-col h-auto justify-between'}  max-[1024px]:h-auto max-[1024px]:pb-4 max-[1024px]:flex max-[1024px]:flex-col`}>
              <img className="rounded-md" src={desenio} alt="desenio" />
            </div>            
            <div className={`${ project4 ? 'flex flex-col h-auto justify-between' : 'hidden'} max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:h-auto`}>
              <p className="text-[17px] font-normal pb-4 max-[1024px]:pb-4">Desenio es una empresa pionera a nivel mundial en ventas en línea de arte. Recientemente, Desenio optó por una colaboración con un influencer de renombre y me contrató para crear una sección sencilla pero cautivadora que muestra los episodios y artículos destacados de la colaboración.</p>
              <div className="bg-[#4a106b] border-4 border-[#ffffff] rounded-lg h-fit px-3 hover:bg-[#fffeff] hover:text-black cursor-pointer text-xl" onClick={()=> openModal4()}>
                Ver cómo lo desarrollé 
              </div>   
            </div>
          </div>
          
        </div>


      </div>

      {/* SECCION 4 */}
      <div id="divSec4" className="pt-12 flex flex-col w-full max-[1024px]:w-[95%]">
        <p className="text-[25px] font-bold pb-6">Tecnologías &#128104;&#8205;&#128187;</p>

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
            <img className="w-auto h-[1.5rem] rounded-[99999px]" src={mongodb} alt="mongodb" /> <p>MongoDB</p> 
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
        <p className="text-[25px] font-bold pb-6">Otros</p>

        <div className="flex flex-row gap-3 pb-3 max-[1024px]:flex-wrap">

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={wordpress} alt="git" /> <p>WordPress</p> 
          </div>   

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={elementor} alt="gitflow" /> <p>Elementor</p> 
          </div>  

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={shopify} alt="gitflow" /> <p>Shopify</p> 
          </div>  

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={figma} alt="railway" /> <p>Figma</p> 
          </div>  

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={seo} alt="railway" /> <p>SEO</p> 
          </div>            


        </div>


        <div className="flex flex-row gap-3 pb-3 max-[1024px]:flex-wrap">

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={git} alt="git" /> <p>Git</p> 
          </div>   

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem] rounded-[99999px]" src={gitflow} alt="gitflow" /> <p>Git Flow</p> 
          </div>  

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={railway} alt="railway" /> <p>Railway</p> 
          </div>  

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem]" src={vercel} alt="vercel" /> <p>Vercel</p> 
          </div>  

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem] rounded-[99999px]" src={firebase} alt="firebase" /> <p>Firebase</p> 
          </div>  

          <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] flex gap-2">
            <img className="w-auto h-[1.5rem] rounded-[99999px]" src={clean} alt="clean" /> <p>Clean Architecture</p> 
          </div>  

        </div>
 
      </div>

      {/* SECCION 6 */}
      <div id="divSec6" className="pt-12 flex flex-col w-full max-[1024px]:w-[95%]">
        <p className="text-[25px] font-bold pb-6">Contacto &#128236;</p>
        <div className="flex flex-row gap-3 pb-3 max-[1024px]:flex-col">
          <div className="w-[50%] max-[1024px]:w-[100%]">
            <p className="pb-3">Desarrollemos tecnología! Contáctame:</p>

            <div className="flex flex-col justify-center items-start gap-3">

                <a className="flex flex-row justify-center items-center gap-3  " href="https://www.linkedin.com/in/mfnacer/" target="_blank">
                  <img className="w-auto h-[2.5rem] rounded-lg" src={linkedin} alt="linkedin" />
                  <p>https://www.linkedin.com/in/mfnacer/</p>
                </a>

                <a className="flex flex-row justify-center items-center gap-3  " href="https://github.com/nacermanuel" target="_blank">
                  <img className="w-auto h-[2.5rem] rounded-full" src={gitflow} alt="git" />
                  <p>https://github.com/nacermanuel</p>
                </a>

                <a className="flex flex-row justify-center items-center gap-3  " href="https://www.upwork.com/freelancers/mnacer" target="_blank">
                  <img className="w-auto h-[2.5rem] rounded-lg" src={upwork} alt="upwork" />
                  <p>https://www.upwork.com/freelancers/mnacer</p>
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
            <FormES/>
          </div>

        </div>
      </div>
      
    </div>
    { modal1 && <div className="w-[100%] h-[120vh] left-0 bg-black absolute opacity-70" style={divBackground}></div> }
    { modal1 && <ModelAnfisaES heigth={windowH} onclose={()=> closeModal1() }/>}

    { modal2 && <div className="w-[100%] h-[120vh] left-0 bg-black absolute opacity-70" style={divBackground}></div> }
    { modal2 && <ModalTodoES heigth={windowH} onclose={()=> closeModal2() }/>}

    { modal3 && <div className="w-[100%] h-[120vh] left-0 bg-black absolute opacity-70" style={divBackground}></div> }
    { modal3 && <ModalDrrosyES heigth={windowH} onclose={()=> closeModal3() }/>}

    { modal4 && <div className="w-[100%] h-[120vh] left-0 bg-black absolute opacity-70" style={divBackground}></div> }
    { modal4 && <ModalTodoES heigth={windowH} onclose={()=> closeModal4() }/>}

    </>
  )
}

export default AppEs