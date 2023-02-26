import GalleryImage from '@/components/images/galleryImage'
import WarningSection from '@/components/layouts/warningSection'
import ShowProductSection from '@/components/sections/showProductSection'
import { categoryList } from '@/constants/categoryList'
import { mockProducts } from '@/constants/productList'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { GrView } from 'react-icons/gr'

type Props = {}

const ProductDetailPage = (props: Props) => {
  const { query } = useRouter()
  const [data, setData] = useState({
    name: "",
    totalLikes: 0,
    totalViews: 0,
    description: "",
    price: 0,
    imageGallery: [''],
  })
  const getData = useCallback((id: string) => {
    if (id) {
      const found = mockProducts.find((item: any) => item.id == id)
      if (found) {
        setData(found)
      }
    }
  }, [])

  useEffect(() => {
    if (query.id) {
      getData(query.id as '')
    }
  }, [query.id])

  return (
    <div>
      <div className={`my_container mb-10`}>
        <div className={`grid grid-cols-2 min-h-screen gap-6`}>
          <div>
            <GalleryImage dataImage={data.imageGallery} />
          </div>
          {/* right contents */}
          <div className={`bg-gray-light p-6 rounded-lg`}>
            <div className={`flex flex-col gap-10`}>
              <div>
                <div className={`text-2xl font-bold`}>{data.name}</div>
                <div className='flex gap-2'>
                  <div className='flex gap-[2px] items-center hover_green'>
                    <AiOutlineHeart size={17} />
                    {data.totalLikes}
                  </div>
                  <div className='flex gap-[2px] items-center'>
                    <GrView size={16} />
                    {data.totalViews}</div>
                </div>
              </div>
              <div>
                <div className={`mb-1 font-semibold`}>รายละเอียด</div>
                <div className={`border p-3 rounded-lg border-gray min-h-[200px]`}>{data.description}</div>
              </div>
              <div className={`text-xl font-semibold text-red`}>{data.price} BTH</div>
              <div>
                <button className={`btn_black w-1/2`}>ติดต่อ</button>
              </div>
              <WarningSection size={'md'} />

            </div>
          </div>
        </div>

        {/* other product */}
        <div className='my-28'>
          <ShowProductSection title={"ที่ค้าที่คล้ายกัน"} data={mockProducts} />
        </div>

        {/* tag section  */}
        <div>
          <div className={`text-3xl font-semibold`}>Tag</div>
          <div className={`flex flex-wrap gap-1 mt-3`}>
            {categoryList.map((item: any, key: any) => (
              <div className={`bg-green text-white px-3 py-1 rounded-full w-fit text-xs`} key={key}>
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage