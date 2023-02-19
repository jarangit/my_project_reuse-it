import ProductListGrid from '@/components/products/productListGrid'
import { categoryList } from '@/constants/categoryList'
import { mockProducts } from '@/constants/productList'
import React from 'react'

type Props = {}

const CategoryDatePage = (props: Props) => {
  return (
    <div>
      <div className={`my_container`}>
        <div className={`grid grid-cols-4 w-full`}>
          <div className={` col-span-1 p-4 border-b border-gray`}>
            {/* <div className={`uppercase font-bold`}>filter</div> */}
          </div>
          <div className={`col-span-3 p-4  border-b border-gray flex  justify-between`}>
            <div className={`text-3xl font-bold uppercase`}>Notebook</div>
            <div className={`flex items-center`}>
              <input type="text" placeholder='ค้นหา' className='input_outline h-[34px]' />
              <button className={`btn_green relative -left-2`}>ค้นหา</button>
            </div>
          </div>
          <div className={`border-r border-gray col-span-1 p-4 divide-y divide-gray `}>
            <div className={`pb-3`}>
              <strong>Band</strong>
              <ul className='ml-3'>
                <li>
                  <label htmlFor="band" className='flex gap-1 items-center'>
                    <input type="checkbox" id='band' />
                    <div>item</div>
                  </label>
                </li>
                <li>
                  <label htmlFor="band" className='flex gap-1 items-center'>
                    <input type="checkbox" id='band' />
                    <div>item</div>
                  </label>
                </li>
                <li>
                  <label htmlFor="band" className='flex gap-1 items-center'>
                    <input type="checkbox" id='band' />
                    <div>item</div>
                  </label>
                </li>
                <li>
                  <label htmlFor="band" className='flex gap-1 items-center'>
                    <input type="checkbox" id='band' />
                    <div>item</div>
                  </label>
                </li>
              </ul>
            </div>

            <div className={`py-3`}>
              <strong >Price (BTH)</strong>
              <div className={`ml-3 mt-1`}>
                <div className={`flex w-full gap-2 justify-between items-center`}>
                  <input type="number" className={`input_outline w-full`} placeholder='Min price' />
                  <div> - </div>
                  <input type="number" className={`input_outline w-full`} placeholder='Max price' />
                </div>
              </div>
            </div>
            <div className={`py-3`}>
              <strong >หมวดหมู่อื่นๆ</strong>
              <div className={`ml-3 mt-1`}>
                <ul>
                  {categoryList.map((item: any, key: any) => (
                    <li key={key}>
                      <div className={`cursor-pointer hover_green w-fit text-sm`}>
                        {item.name}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={` col-span-3 p-4`}>
            <ProductListGrid data={mockProducts} col={4} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryDatePage