import { Link } from 'react-router-dom'
import IllustrationSrc from '../hero-illustration.svg'

export default function IndexRoute() {
  return (
    <div className='mt-12 mb-16'>
      <div className='grid md:grid-cols-2 pt-12'>
        <div className='pt-12 md:pt-24 text-center md:text-left'>
          <h2 className='text-4xl font-bold'>
            Let's hunt some new vocabularies!
          </h2>
          <Link
            to='/play'
            className='inline-block rounded-full px-8 py-3 bg-yellow-400 hover:bg-yellow-500 transition font-medium mt-8'>
            Play
          </Link>
        </div>
        <div className='mt-20 md:mt-0'>
          <img src={IllustrationSrc} className='bg-transparent' />
        </div>
      </div>
      {/* <h2 className='text-3xl font-medium text-gray-800'>
        Let's hunt some new vocabulary 😉
      </h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-white mt-8'></div> */}
    </div>
  )
}
