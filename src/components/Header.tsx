import { useScore } from '../store'
import logo from '../logo.svg'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  const score = useScore((state: any) => state.score)
  return (
    <div className='text-white'>
      <div className='flex items-center justify-between rounded-full bg-violet-500 py-2 px-6'>
        <Link to='/'>
          <img src={logo} alt='Logo' className='w-28 sm:w-36 h-12' />
        </Link>
        <div>
          <div className='flex items-center text-lg sm:text-2xl font-bold'>
            Score: {score}
            <FaStar className='ml-1  text-yellow-300' />
          </div>
        </div>
      </div>
    </div>
  )
}
