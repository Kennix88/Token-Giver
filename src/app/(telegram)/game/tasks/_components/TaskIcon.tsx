'use client'

import { IconsList } from '@/const/IconsList.tsx'
import { IconsEnum } from '@/types/icons.enum.ts'
import { PartnersInteface } from '@/types/partners.inteface.ts'
import { TaskInterface } from '@/types/task.interface.ts'
import Image from 'next/image'

export default function TaskIcon({
  task,
  partner,
}: {
  task: TaskInterface
  partner: PartnersInteface | null
}) {
  const iconObj =
    IconsList.find((el) => el.key === task.icon) ||
    IconsList.find((el) => el.key === IconsEnum.other)

  return (
    <div
      className={`relative flex justify-center items-center rounded-md w-[40px] h-[40px]`}
      style={{ backgroundColor: iconObj?.color }}>
      {iconObj?.icon}
      {task.parnterId && partner && (
        <Image
          src={partner.iconUrl}
          alt={'partner icon'}
          width={18}
          height={18}
          className={`absolute rounded-full right-[1px] bottom-[1px] border-solid border-2`}
          style={{ borderColor: iconObj?.color }}
        />
      )}
    </div>
  )
}
