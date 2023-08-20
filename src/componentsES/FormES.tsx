import React from 'react'

export const FormES = () => {
    const [name,setName] = React.useState('')

    const handleSubmit = ()=>{
        // setTimeout(()=>{
        //     window.close()
        // },1500)
        console.log('no action in handle submit in form');
        
        
    }


  return (
    <>
    <div className="flex flex-col justify-center items-center w-[100%]" >
    <p className="font-semibold text-lg">Formulario de Contacto</p>
    <form className="w-full" action="https://formsubmit.co/285e801ae4044759d53bd97e47dece51 " method="POST" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center w-full gap-2">
            <input className="text-black bg-white rounded-md pl-2 w-full" type="text" name="name" placeholder="Nombre" value={name} required onChange={(event) => setName(event.target.value)}/>
            <input className="text-black bg-white rounded-md pl-2 w-full" type="email" name="email"  placeholder="Email" required/>
            <textarea className="text-black bg-white rounded-md pl-2 w-full" placeholder="Mensaje" name="message" rows={4} required></textarea>
            <button className="border border-white w-full hover:bg-white hover:text-cyan-950" type="submit" >Enviar Formulario</button>
        </div>

    </form>
    </div>
    </>
  )
}
