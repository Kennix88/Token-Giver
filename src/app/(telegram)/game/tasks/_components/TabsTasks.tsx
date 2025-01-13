'use client'

import HiRiskDisclaimer from '@/app/(telegram)/game/tasks/_components/HiRiskDisclaimer.tsx'
import TasksList from '@/app/(telegram)/game/tasks/_components/TasksList.tsx'
import { IconsEnum } from '@/types/icons.enum.ts'
import { PartnersInteface } from '@/types/partners.inteface.ts'
import {
  TaskActionEnum,
  TaskCategoryEnum,
  TaskInterface,
  TaskStatusEnum,
  TaskTypeEnum,
} from '@/types/task.interface.ts'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { useTranslations } from 'use-intl'

export default function TabsTasks() {
  const t = useTranslations('game.tasks.tabs')
  const data: {
    partners: PartnersInteface[]
    tasks: TaskInterface[]
  } = {
    partners: [
      {
        id: 1,
        name: 'Paws',
        iconUrl: 'https://storage.googleapis.com/p-a-w-s/quests/emoji.png',
        bgUrl:
          'https://i.pinimg.com/originals/46/6c/4d/466c4d0ec2824e15ff7def79f8ec2789.png',
      },
      {
        id: 2,
        name: 'Partner 2',
        iconUrl: 'https://storage.googleapis.com/p-a-w-s/quests/emoji.png',
        bgUrl: null,
      },
    ],
    tasks: [
      {
        id: 1,
        title: 'Boost channel',
        description: 'description',
        tokens: 100,
        deamonds: 1,
        category: TaskCategoryEnum.inGame,
        isLimited: false,
        data: '',
        isPremium: false,
        icon: IconsEnum.boost,
        parnterId: null,
        experedAt: new Date('2023-01-01'),
        action: TaskActionEnum.link,
        progress: {
          current: 0,
          total: 1,
          isClaimed: false,
          status: TaskStatusEnum.start,
        },
        type: TaskTypeEnum.social,
      },
      {
        id: 2,
        title: 'Subscribe to channel',
        description: 'description',
        tokens: 1000,
        deamonds: 1,
        category: TaskCategoryEnum.partners,
        isLimited: false,
        data: '',
        isPremium: false,
        icon: IconsEnum.telegram,
        parnterId: 1,
        experedAt: new Date('2023-01-01'),
        action: TaskActionEnum.link,
        progress: {
          current: 0,
          total: 1,
          isClaimed: false,
          status: TaskStatusEnum.start,
        },
        type: TaskTypeEnum.social,
      },
      {
        id: 3,
        title: 'Visit the website',
        description: 'description',
        tokens: 1000,
        deamonds: 1,
        category: TaskCategoryEnum.partners,
        isLimited: false,
        data: '',
        isPremium: false,
        icon: IconsEnum.other,
        parnterId: 1,
        experedAt: new Date('2023-01-01'),
        action: TaskActionEnum.link,
        progress: {
          current: 0,
          total: 1,
          isClaimed: false,
          status: TaskStatusEnum.start,
        },
        type: TaskTypeEnum.website,
      },
      {
        id: 4,
        title: 'Subscribe to discord server',
        description: 'description',
        tokens: 1000,
        deamonds: 1,
        category: TaskCategoryEnum.partners,
        isLimited: false,
        data: '',
        isPremium: false,
        icon: IconsEnum.discord,
        parnterId: 2,
        experedAt: new Date('2023-01-01'),
        action: TaskActionEnum.link,
        progress: {
          current: 0,
          total: 1,
          isClaimed: false,
          status: TaskStatusEnum.start,
        },
        type: TaskTypeEnum.website,
      },
    ],
  }

  const limitedList = data.tasks.filter((item) => item.isLimited)
  const dailyList = data.tasks.filter(
    (item) => item.category === TaskCategoryEnum.daily,
  )
  const inGameList = data.tasks.filter(
    (item) => item.category === TaskCategoryEnum.inGame,
  )
  const partnerList = data.tasks.filter(
    (item) => item.category === TaskCategoryEnum.partners,
  )
  const questsList = data.tasks.filter(
    (item) => item.category === TaskCategoryEnum.achievements,
  )
  const hiRiskList = data.tasks.filter(
    (item) => item.category === TaskCategoryEnum.hiRisk,
  )

  const tabs: {
    key: string
    tabName: string
    count: number
    list: TaskInterface[]
  }[] = [
    {
      key: 'limited',
      tabName: t('limited'),
      count: limitedList.length,
      list: limitedList,
    },
    {
      key: 'daily',
      tabName: t('daily'),
      count: dailyList.length,
      list: dailyList,
    },
    {
      key: 'inGame',
      tabName: t('inGame'),
      count: inGameList.length,
      list: inGameList,
    },
    {
      key: 'partners',
      tabName: t('partners'),
      count: partnerList.length,
      list: partnerList,
    },
    {
      key: 'achievements',
      tabName: t('achievements'),
      count: questsList.length,
      list: questsList,
    },
    {
      key: 'hiRisk',
      tabName: t('hiRisk'),
      count: hiRiskList.length,
      list: hiRiskList,
    },
  ]

  return (
    <TabGroup className="flex flex-col gap-4">
      <TabList className="flex-wrap flex flex-row items-center justify-center text-nowrap bg-surface-container-l2 rounded-md bg-opacity-70">
        {tabs.map((tab) => (
          <Tab
            key={tab.tabName}
            className="px-4 grow py-2 font-medium data-[selected]:bg-primary data-[selected]:text-on-primary rounded-md flex flex-row items-center justify-center gap-1">
            {tab.tabName}
            {tab.count > 0 && (
              <span className="text-primary bg-on-primary rounded-full px-1 py-0 text-xs font-bold">
                {tab.count}
              </span>
            )}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((tab) => (
          <TabPanel key={tab.key} className={'flex flex-col gap-2'}>
            {tab.key == 'hiRisk' && <HiRiskDisclaimer />}
            <TasksList tasks={tab.list} partners={data.partners} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}
