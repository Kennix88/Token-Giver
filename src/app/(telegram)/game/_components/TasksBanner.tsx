'use client'

import Coin from '@/components/coins/Coin.tsx'
import Gem from '@/components/coins/Gem.tsx'
import addSuffixToNumber from '@/utils/addSuffixToNumber.util'
import Link from 'next/link'
import { useTranslations } from 'use-intl'

export default function TasksBanner() {
  const t = useTranslations('game.home')

  return (
    <div className="flex flex-row gap-2 items-center justify-start">
      <div
        className={
          'flex flex-row gap-2 px-2 py-1 bg-surface-container-l2 rounded-md text-nowrap bg-opacity-70'
        }>
        <div className={'flex flex-col gap-1'}>
          <div className={'text-[10px] opacity-50'}>
            {t('tasksBanner.title')}
          </div>
          <div className="flex flex-row gap-1 text-[12px] text-primary col-span-2 items-center text-nowrap font-bold ">
            {(6000).toLocaleString('en-US')} <Coin w={13} />
          </div>
        </div>
        <div className="flex-row gap-1 text-[12px] items-center flex font-medium ">
          +{addSuffixToNumber(20)} <Gem w={15} />
        </div>
      </div>
      <Link
        href={'game/tasks'}
        className="grow px-2 py-1 rounded-md text-center bg-primary text-sm text-on-primary font-medium">
        {t('tasksBanner.button')}
      </Link>
    </div>
  )
}
