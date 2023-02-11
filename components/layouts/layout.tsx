import React from 'react'
import Menu from './menu';
import Footer from './footer';

type Props = {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Menu />
      <div className={`min-h-screen`}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout