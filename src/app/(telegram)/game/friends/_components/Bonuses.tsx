'use client'

import FriendsIcon from '@/app/(telegram)/game/friends/_components/FriendsIcon.tsx'
import { IconsEnum } from '@/types/icons.enum.ts'
import addSuffixToNumber from '@/utils/addSuffixToNumber.util.ts'
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
      <div className="bg-surface-container-l2 p-4 rounded-md flex flex-col gap-4 text-sm bg-opacity-70">
        {data.bonuses.map((bonus) => (
          <div
            key={bonus.code}
            className="flex flex-row gap-2 items-center justify-between">
            <div className="flex flex-row gap-2 items-center">
              <div className="w-[40px] h-[40px]">
                <FriendsIcon icon={bonus.icon} />
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-bold flex flex-row gap-1 text-[14px] items-center">
                  {bonus.title}
                </div>
                <div className="text-[12px] flex flex-row gap-1 items-center opacity-80 font-medium">
                  {bonus.tokens > 0 &&
                    `+${addSuffixToNumber(bonus.tokens, 2)} $TGC`}
                  {bonus.deamonds > 0 &&
                    ` +${addSuffixToNumber(bonus.deamonds, 2)} 💎`}
                  {bonus.percent > 0 && (
                    <>
                      <span className="text-success font-bold">
                        +{bonus.percent}%
                      </span>{' '}
                      $TGC
                    </>
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
