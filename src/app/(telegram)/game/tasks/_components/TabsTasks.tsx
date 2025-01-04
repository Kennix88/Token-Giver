'use client'

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
    partners: [],
    tasks: [
      {
        id: 1,
        title: 'title',
        description: 'description',
        tokens: 100,
        deamonds: 1,
        category: TaskCategoryEnum.inGame,
        data: '',
        isPremium: false,
        icon: IconsEnum.boost,
        parnterId: null,
        experedAt: new Date('2023-01-01'),
        action: TaskActionEnum.customEmoji,
        progress: {
          current: 0,
          total: 1,
          isClaimed: false,
          status: TaskStatusEnum.start,
        },
        type: TaskTypeEnum.social,
      },
    ],
  }

  const limitedList = data.tasks.filter(
    (item) => item.category === TaskCategoryEnum.limited,
  )
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
    (item) => item.category === TaskCategoryEnum.quests,
  )

  const tabs = [
    {
      tabName: t('limited'),
      count: limitedList.length,
      list: limitedList,
    },
    {
      tabName: t('daily'),
      count: dailyList.length,
      list: dailyList,
    },
    {
      tabName: t('inGame'),
      count: inGameList.length,
      list: inGameList,
    },
    {
      tabName: t('partners'),
      count: partnerList.length,
      list: partnerList,
    },
    {
      tabName: t('quests'),
      count: questsList.length,
      list: questsList,
    },
  ]

  return (
    <TabGroup className="flex flex-col gap-4">
      <TabList className="flex-wrap flex flex-row items-center justify-center text-nowrap bg-surface-container-l2 rounded-md">
        {tabs.map((tab) => (
          <Tab
            key={tab.tabName}
            className="px-4 grow py-2 font-medium data-[selected]:bg-primary data-[selected]:text-on-primary rounded-md flex flex-row items-center justify-center gap-1">
            {tab.tabName}
            <span className="text-primary bg-on-primary rounded-full px-1 py-0 text-xs font-bold">
              {tab.count}
            </span>
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((tab) => (
          <TabPanel key={tab.tabName + 1}>
            <TasksList list={tab.list} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}
