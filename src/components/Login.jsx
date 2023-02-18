import React from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate= useNavigate()

  const handleLogin=(e)=>{
    e.preventDefault()
    navigate('product-listing/documentation')
  }
  return (
    <div className='w-full h-screen grid grid-flow-col grid-cols-6'>
      <div className='w h-full grid col-span-2 bg-white shadow-xl py-8 px-12'>
        <div className='medium-box-divider h-full w-full flex flex-col items-center justify-center '>
          <form onSubmit={(e)=>handleLogin(e)} className='w-full mt-12 medium-box-divider h-96 px-2 py-6 flex flex-col items-center justify-start'>
            <span className='text-[1.5rem] w-full font-bold thin-box-divider mb-12 font-plus tracking-tight text-slate-800'>Welcome back !</span>
            <input type="text" className='outline-blue-500 border-2 mb-4 w-full border-solid border-slate-300/80 rounded-md h-10 px-3 placeholder:font-plus ' placeholder='Email'/>
            <input type="text" className='outline-blue-500 border-2 w-full mb-4 border-solid border-slate-300/80 rounded-md h-10 px-3 placeholder:font-plus ' placeholder='Password'/>
            <div className='h-8 w-full thin-box-divider mb-4 flex items-center justify-between'>
              <div className='box-border flex items-center justify-between gap-2'>
                <input type="checkbox" name="remember-me" id=""/>
                <span className='text-xs font-plus text-slate-500/70'>Remember me</span>
              </div>
              <a href="" className='text-xs font-plus text-blue-500 font-medium'>Forgot your password?</a>
            </div>
            <button type="submit" className='h-12 w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out rounded-md text-white font-plus text-center'>Login</button>
          </form>
        </div>
      </div>
      <div className='bg-slate-100 box-border col-span-4 w-full h-full'>
        
        
      </div>
    </div>
  );
}

export default Login;
