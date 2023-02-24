import React from 'react'

type Props = {
  size?: "sm" | "md" | "lg";
}

const WarningSection = ({ size }: Props) => {
  console.log('%cMyProject%cline:7%csize', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(1, 77, 103);padding:3px;border-radius:2px', size)
  return (
    <div className=''>
      <div className={`my_container border p-3 border-red rounded-xl bg-pink`}>
        <div className={` font-bold
          ${size == "sm" && "!text-md"}
          ${size == "md" && "!text-lg"}
          ${size == "lg" && "!text-5xl"}
          ${!size && "!text-5xl"}
        `}>คำเตือน</div>
        <div className={`text-red 
         ${size == "sm" && "!text-sn"}
         ${size == "md" && "!text-md"}
         ${size == "lg" && "!text-lg"}
         ${!size && "!text-lg"}
        `}>
          {"กรุณาทำรายการซื้อ-ขายโดยระมัดระวัง ห้ามโอนเงินหรือทำธุรกรรมก่อนได้รับสินค้า เว็บไซต์ไม่มีส่วนเกี่ยวข้องในการรับประกันความปลอดภัยของการซื้อ-ขาย โปรดใช้วิจารณญาณในการตัดสินใจซื้อ-ขาย และควรพบกับผู้ซื้อหรือผู้ขายด้วยตนเองเพื่อความปลอดภัยและเชื่อถือได้"}
        </div>
      </div>
    </div>
  )
}

export default WarningSection