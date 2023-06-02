interface Props{
    link: string
    text: string
    price: string
}

export const Card = ( {link, text, price}: Props) => {
  return (
    <div className='w-[220px] h-[220px] bg-white flex flex-col gap-2 justify-center items-center overflow-hidden shadow-xl'>
        <img src={link}/>
        <p className='w-full items-start text-sm text-slate-950 pl-2'>{text}</p>
        <p className=' w-full items-start text-sm text-slate-950 pl-2'>{price}</p>
    </div>
  )
}
