import React from 'react'
import DefaultLayout from './defaultLayout';
import LoggedLayout from './loggedLayout';

// type Props = {
//   props.children: JSX.Element;
//   userLogged: boolean;
// }

const Layout = (props: any) => {
  const { children } = props
  return children.type.layout == 'logged' ? (<LoggedLayout>{children}</LoggedLayout>) : (<DefaultLayout>{children}</DefaultLayout>)
}

export default Layout