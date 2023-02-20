import React from 'react'

type Props = {}

const WarningSection = (props: Props) => {
  return (
    <div className='py-24'>
      <div className={`my_container border p-3 border-red rounded-xl bg-pink`}>
        <div className={`text-5xl font-bold`}>คำเตือน</div>
        <div className={`text-red text-lg font-semibold`}>
          {"กรุณาทำรายการซื้อ-ขายโดยระมัดระวัง ห้ามโอนเงินหรือทำธุรกรรมก่อนได้รับสินค้า เว็บไซต์ไม่มีส่วนเกี่ยวข้องในการรับประกันความปลอดภัยของการซื้อ-ขาย โปรดใช้วิจารณญาณในการตัดสินใจซื้อ-ขาย และควรพบกับผู้ซื้อหรือผู้ขายด้วยตนเองเพื่อความปลอดภัยและเชื่อถือได้"}
        </div>
      </div>
    </div>
  )
}

export default WarningSection