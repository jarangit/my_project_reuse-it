import React from 'react'

type Props = {
  children: JSX.Element;
}

const PepperWhite = ({ children }: Props) => {
  return (
    <div className={`bg-white rounded-lg drop-shadow-lg p-9 w-full h-full`}>
      {children}
    </div>
  )
}

export default PepperWhite