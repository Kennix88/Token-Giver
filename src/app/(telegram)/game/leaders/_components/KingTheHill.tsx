'use client'
import Multiplier from '@/app/(telegram)/game/leaders/_components/Multiplier.tsx'
import Timer from '@/app/(telegram)/game/leaders/_components/Timer.tsx'
import kingSvg from '@/app/_assets/icons/kingTheHill.svg'
import Coin from '@/components/coins/Coin.tsx'
import getRandomEmojiAvatar from '@/utils/getRandomEmojiAvatar.ts'
import limitLengthString from '@/utils/limitLengthString.util.ts'
import Image from 'next/image'
import { BiSolidCrown } from 'react-icons/bi'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { useTranslations } from 'use-intl'

export default function KingTheHill() {
  const t = useTranslations('game.leaders.kingTheHill')

  const date = {
    user: {
      id: 6,
      photoUrl:
        'https://t.me/i/userpic/320/qTKXYJUegzVtf9SzHF3vUV-XsjDWBWnWdTi_ygkrbaA.svg',
      name: 'Innokenty [Kennix88]',
      isVerified: true,
      startAt: new Date('12/22/2024'),
    },
  }

  return (
    <div className="flex flex-col gap-1 font-extralight">
      <div className="px-4 opacity-50 flex flex-row gap-2 items-center">
        {t('title')}
      </div>
      <div className="bg-surface-container-l2 p-4 rounded-md flex flex-col gap-4 text-sm bg-opacity-70">
        <div className="flex flex-row gap-2 items-center justify-between">
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

              <BiSolidCrown
                className={`absolute text-platinum left-[-8px] top-[-14px] rotate-[340deg] text-2xl`}
              />
            </div>
            <div className="flex flex-col gap-0">
              <div className="font-bold flex flex-row gap-1 text-[14px] items-center">
                <div>{limitLengthString(date.user.name)}</div>
                {date.user.isVerified && (
                  <RiVerifiedBadgeFill className="text-blue-500" />
                )}
              </div>
              <div className="text-[12px] flex flex-row gap-1 items-center font-medium">
                <Timer date={date.user.startAt} />
              </div>
            </div>
          </div>
          <Image
            src={kingSvg}
            alt={'star'}
            width={43 / 1.1}
            height={57 / 1.1}
          />
        </div>
        <div className="flex flex-row gap-1 items-center justify-center bg-gold bg-opacity-20 py-1 px-2 rounded-md text-sm">
          🎁
          <div className="font-bold opacity-80 ">
            +
            <Multiplier date={date.user.startAt} multiplier={10} />
          </div>
          <Coin w={20} />
        </div>

        <button className="bg-primary-container text-sm text-on-primary-container font-medium px-4 py-2 rounded-md flex flex-row gap-2 items-center justify-center">
          {t('button')}
        </button>
      </div>
    </div>
  )
}
