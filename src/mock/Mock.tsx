
import { Card } from './Card'
import { Yt } from './Yt'

export const Mock = () => {
  return (
    <div className=' bg-white w-full h-[100vh] flex justify-center'>
        <div className='flex w-[1000px] flex-col justify-center items-center gap-2 pt-1'>
           <Yt/>
           <div className='flex gap-4'>
                <Card 
                    link={'https://images.desenio.com/zoom/17880-8poolsidewoman50x70.jpg?auto=compress%2Cformat&fit=max&w=384'}
                    text={'Poolside Woman Poster'}
                    price={'$27,95'}
                />
                <Card 
                    link={'https://images.desenio.com/zoom/17877-8sunbathinginhollywood50x70.jpg?auto=compress%2Cformat&fit=max&w=384'}
                    text={'Sunbathing in Hollywood Poster'}
                    price={'$27,95'}
                />
                <Card 
                    link={'https://images.desenio.com/zoom/17880-8poolsidewoman50x70.jpg?auto=compress%2Cformat&fit=max&w=384'}
                    text={'Poolside Woman Poster'}
                    price={'$27,95'}
                />

           </div>
        </div>
    </div>

 
  )
}
