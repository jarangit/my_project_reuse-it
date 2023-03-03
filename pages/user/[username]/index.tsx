import CardUser from '@/components/page/user/cardUser'
import PepperWhite from '@/components/peppers/pepperWhite'
import CardProductHorizontalItem from '@/components/products/cardProductHorizontalItem'
import { mockProducts } from '@/constants/productList'
import React from 'react'
import { BsLaptop } from 'react-icons/bs'
import Image from 'next/image'
import { AiTwotoneEdit } from 'react-icons/ai'
type Props = {}

const UserDetailPage = (props: Props) => {
  return (
    <div>
      <div className={`grid grid-cols-8 gap-3 items-stretch `}>
        <div className={`col-span-5`}>
          <PepperWhite>
            <div>
              <div className={`uppercase font-semibold`}>product most view</div>
              <div className={`divide-y divide-gray flex flex-col  mt-6`}>
                {mockProducts && mockProducts.length ? mockProducts.slice(1, 4).map((item: any, key: any) => (
                  <div key={key}>
                    <CardProductHorizontalItem data={item} />
                  </div>
                )) : ""}
              </div>
            </div>
          </PepperWhite>
        </div>
        <div className={`col-span-3 flex`}>
          <PepperWhite>
            <div>
              <div className={`uppercase font-semibold flex justify-between`}>
                <div>Your Contact</div>
                <div className={`hover:text-green cursor-pointer`}>
                  <AiTwotoneEdit size = {20}/>
                </div>
              </div>
              <div className={`flex flex-col gap-3 my-6 text-gray-dark justify-center text-center items-center`}>
                <div>
                  <Image
                    src={'/img/QRCode.jpeg'}
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <span className='text-black'>Address: </span>
                  Supplement Right Thorax Tendon with Synthetic Substitute, Open Approach
                </div>
                <div>
                  <span className='text-black'>Tel: </span>
                  0882266023
                </div>
                <div>
                  <span className='text-black'>LineID: </span>
                  Line-Id
                </div>
              </div>
            </div>
          </PepperWhite>
        </div>
      </div>
    </div>
  )
}
UserDetailPage.layout = "logged"
export default UserDetailPage