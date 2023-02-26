import React, { useContext } from 'react'
import Menu from './menu';
import Footer from './footer';
import ShowAllCatModal from '../modals/category/showAllCatModal';
import { AppContext } from '@/context/appState';
import MainLoading from '../loading/mainLoading';

type Props = {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {

  const { showModalCat, setShowModalCat, loading }: any = useContext(AppContext)


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
      <MainLoading onShow={loading} />
    </div>
  )
}

export default Layout