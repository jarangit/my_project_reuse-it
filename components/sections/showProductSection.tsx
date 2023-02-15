import React from 'react'
import CardProductItem from '../products/cardProductItem';
import ProductListGrid from '../products/productListGrid';

type Props = {
  title: string;
  data: any;
}

const ShowProductSection = ({ title, data }: Props) => {
  return (
    <div className={`border-b border-gray`}>
      <div className=' relative'>
        <div className={"text-3xl font-bold uppercase text-center"}>{title}</div>
        <div className='absolute top-1 right-0 hover_green'>view all</div>
      </div>
      {/* product list */}
      <div className='my-10'>
      <ProductListGrid data={data} col={5} />
      </div>
      <div className=' btn_outline_red w-fit text-center justify-center mx-auto my-10 cursor-pointer'>view all</div>
    </div>
  )
}

export default ShowProductSection