import React from 'react'
import { Bars } from 'react-loader-spinner'

type Props = {
  onShow: boolean;
}

const MainLoading = ({ onShow }: Props) => {
  return (
    <>
      {onShow ? (
        <div className='fixed top-0 border w-screen h-screen flex  justify-center items-center backdrop-blur-md bg-white/30 transition-all'>
          <div className='flex flex-col gap-3 justify-center items-center'>
            <div className={`text-2xl uppercase font-bold`}>reuse-it</div>
            <Bars
              height="50"
              width="50"
              color="#65B2A0"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default MainLoading