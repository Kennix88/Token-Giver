'use client'

import addSuffixToNumber from '@/utils/addSuffixToNumber.util'
import Link from 'next/link'
import { useTranslations } from 'use-intl'

export default function TasksBanner() {
  const t = useTranslations('game.home')

  return (
    <div className="flex flex-row gap-2 items-center justify-start ">
      <div
        className={
          'flex flex-row gap-2 px-2 py-1 bg-surface-container-l2 rounded-md text-nowrap'
        }>
        <div className={'flex flex-col gap-1'}>
          <div className={'text-[10px] opacity-50'}>
            {t('tasksBanner.title')}
          </div>
          <div className="flex flex-row gap-2 text-[12px] justify-between text-primary col-span-2 items-center text-nowrap font-bold ">
            {(6000).toLocaleString('en-US')} $TGC
          </div>
        </div>
        <div className="flex-row gap-0 text-[12px] items-center flex font-medium ">
          +{addSuffixToNumber(20)} 💎
        </div>
      </div>
      <Link
        href={'game/tasks'}
        className="px-2 py-1 rounded-md bg-primary text-sm text-on-primary font-medium">
        {t('tasksBanner.button')}
      </Link>
    </div>
  )
}
