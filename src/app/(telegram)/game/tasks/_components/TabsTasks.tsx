'use client'

import LeadersList from '@/app/(telegram)/game/leaders/_components/LeadersList.tsx'
import { LeadersTypeEnum } from '@/types/leadersType.enum.ts'
import {
  TaskActionEnum,
  TaskCategoryEnum,
  TaskIconEnum,
  TaskInterface,
  TaskStatusEnum,
  TaskTypeEnum,
} from '@/types/task.interface.ts'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { useTranslations } from 'use-intl'

export default function TabsTasks() {
  const t = useTranslations('game.tasks.tabs')
  const data: {
    list: TaskInterface[]
  } = {
    list: [
      {
        id: 1,
        title: 'title',
        description: 'description',
        tokens: 100,
        deamonds: 1,
        category: TaskCategoryEnum.inGame,
        data: '',
        isPremium: false,
        icon: TaskIconEnum.boost,
        partnerIconUrl: null,
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

  const limitedList = data.list.filter(
    (item) => item.category === TaskCategoryEnum.limited,
  )
  const dailyList = data.list.filter(
    (item) => item.category === TaskCategoryEnum.daily,
  )
  const inGameList = data.list.filter(
    (item) => item.category === TaskCategoryEnum.inGame,
  )
  const partnerList = data.list.filter(
    (item) => item.category === TaskCategoryEnum.partners,
  )
  const questsList = data.list.filter(
    (item) => item.category === TaskCategoryEnum.quests,
  )

  const tabs = [
    {
      tabName: (
        <>
          {t('limited')}{' '}
          <span className="text-primary bg-on-primary rounded-full px-1 py-0 text-xs font-bold">
            {limitedList.length}
          </span>
        </>
      ),
      type: LeadersTypeEnum.TOKEN,
    },
    {
      tabName: (
        <>
          {t('daily')}{' '}
          <span className="text-primary bg-on-primary rounded-full px-1 py-0 text-xs font-bold">
            {dailyList.length}
          </span>
        </>
      ),
      type: LeadersTypeEnum.DEAMOND,
    },
    {
      tabName: (
        <>
          {t('inGame')}{' '}
          <span className="text-primary bg-on-primary rounded-full px-1 py-0 text-xs font-bold">
            {inGameList.length}
          </span>
        </>
      ),
      type: LeadersTypeEnum.REFERRAL,
    },
    {
      tabName: (
        <>
          {t('partners')}{' '}
          <span className="text-primary bg-on-primary rounded-full px-1 py-0 text-xs font-bold">
            {partnerList.length}
          </span>
        </>
      ),
      type: LeadersTypeEnum.REFERRAL,
    },
    {
      tabName: (
        <>
          {t('quests')}{' '}
          <span className="text-primary bg-on-primary rounded-full px-1 py-0 text-xs font-bold">
            {questsList.length}
          </span>
        </>
      ),
      type: LeadersTypeEnum.REFERRAL,
    },
  ]

  return (
    <TabGroup className="flex flex-col gap-4">
      <TabList className="flex-wrap flex flex-row items-center justify-center text-nowrap bg-surface-container-l2 rounded-md">
        {tabs.map((tab) => (
          <Tab
            key={tab.tabName.toString()}
            className="px-4 grow py-2 data-[selected]:bg-primary data-[selected]:text-on-primary rounded-md flex flex-row items-center justify-center gap-1">
            {tab.tabName}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((tab) => (
          <TabPanel key={tab.type}>
            <LeadersList type={tab.type} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}
