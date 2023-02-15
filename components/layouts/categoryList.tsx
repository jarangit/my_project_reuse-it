import { categoryList } from '@/constants/categoryList'
import React from 'react'
import { CgMusicSpeaker } from 'react-icons/cg'
type Props = {}

const CategoryList = (props: Props) => {
  return (
    <div className={`flex gap-3  w-[80%] justify-center mx-auto flex-wrap`}>
      {categoryList.map((item: any, key: any) => (
        <div key={key} className={`border-2 w-28 flex flex-col justify-center items-center gap-3 py-3 rounded-xl hover_green`}>
          <div>{item.icon}</div>
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  )
}

export default CategoryList