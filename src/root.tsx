import logo from './logo.svg'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function Root() {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <div className='max-w-5xl mx-auto p-4'>
        <Header />
        <img src={logo} alt='' width='40px' height='40px' />
        <Outlet />
      </div>
    </div>
  )
}

export default Root
