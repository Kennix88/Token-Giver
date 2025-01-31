import { IconsEnum } from '@/types/icons.enum.ts'

export interface InviteDataInterface {
  tgShareIviteUrl: string
  copyTgWebAppInviteUrl: string
  list: InviteListInterface[]
}

export interface InviteListInterface {
  code: string
  icon: IconsEnum
  title: string
  tokens: number
  deamonds: number
  percent: number
}
