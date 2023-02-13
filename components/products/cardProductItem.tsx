import Image from 'next/image'
import React from 'react'

type Props = {
  data: any
}

const CardProductItem = ({ data }: Props) => {

  const { name, description, price, image, rating, verified, totalLikes, totalViews, createdAt } = data
  return (
    <div>
      <div>
        <Image src={image} alt="" width={200} height={200} />
      </div>
      <div>{name}</div>
    </div>
  )
}

export default CardProductItem