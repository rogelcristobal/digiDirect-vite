import React ,{useState}from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate= useNavigate()
  const [isChecked,setIsChecked]=useState(false)
  const handleToggleCheckbox=()=>{
    setIsChecked(prev=>prev=!isChecked)
  }
  const handleLogin=(e)=>{
    e.preventDefault()
    navigate('product-listing/documentation')
  }
  return (
    <div className='w-full h-screen grid grid-flow-col grid-cols-6'>
      <div className='w h-full grid col-span-2 bg-white shadow-xl py-8 px-[4rem]'>
        <div className=' h-full w-full flex flex-col items-center justify-end '>
          <form onSubmit={(e)=>handleLogin(e)} className='w-full mb-6  h-fit px-2 py-6 flex flex-col items-center justify-start box-border '>
            <div className='mb-12 flex flex-col items-start justify-center w-full'>
              <span className='text-[1.7rem] w-full font-bold  font-plus tracking-tight text-slate-800 mb-2'>Welcome back !</span>
              <span className='text-sm font-medium font-plus text-slate-800 tracking-tight'>Let's create some digiDirect product listing with ease.</span>

            </div>
            <input type="text" className='outline-blue-500 border-2 mb-6 w-full border-solid border-slate-300/80 rounded-md h-10 px-3 placeholder:font-plus text-sm placeholder:text-sm' placeholder='Email'/>
            <input type="password" className='outline-blue-500 border-2 w-full mb-4 border-solid border-slate-300/80 rounded-md h-10 px-3 placeholder:font-plus text-sm placeholder:text-sm ' placeholder='Password'/>
            <div className='h-8 w-full mb-8 flex items-center justify-between'>
              <div className='box-border flex items-center justify-between gap-2'>
                <input type="checkbox" name="remember-me" checked={isChecked} onChange={handleToggleCheckbox}/>
                <span className={`text-xs font-plus transition-all duration-300 ease-in-out ${isChecked?'text-slate-900':'text-slate-500/70'}`}>Remember me</span>
              </div>
              <a href="" className='text-xs font-plus text-blue-500 font-medium'>Forgot your password?</a>
            </div>
            <button type="submit" className='h-12 w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out rounded-md text-white font-plus text-sm text-center'>Login</button>
            
            {/* login options */}
            <div className='thin-top-divider mt-8 relative h-fit py-8 w-full '>
              <span className='absolute left-1/2 -translate-x-1/2 text-center -top-[0.8rem] text-[0.7rem] font-plus font-semibold py-1 px-3 text-slate-500/60 bg-white '>Or , Log in with</span>
              <button type='button' className='h-12 w-full  medium-box-divider rounded-md font-plus font-medium text-xs flex items-center justify-center gap-4'>
                <div className=' w-fit h-fit'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="23" viewBox="0 0 24 24" width="23"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
                </div>
                <span>Sign up with google</span></button>

            </div>

            {/* sign in page*/}
            <div className='flex item-start justify-center text-xs font-plus font-medium'>
              <span>Don't have an account? <a href="" className='underline underline-blue-500 text-blue-500 underline-offset-2'>Sign in here</a></span>
            </div>

          </form>

        </div>
      </div>
      {/* image */}
      <div className='bg-slate-100 box-border col-span-4 w-full h-full'>
        
        
      </div>
    </div>
  );
}

export default Login;
