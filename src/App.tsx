import React from 'react'
import AppEn from './AppEn.tsx'
import AppEs from './AppEs.tsx'

export const App = () => {
    const [lang, setLang] = React.useState(true)
  return (

    lang ? <AppEn language={()=> setLang(!lang)}/> : <AppEs language={()=> setLang(!lang)}/>

  )
}
