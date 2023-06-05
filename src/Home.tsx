import React from 'react'
import AppEn from './AppEn.tsx'
import AppEs from './AppEs.tsx'
// import { Link } from 'react-router-dom'

export const Home = () => {
    const [lang, setLang] = React.useState(true)
  return (
    <>
        {lang ? <AppEn language={()=> setLang(!lang)}/> : <AppEs language={()=> setLang(!lang)}/>}
    
        {/* <Link to="./mock"><div className='bg-white text-slate-950 mt-11 w-fit text-sm'>mock click here</div></Link> */}
      
    </>

  )
}
