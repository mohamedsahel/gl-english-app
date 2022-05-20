import { Link, useParams } from 'react-router-dom'
import { categories } from '../data'

console.log('categories :>> ', categories)

export default function IndexRoute() {
  return (
    <div className='mt-12 mb-16'>
      <h2 className='text-3xl font-medium text-gray-800'>
        Let's hunt some new vocabulary 😉
      </h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-white mt-8'>
        {categories.map((categorie, index) => (
          <Link
            to={`/play/${categorie.id}`}
            key={categorie.id}
            className={`rounded-xl text-2xl text-center px-6 py-16 shadow-lg shadow-slate-200 hover:scale-[1.02] duration-300 transition ${
              index === 0 ? 'sm:col-span-2 text-gray-800' : ''
            }`}
            style={{
              backgroundColor: `${categorie.color}`,
            }}>
            <categorie.icon className='text-4xl mx-auto' />
            <div className='font-medium pt-3'>{categorie.name}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
