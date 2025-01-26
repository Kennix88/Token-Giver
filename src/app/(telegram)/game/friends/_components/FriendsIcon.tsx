'use client'

import { IconsList } from '@/const/IconsList.tsx'
import { IconsEnum } from '@/types/icons.enum.ts'

export default function FriendsIcon({ icon }: { icon: IconsEnum }) {
  const iconObj =
    IconsList.find((el) => el.key === icon) ||
    IconsList.find((el) => el.key === IconsEnum.other)

  return (
    <div
      className={`relative flex justify-center items-center rounded-md w-[40px] h-[40px]`}
      style={{ backgroundColor: iconObj?.color }}>
      {iconObj?.icon}
    </div>
  )
}
