import React from 'react'

export const Form = () => {
    const [name,setName] = React.useState('')

    const handleSubmit = ()=>{
        // setTimeout(()=>{
        //     setName('') 
        //     // @ts-ignore
        //     document.getElementById('mailForm').value = ''
        //     // @ts-ignore
        //     document.getElementById('textForm').value = ''

        //     //window.close()
            
        // },1500)
        
        console.log('no action in form handlesubmit');
        
    }


  return (
    <>
    <div className="flex flex-col justify-center items-center w-[100%]" >
    <p className="font-semibold text-lg">Contact Form</p>
    <form className="w-full" action="https://formsubmit.co/285e801ae4044759d53bd97e47dece51 " method="POST" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center w-full gap-2">
            <input id="nombreForm" className="text-black bg-white rounded-md pl-2 w-full" type="text" name="name" placeholder="Name" value={name} required onChange={(event) => setName(event.target.value)}/>
            <input id="mailForm" className="text-black bg-white rounded-md pl-2 w-full" type="email" name="email"  placeholder="Email" required/>
            <textarea id="textForm" className="text-black bg-white rounded-md pl-2 w-full" placeholder="Message" name="message" rows={4} required></textarea>
            <button className="border border-white w-full" type="submit" >Submit Form</button>
        </div>

    </form>
    </div>
    </>
  )
}
