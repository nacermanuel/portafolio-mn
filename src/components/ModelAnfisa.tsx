//import React from 'react'

interface Props{
    heigth: number
    onclose: any
}

export const ModelAnfisa = ( {heigth, onclose}: Props) => {

    const windowH = {
        top: `${Math.ceil(heigth + 40)}px`
    }
    
  return (
    <div className={`bg-gradient-to-b from-[#365852] from-10% via-[#422457] via-100%  text-slate-800 absolute w-[75%] h-[80%] left-[13%] rounded-lg border border-white flex flex-col justify-center items-center px-7`} style={windowH}>
        <button className="absolute top-0 right-0 mr-2 mt-2" onClick={onclose}>x</button> 
        <p className="text-[25px] font-bold pb-2 text-white">Anfisa - B2B cosmetics shop</p>  
        <br />      
        <ul>
          <li className="font-semibold text-center text-white">&#9989;This is a #NEXTJS application (TypeScript). As a catalog of multiple brands and products, we decided to use Next.js so we can build a mix of SSR and CSR components, allowing for optimized search engine indexing.</li>
          <br />
          <li className="font-semibold text-center text-white">&#9989;We used the #TAILWINDCSS framework and the daisyUI components library to create a great UI.</li>
          <br />
          <li className="font-semibold text-center text-white">&#9989;The backend was built using Node.js (TypeScript) and the Express framework.</li>
          <br />
          <li className="font-semibold text-center text-white">&#9989;A CRUD API was implemented to manage products, brands, and categories. We utilized #MONGOOSE as the ORM and #MONGODB Atlas as the cloud database.</li>
          <br />
          <li className="font-semibold text-center text-white">&#9989;To handle responsibilities in a decoupled manner and facilitate easy modifications, we adopted a clean architecture.</li>
          <br />
          <li className="font-semibold text-center text-white">&#9989;For frontend deployment, we are using Vercel.</li>
          <br />
          <li className="font-semibold text-center text-white">&#9989;For backend deployment, we have opted for Railway.</li>
        </ul>
        <div className="flex flex-row pt-3 w-full justify-around items-center">
          <a className="flex justify-center items-center w-full" href="https://anfisa.vercel.app/" target="_blank">
          <div className="bg-[#631c25] border border-[#a32c3c] rounded-lg hover:bg-[#302b46] cursor-pointer text-xl text-white text-center w-[50%] h-auto py-2">
             &#128187; Web Site &#128187;
          </div> 
          </a>
 
          <a className="flex justify-center items-center w-full" href="https://github.com/LuisAlomia/anfisa" target="_blank">
          <div className="bg-[#631c25] border border-[#a32c3c] rounded-lg hover:bg-[#302b46] cursor-pointer text-xl text-white text-center w-[50%] h-auto py-2">
             &#128373; Source Code &#128373;
          </div> 
          </a>
        </div>

    </div>
  )
}
