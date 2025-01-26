'use client'
import BoostButton from '@/app/(telegram)/game/_components/BoostButton.tsx'
import Coin from '@/components/coins/Coin.tsx'
import Gem from '@/components/coins/Gem.tsx'
import { localesMap } from '@/core/i18n/config.ts'
import { setLocale } from '@/core/i18n/locale.ts'
import { Locale } from '@/core/i18n/types.ts'
import addSuffixToNumber from '@/utils/addSuffixToNumber.util'
import getRandomEmojiAvatar from '@/utils/getRandomEmojiAvatar.ts'
import limitLengthString from '@/utils/limitLengthString.util.ts'
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import { TonConnectButton } from '@tonconnect/ui-react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { FaCaretDown, FaWallet } from 'react-icons/fa6'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { useLocale, useTranslations } from 'use-intl'

export default function Profile() {
  // const wallet = useTonWallet()
  // const address = useSlicedAddress(
  //   wallet?.account.address,
  //   wallet?.account.chain,
  // )
  const locale = useLocale()
  const [localeState, setLocaleState] = useState(
    localesMap.find((l) => l.key === locale) || localesMap[0],
  )

  const onChange = (value: { key: string; title: string; icon: string }) => {
    const locale = value.key as Locale
    setLocale(locale)
    setLocaleState(localesMap.find((l) => l.key === locale) || localesMap[0])
  }
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
      {/*<div className="px-4 opacity-50">{t('profile.title')}</div>*/}
      <div className="bg-surface-container-l2 p-4 rounded-md flex flex-col gap-4 text-sm bg-opacity-70">
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
              <div className="font-bold flex flex-row gap-1 text-[14px] items-center">
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
          <div>
            <Listbox
              value={localeState}
              onChange={(v) => onChange(v)}
              as="div"
              className="relative">
              <ListboxButton
                as="div"
                className="relative w-full cursor-pointer text-sm font-medium flex flex-row items-center gap-2 justify-end">
                <Image
                  src={localeState.icon}
                  alt={'flag'}
                  width={52 / 2}
                  height={40 / 2}
                />
                <FaCaretDown />
              </ListboxButton>
              <ListboxOptions
                className="absolute top-12 right-0 min-w-[220px] z-50 mt-1 rounded-md bg-surface-container-h py-1 text-sm font-medium shadow-lg"
                as="div">
                <div className="flex max-h-[50vh] w-full flex-col overflow-auto">
                  {localesMap
                    .sort((a, b) => {
                      return a.key.localeCompare(b.key)
                    })
                    .map((el) => (
                      <ListboxOption
                        key={el.key}
                        value={el}
                        as="div"
                        className={`flex flex-row items-center cursor-pointer gap-2 py-2 px-4 ${el.key === locale && 'bg-surface-container-l2'} focus:border-none`}>
                        <Image
                          src={el.icon}
                          alt={'flag'}
                          width={52 / 2}
                          height={40 / 2}
                        />
                        <div className="text-base-content/50 text-xs flex flex-row gap-1 items-center">
                          {el.title} [{el.key.toUpperCase()}]
                        </div>
                      </ListboxOption>
                    ))}
                </div>
              </ListboxOptions>
            </Listbox>
          </div>
        </div>
        <hr className="border-0 bg-surface-container h-[1px]" />
        <div className="flex flex-row gap-2 justify-between col-span-2 items-center text-nowrap ">
          <div className="flex-row text-2xl items-center flex gap-1 font-bold ">
            {addSuffixToNumber(24648310)} <Coin w={25} />
          </div>
          <div className="flex-row gap-1 text-lg items-center flex font-medium ">
            {addSuffixToNumber(20)} <Gem w={25} />
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
              <span className="tracking-normal font-bold text-on-surface text-nowrap flex flex-row gap-1 items-center">
                +1000 <Coin w={20} />
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
