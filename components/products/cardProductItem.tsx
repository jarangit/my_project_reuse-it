import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { GrView } from 'react-icons/gr'

type Props = {
  data: any
}

const CardProductItem = ({ data }: Props) => {

  const { name, description, price, image, rating, verified, totalLikes, totalViews, createdAt } = data
  return (
    <div>
      <div className={`relative`}>
        <Image src={image} alt="" width={250} height={250} />
        {verified && (
          <div className={`bg-green absolute top-2 left-2 p-[2px] rounded-full px-3 text-xs text-white font-bold`}>verified</div>
        )}
      </div>
      <div className={`mt-2`}>
        <strong className='border-b w-full'>{name}</strong>
        <div className='flex justify-end lg:justify-between text-sm flex-wrap items-end'>
          <div className='flex gap-2'>
            <div className='flex gap-[2px] items-center'>
              <AiOutlineHeart size={17} />
              {totalLikes}</div>
            <div className='flex gap-[2px] items-center'>
              <GrView size={16} />
              {totalViews}</div>
          </div>
          <strong className={`text-red`}>{price} BTH</strong>
        </div>
      </div>
    </div>
  )
}
export default CardProductItem
