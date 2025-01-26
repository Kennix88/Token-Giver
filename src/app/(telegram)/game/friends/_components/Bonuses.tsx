'use client'

import FriendsIcon from '@/app/(telegram)/game/friends/_components/FriendsIcon.tsx'
import Coin from '@/components/coins/Coin.tsx'
import Gem from '@/components/coins/Gem.tsx'
import { IconsEnum } from '@/types/icons.enum.ts'
import { useTranslations } from 'use-intl'

export default function Bonuses() {
  const t = useTranslations('game.friends.bonuses')

  const data = {
    bonuses: [
      {
        code: 'friend',
        icon: IconsEnum.friend,
        title: t('friend'),
        tokens: 3000,
        deamonds: 0,
        percent: 0,
      },
      {
        code: 'preminumFriend',
        icon: IconsEnum.premiumFriend,
        title: t('preminumFriend'),
        tokens: 7000,
        deamonds: 1,
        percent: 0,
      },
      {
        code: 'task',
        icon: IconsEnum.percent,
        title: t('task'),
        tokens: 0,
        deamonds: 0,
        percent: 5,
      },
      {
        code: 'game',
        icon: IconsEnum.game,
        title: t('game'),
        tokens: 0,
        deamonds: 0,
        percent: 1,
      },
    ],
  }

  return (
    <div className="flex flex-col gap-1 font-extralight">
      <div className="px-4 opacity-50 flex flex-row gap-2 items-center">
        {t('title')}
      </div>
      <div className="bg-surface-container-l2 rounded-md flex flex-col text-sm bg-opacity-70 divide-y divide-on-surface divide-opacity-10">
        {data.bonuses.map((bonus) => (
          <div
            key={bonus.code}
            className="flex flex-row gap-2 p-4 items-center justify-between ">
            <div className="flex flex-row gap-2 items-center">
              <div className="w-[40px] h-[40px]">
                <FriendsIcon icon={bonus.icon} />
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-bold flex flex-row gap-1 text-[14px] items-center">
                  {bonus.title}
                </div>
                <div className="text-[12px] flex flex-row gap-2 items-center text-success font-bold">
                  {bonus.tokens > 0 && (
                    <div className="flex flex-row gap-1 items-center">
                      <div>+{bonus.tokens}</div>
                      <Coin w={15} />
                    </div>
                  )}
                  {bonus.deamonds > 0 && (
                    <div className="flex flex-row gap-1 items-center">
                      <div>+{bonus.deamonds}</div>
                      <Gem w={15} />
                    </div>
                  )}
                  {bonus.percent > 0 && (
                    <div className="flex flex-row gap-1 items-center">
                      <div className="">{bonus.percent}%</div>
                      <Coin w={15} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
