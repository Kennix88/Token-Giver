'use client'

import Coin from '@/components/coins/Coin.tsx'
import { FriendsDataInterface } from '@/types/friends.interface.ts'
import getRandomEmojiAvatar from '@/utils/getRandomEmojiAvatar.ts'
import Image from 'next/image'
import { FaUser } from 'react-icons/fa6'
import { useTranslations } from 'use-intl'

export default function FriendsList() {
  const t = useTranslations('game.friends')

  const data: FriendsDataInterface = {
    allTokens: 232354315453,
    allFriends: 241248,
    list: [
      {
        id: 1,
        name: 'Username 1',
        tokens: 1000,
        isVerified: true,
        photoUrl:
          'https://t.me/i/userpic/320/qTKXYJUegzVtf9SzHF3vUV-XsjDWBWnWdTi_ygkrbaA.svg',
      },
      {
        id: 2,
        name: 'Username 2',
        tokens: 100560,
        isVerified: false,
        photoUrl: null,
      },
    ],
  }

  return (
    <div className="flex flex-col gap-1 font-extralight">
      <div className="px-4 opacity-50 flex flex-row gap-2 items-center">
        {t('statTitle')}
      </div>
      <div className="bg-surface-container-l2 mb-4 rounded-md flex flex-row text-sm bg-opacity-70 divide-x divide-on-surface divide-opacity-10">
        <div className="grow flex flex-col gap-2 items-center justify-center p-4 ">
          <div>
            <div className="flex justify-center items-center w-[35px] h-[35px] rounded-full bg-social-friends">
              <FaUser className="text-lg" />
            </div>
          </div>
          <div className="text-lg font-bold">
            {data.allFriends.toLocaleString('ru-RU')}
          </div>
        </div>
        <div className="grow flex flex-col gap-2 items-center justify-center  p-4 ">
          <div>
            <Coin w={35} />
          </div>
          <div className="text-lg font-bold">
            {data.allTokens.toLocaleString('ru-RU')}
          </div>
        </div>
      </div>
      <div className="px-4 opacity-50 flex flex-row gap-2 items-center">
        {t('listTitle')}
      </div>
      <div className="bg-surface-container-l2 rounded-md flex flex-col text-sm bg-opacity-70 divide-y divide-on-surface divide-opacity-10">
        {data.list.length <= 0 ? (
          <div>{t('listEmpty')}</div>
        ) : (
          data.list.map((el) => (
            <div
              key={el.id}
              className="flex flex-row gap-2 p-4 items-center justify-between ">
              <div className="flex flex-row gap-2 items-center">
                <div className="w-[40px] h-[40px] flex justify-center items-center p-1 rounded-md bg-surface-container ">
                  {el.photoUrl ? (
                    <Image
                      src={el.photoUrl}
                      alt=""
                      width={40}
                      height={40}
                      className={'absolute rounded-md'}
                    />
                  ) : (
                    getRandomEmojiAvatar()
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-bold flex flex-row gap-1 text-[14px] items-center">
                    {el.name}
                  </div>
                  <div className="text-[12px] flex flex-row gap-2 items-center text-success font-bold">
                    <div className="flex flex-row gap-1 items-center">
                      <div>{el.tokens.toLocaleString('ru-RU')}</div>
                      <Coin w={15} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
