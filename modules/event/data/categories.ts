import { Music, Code, Briefcase, Palette, Utensils, Heart, Trophy, Camera, Gamepad2, Microscope, Plane, Book } from 'lucide-react'

export interface Category {
  id: string
  name: string
  icon: React.ElementType
  count: number
  color: string
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Music',
    icon: Music,
    count: 2450,
    color: 'text-pink-500'
  },
  {
    id: '2',
    name: 'Technology',
    icon: Code,
    count: 1820,
    color: 'text-blue-500'
  },
  {
    id: '3',
    name: 'Business',
    icon: Briefcase,
    count: 1540,
    color: 'text-purple-500'
  },
  {
    id: '4',
    name: 'Art & Design',
    icon: Palette,
    count: 980,
    color: 'text-orange-500'
  },
  {
    id: '5',
    name: 'Food & Drink',
    icon: Utensils,
    count: 1230,
    color: 'text-green-500'
  },
  {
    id: '6',
    name: 'Health',
    icon: Heart,
    count: 876,
    color: 'text-red-500'
  },
  {
    id: '7',
    name: 'Sports',
    icon: Trophy,
    count: 1650,
    color: 'text-yellow-500'
  },
  {
    id: '8',
    name: 'Photography',
    icon: Camera,
    count: 720,
    color: 'text-violet-500'
  },
  {
    id: '9',
    name: 'Gaming',
    icon: Gamepad2,
    count: 1340,
    color: 'text-indigo-500'
  },
  {
    id: '10',
    name: 'Science',
    icon: Microscope,
    count: 560,
    color: 'text-teal-500'
  },
  {
    id: '11',
    name: 'Travel',
    icon: Plane,
    count: 940,
    color: 'text-sky-500'
  },
  {
    id: '12',
    name: 'Education',
    icon: Book,
    count: 1120,
    color: 'text-emerald-500'
  }
]
