import logo from './logo.svg'
import { Outlet } from 'react-router-dom'
import { useScore } from './store'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'


function Root() {
  const score = useScore((state: any) => state.score)

  return (
    <div className='bg-gray-50 min-h-screen'>
      <div className='max-w-5xl mx-auto p-4'>
        <div className='text-white'>
          <div className='flex items-center justify-between rounded-full bg-violet-500 py-2 px-6'>
            <Link to='/'>
              <img
                src={logo}
                alt='Logo'
                className='w-28 sm:w-36 h-12'
              />
            </Link>
            <div>
              <div className='flex items-center text-lg sm:text-2xl font-bold'>
                Score: {score}
                <FaStar className='ml-1  text-yellow-300' />
              </div>
            </div>
          </div>
        </div>
        <img src={logo} alt='' width='40px' height='40px' />
        <Outlet />
      </div>
    </div>
  )
}

export default Root
