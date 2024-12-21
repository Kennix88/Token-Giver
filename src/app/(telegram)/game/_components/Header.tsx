'use client'
import tonSvg from '@/app/_assets/ton.svg'
import { localesMap } from '@/core/i18n/config'
import { setLocale } from '@/core/i18n/locale'
import { Locale } from '@/core/i18n/types'
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import Image from 'next/image'
import { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa6'
import { useLocale } from 'use-intl'

export default function Header() {
  const locale = useLocale()
  const [localeState, setLocaleState] = useState(
    localesMap.find((l) => l.key === locale) || localesMap[0],
  )

  const onChange = (value: { key: string; title: string; icon: string }) => {
    const locale = value.key as Locale
    setLocale(locale)
    setLocaleState(localesMap.find((l) => l.key === locale) || localesMap[0])
  }

  return (
    <div className="flex flex-row gap-2 items-center justify-between p-4 bg-surface-container-l2 rounded-md">
      <div className="text-xl flex flex-row gap-2 items-center font-bold ">
        <Image src={tonSvg} alt={'logo'} width={40} height={40} />
        Token Giver
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
  )
}
