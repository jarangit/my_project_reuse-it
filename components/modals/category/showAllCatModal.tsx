import React from 'react'
import Modal from '../modal'

type Props = {
  title: string;
  handleClose: any;
  open: boolean;
  onSubmit?: any;
}

const ShowAllCatModal = ({ title, handleClose, open, onSubmit }: Props) => {
  return (
    <Modal title={title} handleClose={handleClose} open={open} onSubmit={onSubmit} >
      <div>ShowAllCatModal</div>
    </Modal>
  )
}

export default ShowAllCatModal