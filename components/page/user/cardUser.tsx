import Image from 'next/image'
import React from 'react'

type Props = {}

const CardUser = (props: Props) => {
  return (
    <div className={`bg-black text-white p-6 rounded-2xl`}>
      <div className='grid grid-cols-5'>
        <div className='col-span-2'>
          <div className={`flex gap-6 items-center`}>
            <div className={`relative w-[150px] h-[150px] rounded-full overflow-hidden border-2 border-gray-dark`}>
              <Image
                src={"https://images.pexels.com/photos/3772621/pexels-photo-3772621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                alt=''
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <div className='text-lg font-bold'>Jaran Donchaaim</div>
              <div className={`text-sm`}>jaran@gmail.com</div>
              <div className={`text-green text-sm`}>เป็นสมาชิกมาแล้ว 5 วัน</div>
            </div>
          </div>
        </div>
        <div className={`text-center flex flex-col items-center justify-center col-span-1 `}>
          <div className='text-5xl font-bold'>56</div>
          <div>Product</div>
        </div>
        <div className={`text-center flex flex-col items-center justify-center col-span-1 `}>
          <div className='text-5xl font-bold'>1.2K</div>
          <div>View</div>
        </div>
        <div className={`text-center flex flex-col items-center justify-center col-span-1 `}>
          <div className='text-5xl font-bold'>500</div>
          <div>Like</div>
        </div>
      </div>
    </div>
  )
}

export default CardUser