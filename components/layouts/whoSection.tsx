import React from 'react'

type Props = {}

const whoSection = (props: Props) => {
  return (
    <div className='bg-black text-white py-24'>
      <div className={`my_container`}>
        <div className={`text-5xl font-bold text-center`}>REUSE-IT</div>
        <div className={`max-w-[800px] mx-auto text-center mt-6 text-lg`}>{`"เรามุ่งเน้นเป็นเว็บไซต์ที่เป็นสื่อกลางในการช่วยให้ผู้ใช้งานสามารถซื้อ-ขายของมือสองได้อย่างสะดวกและรวดเร็ว ด้วยระบบที่ง่ายต่อการใช้งาน และการค้นหาสินค้าที่ตรงตามความต้องการของลูกค้า"`}</div>
      </div>
    </div>
  )
}

export default whoSection