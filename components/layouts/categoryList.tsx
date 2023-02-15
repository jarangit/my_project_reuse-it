import { categoryList } from '@/constants/categoryList'
import { AppContext } from '@/context/appState'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { CgMusicSpeaker } from 'react-icons/cg'
type Props = {}

const CategoryList = (props: Props) => {
  const { push } = useRouter()
  const { setShowModalCat }: any = useContext(AppContext)

  const onChangePage = (id: number) => {
    push(`/category/${id}`)
    setShowModalCat(false)
  }
  return (
    <div className={`flex gap-3  w-[80%] justify-center mx-auto flex-wrap`}>
      {categoryList.map((item: any, key: any) => (
        <div key={key} className={`border-2 w-28 flex flex-col justify-center items-center gap-3 py-3 rounded-xl hover_green`} onClick={() => onChangePage(item.id)}>
          <div>{item.icon}</div>
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  )
}

export default CategoryList