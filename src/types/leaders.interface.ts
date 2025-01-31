export interface LeadersDataInterface {
  user: LeadersInterface
  list: LeadersInterface[]
}

export interface LeadersInterface {
  id: number
  name: string
  place: number
  score: number
  isVerified: boolean
  photoUrl: string | null
}
