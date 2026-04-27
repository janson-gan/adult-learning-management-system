import { NavLink } from 'react-router';
import loginImage from '../assets/images/word_cloud.png';

const Home = () => {
  return (
    <div className='flex justify-between h-screen'>
      <div className='bg-deep-blue w-full'>
        <div className='flex flex-col items-center justify-center min-h-screen gap-1'>
          <h1 className='text-white font-bold text-4xl'>
            Adult Learning Training Portal
          </h1>
          <p className='text-white text-md italic font-light tracking-widest'>
            Learning Never Stops, Start Your Journey Today
          </p>
          <p className='text-white text-md italic font-light tracking-widest'>
            Unlock the Knowledge Door
          </p>
          <img
            src={loginImage}
            alt='word cloud image'
            className='w-100 rounded-4xl mt-3'
          />
        </div>
      </div>
      <div className='bg-blue-50 w-full min-h-screen flex flex-col'>
        <div className='flex flex-col grow items-center justify-center min-h-screen w-sm mx-auto'>
          <div className='text-center mb-5'>
            <h1 className='text-3xl text-dusty-blue'>Welcome</h1>
            <p className='text-gray-500'>Login to your account to continue</p>
          </div>
          <form action='' className='flex flex-col gap-1'>
            <label htmlFor='email' className='font-semibold'>
              Email
            </label>
            <input
              type='email'
              name='email'
              className='border-2 border-olive-400 rounded-lg p-1.5 focus:outline-none text-gray-800 bg-slate-100'
            />
            <label htmlFor='password' className='font-semibold'>
              Password
            </label>
            <input
              type='password'
              name='password'
              className='border-2 border-olive-400 rounded-lg p-1.5 focus:outline-none text-gray-800 bg-slate-100'
            />
            <NavLink
              to={'/forgotpassword'}
              className='text-xs text-blue-800 font-bold text-right'
            >
              Forgot password?
            </NavLink>
            <div>
              <button
                type='submit'
                className=' bg-deep-blue text-white rounded-2xl w-sm mt-2 p-2 hover:bg-deep-blue-600 cursor-pointer shadow-xl/30'
              >
                Submit
              </button>
            </div>
          </form>
          <div className='flex flex-col text-center gap-5'>
            <span className='mt-8'>Or</span>
            <p>
              <NavLink to={'/register'} className='text-blue-800 font-bold'>
                Register
              </NavLink>{' '}
              A New Account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
