import React from 'react'
import CardProductItem from '../products/cardProductItem';

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
      <div className={`my-10 grid grid-cols-5 gap-y-6 gap-5`}>
        {data.map((item: any, key: any) => (
          <div key={key}>
            <CardProductItem data = {item}/>
          </div>
        ))}
      </div>
      <div className=' btn_outline_red w-fit text-center justify-center mx-auto my-10 cursor-pointer'>view all</div>

    </div>
  )
}

export default ShowProductSection