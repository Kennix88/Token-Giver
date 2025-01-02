export interface TaskInterface {
  id: number
  action: TaskActionEnum
  title: string
  description: string
  progress: TaskProgressInterface
  rewards: TaskRewardInterface[]
  category: TaskCategoryEnum
  data: string
  icon: TaskIconEnum
  type: TaskTypeEnum
  isPremium: boolean
  partnerIconUrl: string | null
  experedAt: Date | null
}

export interface TaskProgressInterface {
  current: number
  total: number
  isClaimed: boolean
  status: TaskStatusEnum
}

export interface TaskRewardInterface {
  code: TaskRewardCodeEnum
  amount: number
}

export enum TaskRewardCodeEnum {
  token = 'token',
  deamond = 'deamond',
}

export enum TaskActionEnum {
  customEmoji = 'customEmoji',
  link = 'link',
  copy = 'copy',
  check = 'check',
  wallet = 'wallet',
}
export enum TaskTypeEnum {
  social = 'social',
  emojiName = 'emojiName',
  customEmoji = 'customEmoji',
  boost = 'boost',
  referral = 'referral',
  website = 'website',
  wallet = 'wallet',
}
export enum TaskCategoryEnum {
  limited = 'limited',
  inGame = 'inGame',
  daily = 'daily',
  partners = 'partners',
  quests = 'quests',
}

export enum TaskStatusEnum {
  start = 'start',
  inProgress = 'inProgress',
  finished = 'finished',
}

export enum TaskIconEnum {
  emoji = 'emoji',
  boost = 'boost',
  friends = 'friends',
  age = 'age',
  robot = 'robot',
  premium = 'premium',
  other = 'other',
  x = 'x',
  telegram = 'telegram',
  youtube = 'youtube',
  tiktok = 'tiktok',
  instagram = 'instagram',
  facebook = 'facebook',
  discord = 'discord',
  binance = 'binance',
  vk = 'vk',
  github = 'github',
  kucoin = 'kucoin',
  coinmarketcap = 'coinmarketcap',
  coinbase = 'coinbase',
  viber = 'viber',
  whatsapp = 'whatsapp',
}
