export interface FriendsDataInterface {
  allTokens: number
  allFriends: number
  list: FriendsInterface[]
}

export interface FriendsInterface {
  id: number
  name: string
  tokens: number
  isVerified: boolean
  photoUrl: string | null
}
