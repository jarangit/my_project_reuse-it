import React, { createContext, useState, useEffect } from 'react'

export const AppContext = createContext("")

const AppState = ({ children }: any) => {
  const [showModalCat, setShowModalCat] = useState(true)

  return (
    // @ts-ignore
    <AppContext.Provider value={{
      showModalCat, setShowModalCat
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppState