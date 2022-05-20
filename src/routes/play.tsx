import { Navigate, useParams } from 'react-router-dom'
import { categories } from '../data'

const categoriesIds = categories.map((categorie) => categorie.id)

export default function PlayRoute() {
  const { categoryId } = useParams()

  if (!categoriesIds.includes(categoryId as string)) {
    return <Navigate to='/' replace />
  }

  return <div>{categoryId}</div>
}
