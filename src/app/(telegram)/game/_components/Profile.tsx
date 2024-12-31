'use client'
import BoostButton from '@/app/(telegram)/game/_components/BoostButton.tsx'
import addSuffixToNumber from '@/utils/addSuffixToNumber.util'
import getRandomEmojiAvatar from '@/utils/getRandomEmojiAvatar.ts'
import limitLengthString from '@/utils/limitLengthString.util.ts'
import { TonConnectButton } from '@tonconnect/ui-react'
import Image from 'next/image'
import { useRef } from 'react'
import { FaWallet } from 'react-icons/fa6'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { useTranslations } from 'use-intl'

export default function Profile() {
  // const wallet = useTonWallet()
  // const address = useSlicedAddress(
  //   wallet?.account.address,
  //   wallet?.account.chain,
  // )
  const t = useTranslations('game.home')
  const tonConnectButtonRef = useRef<HTMLButtonElement>(null)

  const date = {
    user: {
      id: 6,
      photoUrl:
        'https://t.me/i/userpic/320/qTKXYJUegzVtf9SzHF3vUV-XsjDWBWnWdTi_ygkrbaA.svg',
      name: 'Innokenty [Kennix88]',
      isVerified: true,
      wallet: null,
    },
  }

  const handleClickTonConnect = () => {
    console.log('Button clicked')
    if (tonConnectButtonRef.current) {
      const button = tonConnectButtonRef.current.querySelector('button')
      if (button) {
        button.click()
      }
    }
  }

  return (
    <div className="flex flex-col gap-1 font-extralight">
      <div className="px-4 opacity-50">{t('profile.title')}</div>
      <div className="bg-surface-container-l2 p-4 rounded-md flex flex-col gap-4 text-sm">
        <div className="flex flex-row gap-2 items-center justify-between">
          <div className="flex flex-row gap-2 items-center ">
            <div className="flex justify-center items-center p-1 rounded-md bg-surface-container w-[40px] h-[40px]">
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
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-bold flex flex-row gap-2 text-[14px] items-center">
                <div>{limitLengthString(date.user.name)}</div>
                {date.user.isVerified && (
                  <RiVerifiedBadgeFill className="text-blue-500" />
                )}
              </div>
              <div className="text-[12px] flex flex-row gap-1 items-center font-medium">
                <FaWallet />
                {date.user.wallet ? (
                  date.user.wallet
                ) : (
                  <button onClick={handleClickTonConnect}>
                    {' '}
                    {t('profile.connectButton')}
                  </button>
                )}
              </div>
            </div>
          </div>
          <div></div>
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
      <div className={'mt-4 flex flex-col gap-4'}>
        <BoostButton />
        {!date.user.wallet && (
          <div className="flex flex-col gap-2">
            <button
              onClick={handleClickTonConnect}
              className={
                'p-4 bg-info-container text-on-info-container rounded-md font-medium flex flex-row gap-2 items-center justify-between'
              }>
              <div className="flex flex-row gap-2 items-center text-nowrap">
                {t('profile.connectButton')}
              </div>
              <span className="tracking-normal font-bold text-on-surface text-nowrap">
                +1000 $TGC
              </span>
            </button>
            <button ref={tonConnectButtonRef} className={'hidden'}>
              <TonConnectButton className="ton-connect-page__button" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
