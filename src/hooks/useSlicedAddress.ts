import { Address } from '@ton/ton'
import { CHAIN } from '@tonconnect/sdk'
import { useMemo } from 'react'

export function useSlicedAddress(
  address: string | null | undefined,
  chain?: CHAIN,
) {
  return useMemo(() => {
    if (!address) {
      return ''
    }

    const userFriendlyAddress = Address.parseRaw(address).toString({
      testOnly: chain === CHAIN.TESTNET,
      bounceable: false,
    })

    return (
      userFriendlyAddress.slice(0, 5) + '...' + userFriendlyAddress.slice(-5)
    )
  }, [address, chain])
}
