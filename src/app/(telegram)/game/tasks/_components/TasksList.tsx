'use client'
import { TaskInterface } from '@/types/task.interface.ts'
import addSuffixToNumber from '@/utils/addSuffixToNumber.util.ts'
import getRandomEmojiAvatar from '@/utils/getRandomEmojiAvatar.ts'
import Image from 'next/image'

export default function TasksList({ list }: { list: TaskInterface[] }) {
  if (list.length === 0) {
    return (
      <div className="flex flex-row items-center justify-center">
        No tasks yet
      </div>
    )
  }

  return (
    <div className="flex flex-col bg-surface-container-l2 rounded-md">
      {list.map((task, index) => (
        <div
          key={task.id}
          className={`flex p-4 flex-row gap-2 col-span-2 justify-between items-center ${index + 1 === list.length ? '' : 'border-b border-on-surface border-opacity-10'}`}>
          <div className="flex flex-row gap-2 items-center ">
            <div className="relative flex justify-center items-center p-1 rounded-md bg-surface-container w-[40px] h-[40px]">
              {task.partnerIconUrl ? (
                <Image
                  src={task.partnerIconUrl}
                  alt=""
                  width={40}
                  height={40}
                  className={'absolute rounded-md'}
                />
              ) : (
                getRandomEmojiAvatar()
              )}
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-bold flex flex-row gap-1 text-[14px] items-center">
                <div>{task.title}</div>
              </div>
              <div className="text-[12px] flex flex-row gap-1 items-center opacity-80 font-medium">
                {task.tokens &&
                  '+' + addSuffixToNumber(task.tokens, 2) + ' $TGC'}{' '}
                {task.deamonds &&
                  '+' + addSuffixToNumber(task.deamonds, 2) + ' 💎'}
              </div>
            </div>
          </div>
          <div className="font-medium text-[18px] flex items-center justify-center">
            click
          </div>
        </div>
      ))}
    </div>
  )
}
