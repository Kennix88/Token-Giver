'use client'

import FriendsIcon from '@/app/(telegram)/game/friends/_components/FriendsIcon.tsx'
import Coin from '@/components/coins/Coin.tsx'
import Gem from '@/components/coins/Gem.tsx'
import { IconsEnum } from '@/types/icons.enum.ts'
import { InviteDataInterface } from '@/types/inviteData.interface.ts'
import Link from 'next/link'
import { FaCopy } from 'react-icons/fa6'
import { RiTelegram2Fill } from 'react-icons/ri'
import { useTranslations } from 'use-intl'

export default function Bonuses() {
  const t = useTranslations('game.friends')

  const data: InviteDataInterface = {
    tgShareIviteUrl:
      'https://t.me/share/url?text=Play-to-earn%20in%20Token-Giver%20Game&url=https://t.me/tokengiverbot',
    copyTgWebAppInviteUrl: 'https://t.me/tokengiverbot',
    list: [
      {
        code: 'friend',
        icon: IconsEnum.friend,
        title: t('bonuses.friend'),
        tokens: 3000,
        deamonds: 0,
        percent: 0,
      },
      {
        code: 'preminumFriend',
        icon: IconsEnum.premiumFriend,
        title: t('bonuses.preminumFriend'),
        tokens: 7000,
        deamonds: 1,
        percent: 0,
      },
      {
        code: 'task',
        icon: IconsEnum.percent,
        title: t('bonuses.task'),
        tokens: 0,
        deamonds: 0,
        percent: 5,
      },
      {
        code: 'game',
        icon: IconsEnum.game,
        title: t('bonuses.game'),
        tokens: 0,
        deamonds: 0,
        percent: 1,
      },
    ],
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="flex flex-col gap-1 font-extralight">
      <div className="px-4 opacity-50 flex flex-row gap-2 items-center">
        {t('bonuses.title')}
      </div>
      <div className="bg-surface-container-l2 rounded-md flex flex-col text-sm bg-opacity-70 divide-y divide-on-surface divide-opacity-10">
        {data.list.map((bonus) => (
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
                      <div>+{bonus.tokens.toLocaleString('ru-RU')}</div>
                      <Coin w={15} />
                    </div>
                  )}
                  {bonus.deamonds > 0 && (
                    <div className="flex flex-row gap-1 items-center">
                      <div>+{bonus.deamonds.toLocaleString('ru-RU')}</div>
                      <Gem w={15} />
                    </div>
                  )}
                  {bonus.percent > 0 && (
                    <div className="flex flex-row gap-1 items-center">
                      <div className="">
                        {bonus.percent.toLocaleString('ru-RU')}%
                      </div>
                      <Coin w={15} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex flex-row gap-2 w-full items-center text-[10px] font-bold">
        <button
          className="grow flex flex-row gap-2 items-center justify-center border border-primary text-primary px-4 py-2 uppercase rounded-md"
          onClick={() => copyToClipboard(data.copyTgWebAppInviteUrl)}>
          <FaCopy className="text-sm" /> {t('copy')}
        </button>
        <Link
          className="grow flex flex-row gap-2 items-center justify-center border border-primary bg-primary text-on-primary px-4 py-2 uppercase rounded-md"
          href={data.tgShareIviteUrl}
          target="_blank">
          <RiTelegram2Fill className="text-sm" /> {t('invite')}
        </Link>
      </div>
    </div>
  )
}
