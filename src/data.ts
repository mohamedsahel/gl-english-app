import colors from 'tailwindcss/colors'
import {
  FaBriefcase,
  FaLaptop,
  FaLeaf,
  FaHome,
  FaDog,
} from 'react-icons/fa'

export const categories = [
  {
    id: 'general',
    name: 'General',
    color: colors.white,
    icon: FaHome,
  },
  {
    id: 'animals',
    name: 'Animals',
    color: colors.yellow['400'],
    icon: FaDog,
  },
  {
    id: 'colors',
    name: 'Colors',
    color: colors.green['400'],
    icon: FaLeaf,
  },
  {
    id: 'business',
    name: 'Business',
    color: colors.blue['400'],
    icon: FaBriefcase,
  },
  {
    id: 'technology',
    name: 'Technology',
    color: colors.purple['400'],
    icon: FaLaptop,
  },
]
