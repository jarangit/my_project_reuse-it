import React, { useContext } from 'react'
import Menu from './menu';
import Footer from './footer';
import ShowAllCatModal from '../modals/category/showAllCatModal';
import { AppContext } from '@/context/appState';

type Props = {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  
  const {showModalCat, setShowModalCat}:any = useContext(AppContext)


  return (
    <div>
      <Menu />
      <div className={`min-h-screen`}>
        {children}
      </div>
      <Footer />
      {/* modal zone */}
        {/* modal zone */}
        <ShowAllCatModal title={'หมวดหมู่ทั้งหมด'} handleClose={() => setShowModalCat(false)} open={showModalCat} />
    </div>
  )
}

export default Layout