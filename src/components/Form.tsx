import React from 'react'

export const Form = () => {
    const [name,setName] = React.useState('')

    const handleSubmit = ()=>{
        setTimeout(()=>{
            window.close()
        },1500)

        
    }


  return (
    <>
    <div className="flex flex-col justify-center items-center w-[100%]" >
    <p className="font-semibold text-lg">Contact Form</p>
    <form className="w-full" target="_blank" action="https://formsubmit.co/285e801ae4044759d53bd97e47dece51 " method="POST" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center w-full gap-2">
            <input className="text-black rounded-md pl-2 w-full" type="text" name="name" placeholder="Name" value={name} required onChange={(event) => setName(event.target.value)}/>
            <input className="text-black rounded-md pl-2 w-full" type="email" name="email"  placeholder="Email" required/>
            <textarea className="text-black rounded-md pl-2 w-full" placeholder="Message" name="message" rows={4} required></textarea>
            <button className="border border-white w-full" type="submit" >Submit Form</button>
        </div>

    </form>
    </div>
    </>
  )
}
