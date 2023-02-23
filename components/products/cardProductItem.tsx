import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsImages } from 'react-icons/bs'
import { GrView } from 'react-icons/gr'

type Props = {
  data: any
}

const CardProductItem = ({ data }: Props) => {

  const { push } = useRouter()
  const {
    id,
    name,
    description,
    price,
    image,
    rating,
    verified,
    totalLikes,
    totalViews,
    createdAt,
    imageGallery
  } = data


  return (
    <div className={`cursor-pointer`} onClick={() => push(`/product/${id}`)}>
      <div className={`relative`}>
        <div className={`w-fit rounded-md overflow-hidden`}>
          <Image src={image} alt="" width={250} height={250} />
        </div>
        {/* logo verified */}
        {verified && (
          <div className={`bg-green absolute top-2 left-2 p-[2px] rounded-full px-3 text-xs text-white font-bold`}>verified</div>
        )}
        {/* image gallery */}
        {imageGallery && imageGallery.length ? (
          <div className=' absolute bottom-2 right-3'>
            <div className={`flex gap-1 text-xs items-center px-1 border border-white text-white rounded-sm backdrop-sepia-0 bg-black/30 `}>
              <BsImages size={15} />
              {imageGallery.length}
            </div>
          </div>
        ) : null}

      </div>
      <div className={`mt-2`}>
        <strong className='border-b w-full'>{name}</strong>
        <div className='flex justify-end lg:justify-between text-sm flex-wrap items-end'>
          <div className='flex gap-2'>
            <div className='flex gap-[2px] items-center hover_green'>
              <AiOutlineHeart size={17} />
              {totalLikes}
            </div>
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
