import Link from "next/link"
import React from "react"
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineBell } from 'react-icons/ai'
type Props = {

}

const menu = [
  {
    path: "Home",
    link: "/",
  },
  {
    path: "Category",
    link: "/category",
  },
  {
    path: "About us",
    link: "/about-us",
  },
  {
    path: "Contact us",
    link: "/contact-us",
  },
]
const Menu = () => {
  return (
    <div className={`p-6 shadow-[-1px 7px 30px 9px rgba(0,0,0,0.47)] mb-10 bg-white drop-shadow-lg`}>
      <div className="flex justify-between">
        <div className="flex items-center gap-10">
          <div>
            <div className={`text-2xl text-red font-bold`}>MUSIC GEAR</div>
          </div>
          <div className={`flex items-center gap-6`}>
            {menu.map((item, key) => (
              <React.Fragment key={key}>
                <Link href={item.link}>
                  <div className={`hover_red`}>
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
              <button className={`btn_red`}>Login</button>
            </div>
            <div className={`hover_red`}>
              <BiSearchAlt size={20} />
            </div>
            <div className={`relative`}>
              <div className={`hover_red`}>
                <AiOutlineBell size={20} />
              </div>
              <div className={`w-5 h-5 bg-red text-white rounded-full flex items-center justify-center p-1 text-xs absolute -top-2 -right-1 scale-75 font-bold`}>3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Menu