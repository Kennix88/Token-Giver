export interface task {
  _id?: string
  type: 'social' | 'special' | 'friend'
  category: 'telegram' | 'facebook' | 'youtube' | 'x' | 'visit'
  title: string
  point: number
  href: string
  recuring: 'one_time' | 'multiple'
  createdAt?: string | Date
  isComplete?: boolean
  updatedAt?: string | Date
}
