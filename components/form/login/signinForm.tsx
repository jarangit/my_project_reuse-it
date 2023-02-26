import React from 'react'
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

type Props = {
  onToggle: any;
}

const SigningForm = ({onToggle}: Props) => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div>
      <div className='p-6 rounded-lg  max-w-[400px] drop-shadow-lg bg-white'>
        <div className={`uppercase font-semibold text-green text-xl text-center`}>Reuse-It</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={`flex flex-col gap-4 mt-6`}>
            <div>

              <label htmlFor="">
                Email
              </label>
              <input defaultValue="" {...register("Email")} placeholder='Your email' className={`input_outline w-full`} />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input {...register("password", { required: true })} className={`input_outline w-full`} placeholder='Password' />
            </div>
            <div>
              <button className='btn_green w-full'>Login</button>
            </div>
          </div>

        </form>
        <div className='text-sm text-center mt-2' >
          ถ้ายังไม่มีบัญชีผู้ใช้
          <span className='text-green underline cursor-pointer' onClick={() => onToggle()}> ลงทะเบียน</span>
        </div>

        <div className={`text-gray-dark text-center mt-3`}>or</div>
        <div className='btn_outline_green flex gap-3 justify-center text-black items-center mt-5'>
          <div>
            <FcGoogle size={20} />
          </div>
          <div>Google</div>
        </div>

      </div>
    </div>
  )
}

export default SigningForm