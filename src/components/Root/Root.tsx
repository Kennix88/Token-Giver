'use client'

import {
  initData,
  miniApp,
  useLaunchParams,
  useSignal,
} from '@telegram-apps/sdk-react'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { type PropsWithChildren, useEffect } from 'react'

import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ErrorPage } from '@/components/ErrorPage'
import { setLocale } from '@/core/i18n/locale'
import { init } from '@/core/init'
import { useClientOnce } from '@/hooks/useClientOnce'
import { useDidMount } from '@/hooks/useDidMount'

import { AppRoot } from '@telegram-apps/telegram-ui'
import './styles.css'

function RootInner({ children }: PropsWithChildren) {
  const isDev = process.env.NODE_ENV === 'development'

  const lp = useLaunchParams()
  const debug = isDev || lp.startParam === 'debug'

  // Initialize the library.
  useClientOnce(() => {
    init(debug)
  })

  const isDark = useSignal(miniApp.isDark)
  const initDataUser = useSignal(initData.user)

  // Set the user locale.
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    initDataUser && setLocale(initDataUser.languageCode)
  }, [initDataUser])

  return (
    <TonConnectUIProvider manifestUrl="/tonconnect-manifest.json">
      <AppRoot
        appearance={isDark ? 'dark' : 'light'}
        platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
        className="bg-background text-on-surface w-screen min-h-screen tracking-wider">
        {children}
      </AppRoot>
    </TonConnectUIProvider>
  )
}

export function Root(props: PropsWithChildren) {
  // Unfortunately, Telegram Mini Apps does not allow us to use all features of
  // the Server Side Rendering. That's why we are showing loader on the server
  // side.
  const didMount = useDidMount()

  return didMount ? (
    <ErrorBoundary fallback={ErrorPage}>
      <RootInner {...props} />
    </ErrorBoundary>
  ) : (
    <div className="root__loading bg-background text-on-surface w-screen min-h-screen...">
      Loading...
    </div>
  )
}
