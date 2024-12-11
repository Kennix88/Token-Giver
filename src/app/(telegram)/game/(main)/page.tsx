'use client'
import { task } from '@app/app/(telegram)/_types/task.interface'
import BalanceCard from '@app/app/(telegram)/game/(main)/_components/BalanceCard'
import SwipeableSocialCards from '@app/app/(telegram)/game/(main)/_components/SwipeableSocialCards'
import Task from '@app/app/(telegram)/game/(main)/_components/Task'
import { useState } from 'react'

type props = {
  item: task
  isComplete: boolean
}
export default function Home() {
  const [tabValue, setTabValue] = useState('socials')
  // const [trigger] = useMarkAsOldMutation()
  // const user = useContext(MagicCP)
  // console.log(user?.user)
  // useEffect(() => {
  //   if (user?.user?.is_newcomer) {
  //     trigger(undefined)
  //   }
  // }, [user?.user])
  const data: { data: props[] } = {
    data: [
      {
        item: {
          _id: '1',
          type: 'social',
          category: 'telegram',
          title: 'Subs to my channel',
          href: 'https://t.me/SiamDev',
          recuring: 'one_time',
          point: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
          isComplete: true,
        },
        isComplete: true,
      },
      {
        item: {
          _id: '2',
          type: 'special',
          category: 'telegram',
          title: 'Subs to my channel',
          href: 'https://t.me/SiamDev',
          recuring: 'one_time',
          point: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
          isComplete: false,
        },
        isComplete: false,
      },
      {
        item: {
          _id: '3',
          type: 'social',
          category: 'x',
          title: 'Subs to my channel',
          href: 'https://t.me/SiamDev',
          recuring: 'one_time',
          point: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
          isComplete: false,
        },
        isComplete: false,
      },
      {
        item: {
          _id: '4',
          type: 'friend',
          category: 'x',
          title: 'Subs to my channel',
          href: 'https://t.me/SiamDev',
          recuring: 'one_time',
          point: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
          isComplete: false,
        },
        isComplete: false,
      },
    ],
  }

  const taskFilter = data?.data?.filter((item: props) =>
    item.item?.type === tabValue ? item : null,
  )

  console.log(tabValue, JSON.stringify(taskFilter, null, 2))
  return (
    <div className="min-h-screen flex flex-col gap-4">
      <BalanceCard balance={5000} />
      <div className="mt-4">
        <SwipeableSocialCards />
      </div>
      <p className="font-montserrat text-xl font-bold text-white">Tasks</p>
      <div className="bg-white bg-opacity-10 rounded-xl p-2 flex items-center gap-2">
        <button
          onClick={() => setTabValue('social')}
          className={`${tabValue === 'social' ? 'text-black flex-1 font-bold font-montserrat bg-yellow-500 px-2 rounded-md' : 'text-white'} `}>
          Socials
        </button>
        <button
          onClick={() => setTabValue('friend')}
          className={`${tabValue === 'friend' ? 'text-black flex-1 font-bold font-montserrat bg-yellow-500 px-2 rounded-md' : 'text-white'} `}>
          Friends
        </button>
        <button
          onClick={() => setTabValue('special')}
          className={`${tabValue === 'special' ? 'text-black flex-1 font-bold font-montserrat bg-yellow-500 px-2 rounded-md' : 'text-white'} `}>
          Specials
        </button>
      </div>
      {taskFilter && taskFilter.length > 0 && (
        <Task category={tabValue} task={taskFilter} />
      )}

      {/*<p className="font-montserrat text-xl font-bold text-white my-2">*/}
      {/*  Your rewards*/}
      {/*</p>*/}
      {/*<RewardsCards />*/}
      {/*<RewardsCards />*/}
      {/*<RewardsCards />*/}
      {/*<RewardsCards />*/}
    </div>
  )
}
