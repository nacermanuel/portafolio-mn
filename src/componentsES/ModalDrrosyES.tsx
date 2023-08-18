//import React from 'react'
import wordpress from '../assets/images/wordpress.png'
import elementor from '../assets/images/elementor.png'
import figma from '../assets/images/figma.png'
import seo from '../assets/images/seo.png'
import css from '../assets/images/css.png'


interface Props{
    heigth: number
    onclose: any
}

const Wordpress = ()=>{
  return(
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
    <img className="w-auto h-[1.5rem]" src={wordpress} alt="wordpress" /> <p>WordPress</p> 
    </div>    
  )
}

const Elementor = () => {
  return (
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
    <img className="w-auto h-[1.5rem]" src={elementor} alt="elementor" /> <p>Elementor</p> 
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

const Seo = ()=>{
  return(
    <div className="w-fit border border-[#a32c3c] rounded-lg h-fit px-3 py-1 bg-[#631c25] inline-flex gap-2 max-[1024px]:scale-[0.8]">
      <img className="w-auto h-[1.5rem]" src={seo} alt="seo" /> <p>SEO</p> 
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


 



export const ModalDrrosyES = ( {heigth, onclose}: Props) => {

    const windowH = {
        top: `${Math.ceil(heigth + 40)}px`
    }
    
  return (
    <div className={`bg-gradient-to-b from-[#365852] from-10% via-[#422457] via-100%  text-slate-800 absolute w-[80%] h-[85%] left-[10%] rounded-lg border border-white flex flex-col justify-center items-center px-7 max-[1024px]:w-[90%] max-[1024px]:left-[5%] max-[1024px]:px-2 max-[1024px]:h-[80vh]`} style={windowH}>
        <p className="absolute top-0 right-0 mr-2 mt-2 text-white font-bold cursor-pointer text-xl border border-[#ffffff] rounded-lg text-center px-2 max-[1024px]:px-[4px] " onClick={onclose}>x</p> 
        <p className="text-[25px] font-bold pb-2 text-white max-[1024px]:text-[18px] max-[1024px]:mt-5">Sitio WordPress para empresa.</p>  
   
        <ul className='overflow-auto max-[1024px]:overflow-auto'>
          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989;  Este es un sitio <Wordpress/>. Fue construido utilizando <Elementor/> Pro junto con el uso de <Css/> para personalización del proyecto.</li>

          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989; El proceso de diseño se llevó a cabo utilizando <Figma/>. Después de finalizar los diseños de escritorio y mobil, procedimos con el desarrollo web.</li>

          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989; Se implementó una estrategia de blog junto con una optimización exhaustiva de <Seo/> para generar tráfico al sitio.</li>

          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989; Se han implementado estrategias de seguridad para prevenir infecciones de malware.</li>

          <li className="font-semibold text-start text-white py-2 max-[1024px]:py-0">&#9989; El alojamiento (hosting) y el Certificado SSL se configuraron exitosamente.</li>

        </ul>
        <div className="flex flex-row pt-4 w-full justify-around items-center max-[1024px]:items-center max-[1024px]:h-[9vh] max-[1024px]:py-2">
          <a className="flex justify-center items-center w-full max-[1024px]:h-full" href="https://www.drrosysandhu.com/" target="_blank">
          <div className="bg-[#4a106b] border-4 border-[#ffffff] rounded-lg hover:bg-[#fffeff] hover:text-black cursor-pointer text-xl text-white text-center w-[50%] h-auto py-2 max-[1024px]:h-[90%] max-[1024px]:w-[90%] max-[1024px]:text-sm">
             &#128187; Ver Web &#128187;
          </div> 
          </a>
 
        </div>

    </div>
  )
}
