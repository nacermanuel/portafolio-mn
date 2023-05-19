import React from "react"
import AnfisaImage from './assets/anfisa.gif';


function App() {
  const [project1 , setProject1] = React.useState(false)
  const [project2 , setProject2] = React.useState(false)  
  const style1 = 'flex flex-col'
  const style2 = 'hidden'


  return (
    <>
    
    <div className="flex flex-col justify-center items-center pt-20">

      {/* SECCION 1 */}
      <div className="w-[100%] flex flex-row justify-between items-center pb-6">
        <div className="flex flex-row gap-2 ">
          <div className="w-[50px] h-[50px] rounded-full bg-cover bg-no-repeat bg-center bg-[url(https://res.cloudinary.com/dbhtt5ozr/image/upload/v1684528398/IMG_8209wwwww_et2cfd.jpg)] "></div>
          <p className="text-[30px] font-bold">Manuel Nácer</p>
        </div>
        <div className="flex gap-2">
          <div className="border border-white rounded-lg h-fit px-3 hover:bg-[#302b46] cursor-pointer">
            <p>opcion  1</p> 
          </div>
          <div className="border border-white rounded-lg h-fit px-3 hover:bg-[#302b46] cursor-pointer">
            <p>opcion  1</p> 
          </div>
        </div>
      </div>

      {/* SECCION 2 */}
      <div className="bg-[#302b46] w-full rounded-lg py-4 px-12 font-semibold text-center hover:bg-[#574e80] cursor-none">
        Hello, I'm Manuel, a full-stack software developer. I've acquired  my skills through a rigorous bootcamp called SoyHenry and extensive self-study, but my true expertise has come from building my own projects. My passion lies in leveraging technology as a problem solver, and my goal is to work within a company that shares this vision.
        <br />
        <br />
         In addition to my technical skills, I have held leading roles in the operation of businesses with annual sales surpassing USD$100,000. This hands-on experience has given me a deep understanding of commercial strategies, expertise in running complex Facebook ads campaigns, and a comprehensive grasp of financial structures within businesses. I synergize my tech skills and business expertise to bring value to the table. 
      </div>

      {/* SECCION 3 */}

      <div className="pt-5 flex flex-col w-full">
        <p className="text-[25px] font-bold pb-2">Projects</p>
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
      <div className="pt-5 flex flex-col w-full">
        <p className="text-[25px] font-bold pb-2">Technologies</p>
        <div className="w-fit border border-white rounded-lg h-fit px-3 hover:bg-[#302b46] cursor-pointer">
          <img src="" alt="" /> <p>TypeScript</p> 
        </div>   
      </div>

      {/* SECCION 5 */}
      <div className="pt-5 flex flex-col w-full">
        <p className="text-[25px] font-bold pb-2">Siguiente seccion</p>
  
      </div>

    </div>
    </>
  )
}

export default App
