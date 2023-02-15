import Image from 'next/image'
import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className={`min-h-[500px] bg-gray rounded-xl px-24 drop-shadow-md py-16`}>
      <div className={`grid grid-cols-2 gap-10 `}>
        <div className={`flex gap-5 flex-col justify-center items-center`}>
          <div className={`text-6xl font-bold uppercase text-green`}>REUSE-IT</div>
          <p className='text-center'>REUSE-IT is a website for selling second-hand musical instruments and connecting buyers and sellers.</p>
          <div>
            <button className='btn_green'>Get start</button>
          </div>
        </div>
        <div className={`w-fit rounded-3xl overflow-hidden`}>
          <Image src={"/img/banner.jpg"} alt='' width={500} height={500} />
        </div>
      </div>
    </div>
  )
}

export default Banner