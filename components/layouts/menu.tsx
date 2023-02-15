import Link from "next/link"
import React from "react"
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineBell } from 'react-icons/ai'
import { BsFillMusicPlayerFill } from 'react-icons/bs'
import { menuList } from "@/constants/menuList"
type Props = {

}


const Menu = () => {
  return (
    <div className={`p-6 shadow-[-1px 7px 30px 9px rgba(0,0,0,0.47)] mb-10 bg-white drop-shadow-lg`}>
      <div className="flex justify-between">
        <div className="flex items-center gap-10">
          <div>
            <div className={`text-2xl text-green font-bold`}>REUSE-IT</div>
          </div>
          <div className={`flex items-center gap-6`}>
            {menuList.map((item, key) => (
              <React.Fragment key={key}>
                <Link href={item.link}>
                  <div className={`hover_green`}>
                    {item.path}
                  </div>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* left */}
        <div>
          <div className={`flex items-center gap-3`}>
            <div >
              <button className={`btn_green`}>Login</button>
            </div>
            <div className={`hover_green top-[2px] relative`}>
              <BiSearchAlt size={22} />
            </div>
            <div className={`relative`}>
              <div className={`hover_green`}>
                <AiOutlineBell size={25} />
                <div className={`w-5 h-5 bg-red text-white rounded-full flex items-center justify-center p-1 text-xs absolute -top-[10px] -right-1 scale-75 font-bold`}>3</div>
              </div>
            </div>
            <div className={`relative`}>
              <div className={`hover_green`}>
                <BsFillMusicPlayerFill size={20} />
              </div>
              <div className={`w-5 h-5 bg-red text-white rounded-full flex items-center justify-center p-1 text-xs absolute -top-3 -right-1 scale-75 font-bold`}>3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Menu