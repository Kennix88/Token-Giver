'use client'

import { TaskInterface } from '@/types/task.interface.ts'
import getRandomEmojiAvatar from '@/utils/getRandomEmojiAvatar.ts'
import Image from 'next/image'

export default function TasksIcon({ task }: { task: TaskInterface }) {
  return (
    <div className="relative flex justify-center items-center p-1 rounded-md bg-surface-container w-[40px] h-[40px]">
      {task.partnerIconUrl ? (
        <Image
          src={task.partnerIconUrl}
          alt="Partner icon"
          width={40}
          height={40}
          className={'absolute rounded-md'}
        />
      ) : (
        getRandomEmojiAvatar()
      )}
    </div>
  )
}
