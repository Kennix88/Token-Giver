'use client'
import Task from '@/app/(telegram)/game/tasks/_components/Task.tsx'
import { PartnersInteface } from '@/types/partners.inteface.ts'
import { TaskInterface } from '@/types/task.interface.ts'
import Image from 'next/image'
import { useTranslations } from 'use-intl'

export default function TasksList({
  tasks,
  partners,
}: {
  tasks: TaskInterface[]
  partners: PartnersInteface[]
}) {
  const t = useTranslations('game.tasks')
  if (tasks.length === 0) {
    return (
      <div className="flex flex-row items-center justify-center">
        {t('noTasksYet')}
      </div>
    )
  }

  const groupedTasks = tasks.reduce(
    (acc: { [key: string]: TaskInterface[] }, task: TaskInterface) => {
      const partnerId = task.parnterId
      if (partnerId === null) {
        if (!acc['null']) {
          acc['null'] = []
        }
        acc['null'].push(task)
      } else {
        if (!acc[partnerId]) {
          acc[partnerId] = []
        }
        acc[partnerId].push(task)
      }
      return acc
    },
    {},
  )

  return (
    <div className="flex flex-col gap-4">
      {Object.keys(groupedTasks).map((partnerId) => {
        if (partnerId === 'null') {
          return (
            groupedTasks['null'].length > 0 && (
              <div
                key="null"
                className="flex flex-col bg-surface-container-l2 rounded-md bg-opacity-70">
                <div className={'divide-y divide-on-surface divide-opacity-10'}>
                  {'null' in groupedTasks &&
                    groupedTasks['null'].map((task) => (
                      <Task
                        key={task.id}
                        task={task}
                        partner={
                          partners.find(
                            (partner) => partner.id === task.parnterId,
                          ) || null
                        }
                      />
                    ))}
                </div>
              </div>
            )
          )
        } else {
          const partner = partners.find(
            (partner) => partner.id === parseInt(partnerId),
          )
          return (
            groupedTasks[partnerId].length > 0 && (
              <div
                key={partnerId}
                className={`relative flex flex-col bg-surface-container-l2 rounded-md bg-opacity-70`}>
                {partner?.bgUrl && (
                  <>
                    <Image
                      src={partner?.bgUrl}
                      alt={'partner bg'}
                      fill
                      className={'top-0 left-0 w-full h-full rounded-md'}
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      className={
                        'top-0 left-0 w-full h-full rounded-md opacity-40 z-[1] bg-surface-container-l2 absolute'
                      }></div>
                  </>
                )}
                <div
                  className={`flex flex-row gap-2 items-center px-4 pt-4 pb-2 z-[2]`}>
                  {partner?.iconUrl && (
                    <Image
                      src={partner.iconUrl}
                      alt={'partner icon'}
                      width={30}
                      height={30}
                      className={'rounded-full'}
                    />
                  )}
                  <div className={'font-bold'}>{partner!.name}</div>
                </div>
                <div
                  className={
                    'divide-y divide-on-surface divide-opacity-10 z-[2]'
                  }>
                  {groupedTasks[partnerId].map((task) => (
                    <Task
                      key={task.id}
                      task={task}
                      partner={
                        partners.find(
                          (partner) => partner.id === task.parnterId,
                        ) || null
                      }
                    />
                  ))}
                </div>
              </div>
            )
          )
        }
      })}
    </div>
  )
}
