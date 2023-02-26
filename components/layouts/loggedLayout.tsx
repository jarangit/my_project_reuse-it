import React, { useContext } from 'react'
import MainLoading from '../loading/mainLoading';
import ShowAllCatModal from '../modals/category/showAllCatModal';
import Footer from './footer';
import Menu from './menu';
import { AppContext } from '@/context/appState';
import { BsLaptop } from 'react-icons/bs';
import CardUser from '../page/user/cardUser';

type Props = {
  children: JSX.Element;

}

const LoggedLayout = ({ children }: Props) => {
  const { showModalCat, setShowModalCat, loading }: any = useContext(AppContext)

  return (
    <div>
      <Menu />
      <div className={`min-h-screen`}>
        <div>
          <div className='my_container  min-h-screen '>
            <div>
              <CardUser />
            </div>
            <div className={`grid grid-cols-6 mt-10 border-t border-gray py-6 gap-3`}>
              <div className={`col-span-1  drop-shadow-lg rounded-lg min-h-screen  bg-white pl-5 pt-5`}>
                <div className={`flex flex-col gap-2`}>
                  <div className='flex gap-1 items-center'>
                    <div>
                      <BsLaptop size={20} />
                    </div>
                    <div>
                      Dashboard
                    </div>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <div>
                      <BsLaptop size={20} />
                    </div>
                    <div>
                      My product
                    </div>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <div>
                      <BsLaptop size={20} />
                    </div>
                    <div>
                      My product
                    </div>
                  </div>
                </div>
              </div>
              <div> {children}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* modal zone */}
      {/* modal zone */}
      <ShowAllCatModal title={'หมวดหมู่ทั้งหมด'} handleClose={() => setShowModalCat(false)} open={showModalCat} />
      <MainLoading onShow={loading} />
    </div>
  )
}

export default LoggedLayout