import React from 'react'

type Props = {}

const WhySection = (props: Props) => {
  return (
    <div className='bg-gray'>
      <div className={`my_container py-24 text-center`}>
        <div className={`font-bold text-5xl`}>ทำไมต้องเลือกเรา</div>
        <div className={`mt-3 text-lg w-[70%] mx-auto`}>
          {`การลงขายที่เว็บไซต์ของเราเพิ่มโอกาสให้ลูกค้าพบสินค้าของคุณได้อย่างสะดวกสบาย และช่วยเชื่อมต่อกับลูกค้าใหม่ๆ ได้อย่างมีประสิทธิภาพ นอกจากนี้ยังช่วยเพิ่มโอกาสในการขายสินค้าของคุณ และสร้างความพึงพอใจในลูกค้าของคุณเช่นกัน ดังนั้นการลงขายที่เว็บไซต์ของเราเป็นวิธีที่ดีที่สุดในการเพิ่มโอกาสการขายสินค้าของคุณ.`}
        </div>

      </div>
    </div>
  )
}

export default WhySection