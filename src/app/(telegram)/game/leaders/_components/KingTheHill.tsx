'use client'
import Multiplier from '@/app/(telegram)/game/leaders/_components/Multiplier.tsx'
import Timer from '@/app/(telegram)/game/leaders/_components/Timer.tsx'
import limitLengthString from '@/utils/limitLengthString.util.ts'
import { BiSolidCrown } from 'react-icons/bi'
import { useTranslations } from 'use-intl'

export default function KingTheHill() {
  const t = useTranslations('game.leaders.kingTheHill')

  return (
    <div className="flex flex-col gap-1 font-extralight">
      <div className="px-4 opacity-50 flex flex-row gap-2 items-center">
        {t('title')}
      </div>
      <div className="bg-surface-container-l2 p-4 rounded-md flex flex-col gap-4 text-sm">
        <div className="flex flex-row gap-2 flex-wrap col-span-2 items-center">
          <div className="relative flex justify-center items-center p-1 rounded-md bg-primary w-[40px] h-[40px]">
            🤖
            <BiSolidCrown className="absolute text-platinum left-[-8px] top-[-14px] rotate-[340deg] text-2xl" />
          </div>
          <div className="flex flex-col gap-0">
            <div className="font-bold flex flex-row gap-2 text-[16px] items-center">
              <div>{limitLengthString('Innokenty Kennix')}</div>
            </div>
            <div className="text-[12px] flex flex-row gap-1 items-center font-medium">
              <Timer date={new Date('12/22/2024')} />=
              <div className="flex flex-row gap-1 items-center bg-surface-container-h py-1 px-2 rounded-md text-sm">
                <div className="font-light opacity-70 ">
                  +<Multiplier date={new Date('12/22/2024')} multiplier={10} />
                </div>
                <div className="font-bold">$TGC</div>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-primary text-sm text-on-primary font-medium px-4 py-2 rounded-md">
          {t('button')}
        </button>
      </div>
    </div>
  )
}
