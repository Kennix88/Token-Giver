'use client'

import LeadersList from '@/app/(telegram)/game/leaders/_components/LeadersList.tsx'
import { LeadersTypeEnum } from '@/types/leadersType.enum.ts'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { useTranslations } from 'use-intl'

export default function TabsLeaders() {
  const t = useTranslations('game.leaders.tabs')
  const tabs = [
    {
      tabName: t('token'),
      type: LeadersTypeEnum.TOKEN,
    },
    {
      tabName: t('deamond'),
      type: LeadersTypeEnum.DEAMOND,
    },
    {
      tabName: t('referral'),
      type: LeadersTypeEnum.REFERRAL,
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
