import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
const SignUp = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div id="my_modal_6" >
        <div className="modal-box">
          <form method="dialog">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          </form>
          <h3 className="font-bold text-lg">SignUp</h3>
          <div className='mt-4 space-y-2'>
            <span>
              Name
            </span>
            <br />
            <input type='text' placeholder='Enter Name'
              className='w-70 px-3 py-1 border rounded-md outline-none' style={{ width: "100% " }} />
          </div>
          <div className='mt-4 space-y-2'>
            <span>
              Email
            </span>
            <br />
            <input type='email' placeholder='Enter Email'
              className='w-70 px-3 py-1 border rounded-md outline-none' style={{ width: "100% " }} />
          </div>
          <div className='mt-4 space-y-2'>
            <span>
              Password
            </span>
            <br />
            <input type='password' placeholder='Enter Password'
              className='w-70 px-3 py-1 border rounded-md outline-none' style={{ width: "100% " }} />
          </div>
          <div className='flex justify-between mt-4'>
            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300'>SignUp</button>
            <p>
              Have Account?
              <button onClick={() => document.getElementById('my_modal_3').showModal()} className='underline text-blue-500 cursor-pointer'>
                Login
              </button>
              <Login />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
