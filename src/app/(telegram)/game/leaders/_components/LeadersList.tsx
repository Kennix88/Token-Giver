'use client'

import Coin from '@/components/coins/Coin.tsx'
import Gem from '@/components/coins/Gem.tsx'
import { LeadersTypeEnum } from '@/types/leadersType.enum.ts'
import addSuffixToNumber from '@/utils/addSuffixToNumber.util.ts'
import getRandomEmojiAvatar from '@/utils/getRandomEmojiAvatar.ts'
import limitLengthString from '@/utils/limitLengthString.util.ts'
import Image from 'next/image'
import { BiSolidCrown } from 'react-icons/bi'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { useTranslations } from 'use-intl'

export default function LeadersList({ type }: { type: LeadersTypeEnum }) {
  const t = useTranslations('game.leaders.list')
  const date = {
    user: {
      id: 6,
      place: 2800001,
      photoUrl:
        'https://t.me/i/userpic/320/qTKXYJUegzVtf9SzHF3vUV-XsjDWBWnWdTi_ygkrbaA.svg',
      name: 'Innokenty [Kennix88]',
      isVerified: true,
      score: 21,
    },
    list: [
      {
        id: 1,
        place: 1,
        photoUrl:
          'https://t.me/i/userpic/320/qTKXYJUegzVtf9SzHF3vUV-XsjDWBWnWdTi_ygkrbaA.svg',
        name: 'Username 1',
        isVerified: true,
        score: 7010,
      },
      {
        id: 2,
        place: 2,
        photoUrl:
          'https://t.me/i/userpic/320/qTKXYJUegzVtf9SzHF3vUV-XsjDWBWnWdTi_ygkrbaA.svg',
        name: 'Username 2',
        isVerified: false,
        score: 600,
      },
      {
        id: 3,
        place: 3,
        photoUrl: null,
        name: 'Username 3',
        isVerified: true,
        score: 500,
      },
      {
        id: 4,
        place: 4,
        photoUrl: null,
        name: 'Username 4',
        isVerified: false,
        score: 300,
      },
      {
        id: 5,
        place: 5,
        photoUrl: null,
        name: 'Username 5',
        isVerified: false,
        score: 200,
      },
      {
        id: 6,
        place: 6,
        photoUrl: null,
        name: 'Username 6',
        isVerified: true,
        score: 100,
      },
    ],
  }

  return (
    <div className={'flex flex-col gap-4'}>
      <div className="flex flex-col gap-1">
        <div className="px-4 opacity-50 flex flex-row gap-2 items-center">
          {t('your')}
        </div>
        <div
          className={`flex p-4 flex-row gap-2 col-span-2 justify-between rounded-md items-center ${date.user.place === 1 ? 'bg-gold bg-opacity-20' : date.user.place === 2 ? 'bg-silver bg-opacity-20 ' : date.user.place === 3 ? 'bg-bronze bg-opacity-20 ' : 'bg-surface-container-l2 bg-opacity-70'}`}>
          <div className="flex flex-row gap-2 items-center ">
            <div className="relative flex justify-center items-center p-1 rounded-md bg-surface-container w-[40px] h-[40px]">
              {date.user.photoUrl ? (
                <Image
                  src={date.user.photoUrl}
                  alt=""
                  width={40}
                  height={40}
                  className={'absolute rounded-md'}
                />
              ) : (
                getRandomEmojiAvatar()
              )}
              {date.user.place <= 3 && (
                <BiSolidCrown
                  className={`absolute ${date.user.place === 1 ? 'text-gold' : date.user.place === 2 ? 'text-silver' : date.user.place === 3 ? 'text-bronze' : ''} left-[-8px] top-[-14px] rotate-[340deg] text-2xl`}
                />
              )}
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-bold flex flex-row gap-1 text-[14px] items-center">
                <div>{limitLengthString(date.user.name)}</div>
                {date.user.isVerified && (
                  <RiVerifiedBadgeFill className="text-blue-500" />
                )}
              </div>
              <div className="text-[12px] flex flex-row gap-1 items-center opacity-80 font-medium">
                {date.user.score.toLocaleString('en-US')}{' '}
                {type == LeadersTypeEnum.TOKEN ? (
                  <Coin w={15} />
                ) : type == LeadersTypeEnum.DEAMOND ? (
                  <Gem w={15} />
                ) : (
                  <Coin w={15} />
                )}
              </div>
            </div>
          </div>
          <div className="font-medium text-[18px] flex items-center justify-center">
            {date.user.place === 1 ? (
              '🥇'
            ) : date.user.place === 2 ? (
              '🥈'
            ) : date.user.place === 3 ? (
              '🥉'
            ) : (
              <span className="text-[14px]">
                #{addSuffixToNumber(date.user.place, 2)}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="px-4 opacity-50 flex flex-row gap-2 items-center">
          {t('top')}
        </div>
        <div className="flex flex-col bg-surface-container-l2 bg-opacity-70 rounded-md">
          {date.list.map((item, index) => (
            <div
              key={item.id}
              className={`flex p-4 flex-row gap-2 col-span-2 justify-between items-center ${index + 1 === date.list.length ? '' : 'border-b border-on-surface border-opacity-10'} ${item.place === 1 ? 'bg-gold bg-opacity-20 rounded-t-md' : item.place === 2 ? 'bg-silver bg-opacity-20 ' : item.place === 3 ? 'bg-bronze bg-opacity-20 ' : ''}`}>
              <div className="flex flex-row gap-2 items-center ">
                <div className="relative flex justify-center items-center p-1 rounded-md bg-surface-container w-[40px] h-[40px]">
                  {item.photoUrl ? (
                    <Image
                      src={item.photoUrl}
                      alt=""
                      width={40}
                      height={40}
                      className={'absolute rounded-md'}
                    />
                  ) : (
                    getRandomEmojiAvatar()
                  )}
                  {item.place <= 3 && (
                    <BiSolidCrown
                      className={`absolute ${item.place === 1 ? 'text-gold' : item.place === 2 ? 'text-silver' : item.place === 3 ? 'text-bronze' : ''} left-[-8px] top-[-14px] rotate-[340deg] text-2xl`}
                    />
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-bold flex flex-row gap-1 text-[14px] items-center">
                    <div>{limitLengthString(item.name)}</div>{' '}
                    {item.isVerified && (
                      <RiVerifiedBadgeFill className="text-blue-500" />
                    )}
                  </div>
                  <div className="text-[12px] flex flex-row gap-1 items-center opacity-80 font-medium">
                    {item.score.toLocaleString('en-US')}{' '}
                    {type == LeadersTypeEnum.TOKEN ? (
                      <Coin w={15} />
                    ) : type == LeadersTypeEnum.DEAMOND ? (
                      <Gem w={15} />
                    ) : (
                      <Coin w={15} />
                    )}
                  </div>
                </div>
              </div>
              <div className="font-medium text-[18px] flex items-center justify-center">
                {item.place === 1 ? (
                  '🥇'
                ) : item.place === 2 ? (
                  '🥈'
                ) : item.place === 3 ? (
                  '🥉'
                ) : (
                  <span className="text-[14px]">
                    #{addSuffixToNumber(item.place, 2)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
