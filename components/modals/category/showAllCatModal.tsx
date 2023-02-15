import React, { useContext } from 'react'
import Modal from '../modal'
import { categoryList } from '@/constants/categoryList';
import { useRouter } from 'next/router';
import { AppContext } from '@/context/appState';

type Props = {
  title: string;
  handleClose: any;
  open: boolean;
  onSubmit?: any;
}

const ShowAllCatModal = ({ title, handleClose, open, onSubmit }: Props) => {
  const { push } = useRouter()
  const { setShowModalCat }: any = useContext(AppContext)
  const onChangePage = (id: number) => {
    push(`/category/${id}`)
    setShowModalCat(false)
  }
  return (
    <Modal title={title} handleClose={handleClose} open={open} onSubmit={onSubmit} >
      <div className={`grid grid-cols-6 gap-3  justify-center mx-auto flex-wrap p-6`}>
        {categoryList.map((item: any, key: any) => (
          <div key={key} className={`border-2 w-24 flex flex-col justify-center items-center gap-3 py-3 rounded-xl hover_green`} onClick={() => onChangePage(item.id)}>
            <div>{item.icon}</div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </Modal>
  )
}

export default ShowAllCatModal