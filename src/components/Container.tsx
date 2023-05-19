interface Props {
  children: React.ReactNode;
}

export const Container = ( {children}: Props) => {
  return (
    <div className='min-w-[100vw] w-auto min-h-[100vh] h-auto  flex justify-center items-center'>
      <div className='w-[85%] max-[1000px]:w-[100%] min-h-[100vh] h-auto'>
        {children}
      </div>
    </div>
  )
}