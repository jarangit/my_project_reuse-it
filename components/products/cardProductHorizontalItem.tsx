import Image from 'next/image'
import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'

type Props = {
  data: any
}

const CardProductHorizontalItem = ({ data }: Props) => {
  console.log('%cMyProject%cline:7%cdata', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(56, 13, 49);padding:3px;border-radius:2px', data)
  return (
    <div>
      <div className={`flex justify-between items-center py-2 cursor-pointer`}>
        <div className={`flex gap-3`}>
          <div className={`relative w-16 h-16 rounded-md overflow-hidden`}>
            <Image
              src={data.image}
              alt=''
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <div>{data.name}</div>
            <div className={`text-green font-semibold`}>{data.price} BTH</div>
          </div>
        </div>
        <div className={`flex gap-1 items-center`}>
          <div>
            <AiOutlineEye size={25} />
          </div>
          <div >
            {data.totalViews}
          </div>

        </div>
      </div>
    </div>
  )
}

export default CardProductHorizontalItem