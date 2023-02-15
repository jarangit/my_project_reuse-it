import ProductListGrid from '@/components/products/productListGrid'
import { mockProducts } from '@/constants/productList'
import React from 'react'

type Props = {}

const CategoryDatePage = (props: Props) => {
  return (
    <div>
      <div className={`my_container`}>
        <div className={`grid grid-cols-4 w-full`}>
          <div className={` col-span-1 p-4 border-b border-gray`}>
            <div className={`uppercase font-bold`}>filter</div>
          </div>
          <div className={`col-span-3 p-4  border-b border-gray flex  justify-between`}>
            <div className={`text-3xl font-bold uppercase`}>Notebook</div>
            <div className={`flex items-center`}>
              <input type="text" placeholder='ค้นหา' className='input_outline h-[34px]' />
              <button className={`btn_green relative -left-2`}>ค้นหา</button>
            </div>
          </div>
          <div className={`border-r border-gray col-span-1 p-4`}>filter</div>
          <div className={` col-span-3 p-4`}>
            <ProductListGrid data={mockProducts} col={4}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryDatePage