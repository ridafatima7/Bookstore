import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:5008/user/login', { email, password });
      console.log(res.data);
      navigate('/'); 
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit}>
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              <h3 className="font-bold text-lg">Login</h3>
              <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input 
                  type='email' 
                  placeholder='Enter Email'
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br />
                <input 
                  type='password' 
                  placeholder='Enter Password'
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              <div className='flex justify-between mt-4'>
                <button 
                  className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300'
                  type="submit"
                >
                  Login
                </button>
                <p>Not registered? <Link to='/signup'><span className='underline text-blue-500 cursor-pointer'>SignUp</span></Link></p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
