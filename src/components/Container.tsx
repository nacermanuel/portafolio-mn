interface Props {
  children: React.ReactNode;
}

export const Container = ( {children}: Props) => {
  return (
    <div id="divContainerParent" className='min-w-[98vw] w-auto min-h-[100vh] h-auto  flex justify-center items-center max-[768px]:max-w-[100vw]  max-[768px]:overflow-hidden'>
      <div id="divContainerChild" className='w-[85%] max-[1000px]:w-[100%] min-h-[100vh] h-auto'>
        {children}
      </div>
    </div>
  )
}