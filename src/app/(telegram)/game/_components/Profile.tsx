'use client'
import addSuffixToNumber from '@/utils/addSuffixToNumber.util'
import { useTranslations } from 'use-intl'

export default function Profile() {
  const t = useTranslations('game')
  return (
    <>
      <div className="flex flex-col gap-1 font-extralight">
        <div className="px-4 opacity-50">{t('profile.title')}</div>
        <div className="bg-surface-container-l2 p-4 rounded-md flex flex-col gap-4 text-sm">
          <div className="flex flex-row gap-2 flex-wrap col-span-2 items-center">
            <div className="flex justify-center items-center p-1 rounded-md bg-primary w-[40px] h-[40px]">
              🤖
            </div>
            <div className="flex flex-col gap-0">
              <div className="font-bold flex flex-row gap-2 text-[16px] items-center">
                <div>Innokenty Kennix</div>
              </div>
              <div className="text-[12px] flex flex-row gap-2 items-center ">
                wallet: 0x123456789
              </div>
            </div>
          </div>
          <hr className="border-0 bg-surface-container h-[1px]" />
          <div className="flex flex-row gap-2 justify-between col-span-2 items-center text-nowrap ">
            <div className="flex-row text-2xl items-center flex gap-1 font-bold ">
              {addSuffixToNumber(24648310)}{' '}
              <span className="font-medium text-lg opacity-50 tracking-normal">
                $TGC
              </span>
            </div>
            <div className="flex-row text-lg items-center flex font-medium ">
              {addSuffixToNumber(20)} 💎
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
