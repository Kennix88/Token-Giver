'use client'
import { useSlicedAddress } from '@/hooks/useSlicedAddress'
import addSuffixToNumber from '@/utils/addSuffixToNumber.util'
import limitLengthString from '@/utils/limitLengthString.util.ts'
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react'
import { useRef } from 'react'
import { FaWallet } from 'react-icons/fa6'
import { useTranslations } from 'use-intl'

export default function Profile() {
  const wallet = useTonWallet()
  const address = useSlicedAddress(
    wallet?.account.address,
    wallet?.account.chain,
  )
  const t = useTranslations('game.home')
  const tonConnectButtonRef = useRef<HTMLButtonElement>(null)
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
        <div className="flex flex-row gap-2 flex-wrap col-span-2 items-center">
          <div className="flex justify-center items-center p-1 rounded-md bg-primary w-[40px] h-[40px]">
            🤖
          </div>
          <div className="flex flex-col gap-0">
            <div className="font-bold flex flex-row gap-2 text-[16px] items-center">
              <div>{limitLengthString('Innokenty Kennix')}</div>
            </div>
            <div className="text-[12px] flex flex-row gap-1 items-center font-medium">
              {address && (
                <>
                  <FaWallet />
                  {address}
                </>
              )}
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
      {!wallet && (
        <div className="flex flex-col gap-2">
          <button
            onClick={handleClickTonConnect}
            className={
              'mt-4 p-4 bg-info-container text-on-info-container rounded-md font-medium flex flex-row gap-2 items-center justify-between'
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
  )
}
