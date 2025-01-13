'use client'

import TaskIcon from '@/app/(telegram)/game/tasks/_components/TaskIcon.tsx'
import { PartnersInteface } from '@/types/partners.inteface.ts'
import { TaskInterface } from '@/types/task.interface.ts'
import addSuffixToNumber from '@/utils/addSuffixToNumber.util.ts'

export default function Task({
  task,
  partner,
}: {
  task: TaskInterface
  partner: PartnersInteface | null
}) {
  return (
    <div
      className={`flex p-4 flex-row gap-2 col-span-2 justify-between items-center`}>
      <div className="flex flex-row gap-2 items-center ">
        <div className="w-[40px] h-[40px]">
          <TaskIcon task={task} partner={partner} />
        </div>
        <div className="flex flex-col gap-1">
          <div className="font-bold flex flex-row gap-1 text-[14px] items-center">
            <div>{task.title}</div>
          </div>
          <div className="text-[12px] flex flex-row gap-1 items-center opacity-80 font-medium">
            {task.tokens && '+' + addSuffixToNumber(task.tokens, 2) + ' $TGC'}{' '}
            {task.deamonds && '+' + addSuffixToNumber(task.deamonds, 2) + ' 💎'}
          </div>
        </div>
      </div>
      <button className="font-medium text-[14px] flex items-center justify-center bg-primary text-on-primary px-4 py-2 rounded-md">
        Go
      </button>
    </div>
  )
}
