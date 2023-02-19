import { menuList } from '@/constants/menuList'
import Link from 'next/link'
import React from 'react'
import { BiMailSend } from 'react-icons/bi'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='p-24  bg-gray-light'>
      <div className={`grid grid-cols-4 gap-5 `}>
        <div className={`flex gap-3 flex-col`}>
          <div className={`text-xl font-bold uppercase text-green`}>REUSE-IT</div>
          <div className=' text-sm'>REUSE-IT is a website for selling second-hand musical instruments and connecting buyers and sellers.</div>
        </div>
        <div>
          <div className='text-black font-bold mb-3'>Menu</div>
          <ul>
            {menuList.map((item, key) => (
              <li key={key} >
                <Link href={item.link}>
                  <div className='hover_green w-fit'>
                    {item.path}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className='text-black font-bold mb-3'>Contact</div>
          <div>
            the 1960s with the release of Letraset sheets containing
          </div>
        </div>
        <div>
          <div className='text-black font-bold'>Subscribe to our email</div>
          <div className={`relative mt-3 `}>
            <input type="email" className={`gray_input w-full`} placeholder='your email' />
            <button className={`btn_green rounded-full absolute top-1 right-1 w-7 h-7 flex items-center justify-center`}>
              <div>
                <BiMailSend size={18} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer