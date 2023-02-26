import SigningForm from '@/components/form/login/signinForm'
import RegisterForm from '@/components/form/login/registerForm'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '@/context/appState'

type Props = {}

const LoginPage = (props: Props) => {
  const [toggleForm, setToggleForm] = useState("LOGIN")
  const { showModalCat, setShowModalCat, loading, setLoading }: any = useContext(AppContext)

  const onToggleForm = (mode:string) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setToggleForm(mode)

    }, 500);
  }
  useEffect(() => {
   
  }, [setToggleForm])
  
  return (
    <div>
      <div className={`my_container`}>
        <div className='flex justify-center'>
          {toggleForm == "LOGIN" ? (
            <SigningForm onToggle = {() => onToggleForm("REGIS")}/>
          ) : (
            <RegisterForm onToggle = {() => onToggleForm("LOGIN")}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoginPage