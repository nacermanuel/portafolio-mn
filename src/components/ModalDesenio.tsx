//import React from 'react'
import javascript from '../assets/images/javascript.png'
import html from '../assets/images/html.png'
import figma from '../assets/images/figma.png'
import css from '../assets/images/css.png'

interface Props{
    heigth: number
    onclose: any
}


const Javascript = ()=>{
  return(
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
      <img className="w-auto h-[1.5rem]" src={javascript} alt="javascript" /> <p>JavaScript</p> 
    </div>       
  )
}

const Html = ()=>{
  return(
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
      <img className="w-auto h-[1.5rem]" src={html} alt="html" /> <p>HTML</p> 
    </div>       
  )
}

const Figma = ()=>{
  return(
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
      <img className="w-auto h-[1.5rem]" src={figma} alt="figma" /> <p>Figma</p> 
    </div>       
  )
}

const Css = ()=>{
  return(
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
      <img className="w-auto h-[1.5rem]" src={css} alt="css" /> <p>CSS</p> 
    </div>       
  )
}


export const ModalDesenio = ( {heigth, onclose}: Props) => {

    const windowH = {
        top: `${Math.ceil(heigth + 40)}px`
    }
    
  return (
    <div className={`bg-gradient-to-b from-[#365852] from-10% via-[#422457] via-100%  text-slate-800 absolute w-[80%] h-[85%] left-[10%] rounded-lg border border-white flex flex-col justify-center items-center px-7 max-[1024px]:w-[90%] max-[1024px]:left-[5%] max-[1024px]:px-2 max-[1024px]:h-[80vh]`} style={windowH}>
        <p className="absolute top-0 right-0 mr-2 mt-2 text-white font-bold cursor-pointer text-xl border border-[#ffffff] rounded-lg text-center px-2 max-[1024px]:px-[4px] " onClick={onclose}>x</p> 
        <p className="text-[25px] font-bold pb-2 text-white max-[1024px]:text-[18px] max-[1024px]:mt-5">Desenio Ecommerce Landing Page</p>  
   
        <ul className='overflow-auto max-[1024px]:overflow-auto'>

          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989; I created this captivating and responsive landing page for their existing ecommerce using <Html/>, <Css/>, and vanilla <Javascript/>.</li>

          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989; Collaborated closely with the client to understand their brand identity and design preferences, ensuring the landing page aligned with their vision and styles.</li>

          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989; The design process was executed using <Figma/>. After finalizing the desktop and responsive designs, we proceeded with web development.</li>

          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989; Conducted thorough cross-browser testing to guarantee consistent performance and appearance across major web browsers.</li>

        </ul>
        <div className="flex flex-row pt-4 w-full justify-around items-center max-[1024px]:items-center max-[1024px]:h-[9vh] max-[1024px]:py-2">
          <a className="flex justify-center items-center w-full max-[1024px]:h-full" href="https://desenio.com/promotion/posters-prints/transforming-spaces-with-lone-fox/" target="_blank">
          <div className="bg-[#4a106b] border-4 border-[#ffffff] rounded-lg hover:bg-[#fffeff] hover:text-black cursor-pointer text-xl text-white text-center w-[50%] h-auto py-2 max-[1024px]:h-[90%] max-[1024px]:w-[90%] max-[1024px]:text-sm">
             &#128187; Visit Web Site &#128187;
          </div> 
          </a>
 

        </div>

    </div>
  )
}
