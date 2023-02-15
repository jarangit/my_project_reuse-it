import Link from "next/link"
import React, { useContext } from "react"
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineBell } from 'react-icons/ai'
import { BsFillMusicPlayerFill, BsStars } from 'react-icons/bs'
import { MdTouchApp } from 'react-icons/md'
import { menuList } from "@/constants/menuList"
import { AppContext } from "@/context/appState"
type Props = {

}


const Menu = () => {
  const { showModalCat, setShowModalCat }: any = useContext(AppContext)

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
                {item.path === 'Category' ? (
                  <div className={`hover_green`} onClick={() => setShowModalCat(true)}>
                    {item.path}
                  </div>
                ) : (
                  <div className={`hover_green`}>
                    {item.path}
                  </div>
                )}
              </React.Fragment>
            ))}
            <div className={`relative cursor-pointer`}>
              <div className={`absolute -top-1  -right-5 text-red`}>
                <BsStars size={20} />
              </div>
              <div className={`text-yellow font-bold`}>
                Short view
              </div>
            </div>
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
            <div className={`relative text-yellow`}>
              <div className={`hover_green`}>
                <MdTouchApp size={25} />
              </div>
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