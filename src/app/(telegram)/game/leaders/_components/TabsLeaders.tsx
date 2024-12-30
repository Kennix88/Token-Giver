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
      <TabList className="w-full flex flex-row items-center justify-between border-b border-surface-container-h">
        {tabs.map((tab) => (
          <Tab
            key={tab.tabName}
            className="px-4 w-full py-2 data-[selected]:border-primary data-[selected]:border-b-3 data-[selected]:text-primary ">
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
