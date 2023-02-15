import React from 'react'
import CardProductItem from './cardProductItem';

type Props = {
  data: any;
  col?: number;
}

const ProductListGrid = ({ data, col }: Props) => {
  return (
    <div className={` !grid  gap-y-6 gap-5`}
      style={{
        gridTemplateColumns: `${col ? `repeat(${col}, minmax(0, 1fr))` : "repeat(5, minmax(0, 1fr))"}`
      }}
    >
      {data.map((item: any, key: any) => (
        <div key={key}>
          <CardProductItem data={item} />
        </div>
      ))}
    </div>
  )
}

export default ProductListGrid