'use client'

import { useTranslations } from 'use-intl'

export default function BoostButton() {
  const t = useTranslations('game')

  return (
    <button
      className={
        'bg-error-container text-sm text-on-error-container font-medium px-4 py-2 rounded-md flex flex-row gap-2 items-center justify-center cursor-pointer'
      }>
      {/*<Image src={tgStarSvg} alt={'star'} width={15} height={15} />*/}
      {t('boostButton')}
    </button>
  )
}
