import Image from 'next/image';
import React, { useEffect, useState } from 'react'

type Props = {
  dataImage: any;
}

const GalleryImage = ({ dataImage }: Props) => {
  const [imageSelected, setImageSelected] = useState("")

  useEffect(() => {
    if (dataImage && dataImage.length) {
      setImageSelected(dataImage[0])
    }
  }, [dataImage])

  return (
    <div>
      
      {/* main image */}
      <div className={`w-full relative pt-[100%]`}>
        <Image
          src={imageSelected}
          alt=''
          fill
          style={{ objectFit: "cover" }}
          className={`w-full h-full top-0 left-0 rounded-lg cursor-pointer`}
        />
      </div>

      {/* list image */}
      <div className={`mt-3 flex  gap-3 overflow-y-scroll w-full pb-3 scrollbar-color-purple overscroll-x-none snap-x  `}>
        {dataImage && dataImage.length ? dataImage.map((item: any, key: any) => (
          <div
            key={key}
            className={`w-full pt-[20%] pl-[20%] relative transition-all hover:scale-102 snap-start rounded-md `}
            onClick={() => setImageSelected(item)}
          >
            <Image
              src={item}
              alt=''
              fill
              style={{ objectFit: "cover" }}
              className={`rounded-md cursor-pointer w-full h-full top-0 left-0`}
            />
          </div>
        )) : ""}
      </div>
    </div>
  )
}

export default GalleryImage