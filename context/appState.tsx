import React, { createContext, useState, useEffect } from 'react'

export const AppContext = createContext("")

const AppState = ({ children }: any) => {
  const [showModalCat, setShowModalCat] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    // @ts-ignore
    <AppContext.Provider value={{
      showModalCat, setShowModalCat,
      loading, setLoading
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppState