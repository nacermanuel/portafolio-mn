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


function App() {
  const [project1 , setProject1] = React.useState(false)
  const [project2 , setProject2] = React.useState(false)
  const [ingles, setIngles] = React.useState(true)  
  const style1 = 'flex flex-col'
  const style2 = 'hidden'


  return (
    <>
    
    <div className="flex flex-col justify-center items-center pt-20">

      {/* SECCION 1 */}
      <div className="w-[100%] flex flex-row justify-between items-center pb-8">
        <div className="flex flex-row gap-2 ">
          <div className="w-[50px] h-[50px] rounded-full bg-cover bg-no-repeat bg-center bg-[url(https://res.cloudinary.com/dbhtt5ozr/image/upload/v1684528398/IMG_8209wwwww_et2cfd.jpg)] "></div>
          <p className="text-[30px] font-bold">Manuel Nácer</p>
        </div>
        <div className="flex gap-2">
          <div className="border border-white rounded-lg h-fit px-3 hover:bg-[#302b46] cursor-pointer">
            <p>Resume &#128196;</p> 
          </div>
          <div className="border border-white rounded-lg h-fit px-3 hover:bg-[#302b46] cursor-pointer" onClick={()=> setIngles(!ingles)}>
            { !ingles ? <p>English&#128257;</p> : <p>Español&#128257;</p> }
          </div>
        </div>
      </div>

      {/* SECCION 2 */}
      <div className="bg-[#302b46] w-full rounded-lg py-4 px-12 font-semibold text-center hover:bg-[#574e80] cursor-none">
        Hello, I'm Manuel, a full-stack software developer. I've acquired  my skills through a rigorous bootcamp called SoyHenry and extensive self-study, but my true expertise has come from building my own projects. My passion lies in leveraging technology as a problem solver, and my goal is to work within a company that shares this vision.
        <br />
        <br />
         In addition to my technical skills, I have held leading roles in the operation of businesses with annual revenue surpassing USD$100,000. This hands-on experience has given me a deep understanding of commercial strategies, expertise in running complex Facebook ads campaigns, and a comprehensive grasp of financial structures within businesses. I synergize my tech skills and business expertise to bring value to the table. 
      </div>

      {/* SECCION 3 */}

      <div className="pt-12 flex flex-col w-full">
        <p className="text-[25px] font-bold pb-6">Projects &#128188;</p>
        <div className="flex flex-row w-full gap-4 justify-around items-center">

          {/* CUADRO PROYECTO */}
          <div className="bg-[#302b46] min-w-[25rem] w-[45%] min-h-[19rem] rounded-lg py-4 px-12 font-semibold text-center hover:bg-[#574e80] " onMouseEnter={()=>setProject1(true)} onMouseLeave={()=>setProject1(false)}>
            <p className="text-[25px] font-bold pb-2">Sales Tool for B2B Business</p>
            <div className={`${ project1 ? style1 : style2}`}>
              <p className="text-[15px] font-normal ">Anfisa is a B2B cosmetics shop.  They grew the business to 80 orders per month just using WhatsApp as sales tool. When they reached 110 sales per month, the amount messages were unmanageable so we build this tool where the customers can make the order by themself and finish the purchase via WhatsApp using a sharable link of their order.  </p>
              <div className="border border-white rounded-lg h-fit px-3 hover:bg-[#302b46] cursor-pointer">
                <p>opcion  1</p> 
              </div>   
            </div>
            <div className={`${ project1 ? style2 : style1}`}>
              <img className="rounded-md" src={AnfisaImage} alt="anfisa web" />
            </div>
          </div>

          {/* CUADRO PROYECTO */}
          <div className="bg-[#302b46] min-w-[25rem] w-[45%] min-h-[19rem] rounded-lg py-4 px-12 font-semibold text-center hover:bg-[#574e80] " onMouseEnter={()=>setProject2(true)} onMouseLeave={()=>setProject2(false)}>
            <p className="text-[25px] font-bold pb-2">Sales Tool for B2B Business</p>
            <div className={`${ project2 ? style1 : style2}`}>
              <p className="text-[15px] font-normal ">Anfisa is a B2B cosmetics shop.  They grew the business to 80 orders per month just using WhatsApp as sales tool. When they reached 110 sales per month, the amount messages were unmanageable so we build this tool where the customers can make the order by themself and finish the purchase via WhatsApp using a sharable link of their order.  </p>
              <div className="border border-white rounded-lg h-fit px-3 hover:bg-[#302b46] cursor-pointer">
                <p>opcion  1</p> 
              </div>   
            </div>
            <div className={`${ project2 ? style2 : style1}`}>
              <img className="rounded-md" src={AnfisaImage} alt="anfisa web" />
            </div>
          </div>
          
        </div>
      </div>

      {/* SECCION 4 */}
      <div className="pt-12 flex flex-col w-full">
        <p className="text-[25px] font-bold pb-6">Technologies &#128104;&#8205;&#128187;</p>

        <div className="flex flex-row gap-3 pb-3">

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

        <div className="flex flex-row gap-3 pb-3">

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

        <div className="flex flex-row gap-3 pb-3">

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
      <div className="pt-2 flex flex-col w-full">
        <p className="text-[25px] font-bold pb-6">Others</p>

        <div className="flex flex-row gap-3 pb-3">

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
      <div className="pt-12 flex flex-col w-full">
        <p className="text-[25px] font-bold pb-6">Contact &#128236;</p>
        <div className="flex flex-row gap-3 pb-3">
          <div className="w-[50%]">
            <p className="pb-3">Let's build something! Contact me:</p>

            <div className="flex flex-col justify-center items-start gap-3">

                <a className="flex flex-row justify-center items-center gap-3  " href="https://github.com/nacermanuel">
                  <img className="w-auto h-[2.5rem] rounded-full" src={gitflow} alt="git" />
                  <p>https://github.com/nacermanuel</p>
                </a>

                <a className="flex flex-row justify-center items-center gap-3  " href="https://www.linkedin.com/in/mfnacer/">
                  <img className="w-auto h-[2.5rem] rounded-lg" src={linkedin} alt="linkedin" />
                  <p>https://www.linkedin.com/in/mfnacer/</p>
                </a>

                <a className="flex flex-row justify-center items-center gap-3  " href="https://youtube.com/@bootcamp3rs">
                  <img className="w-auto h-[2rem]" src={youtube} alt="youtube" />
                  <p>https://youtube.com/@bootcamp3rs</p>
                </a>

                <a className="flex flex-row justify-center items-center gap-3  " href="mailto:nacermanuel@gmail.com">
                  <img className="w-auto h-[2rem]" src={gmail} alt="git" />
                  <p>nacermanuel@gmail.com</p>
                </a>

            </div>
          </div>

          <div className="w-[50%]">
            <Form/>
          </div>

        </div>
      </div>

    </div>
    </>
  )
}

export default App
