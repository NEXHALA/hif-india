import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { GENERAL_DONATE_URL } from '../data/donateLinks'

interface DonateState {
  isOpen: boolean
  cause?: string
  amount?: number
  donateUrl: string
}

interface DonateContextValue extends DonateState {
  openDonate: (cause?: string, amount?: number, donateUrl?: string) => void
  closeDonate: () => void
}

const DonateContext = createContext<DonateContextValue | null>(null)

export const DonateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<DonateState>({
    isOpen: false,
    donateUrl: GENERAL_DONATE_URL
  })

  const openDonate = useCallback((cause?: string, amount?: number, donateUrl?: string) => {
    setState({
      isOpen: true,
      cause,
      amount,
      donateUrl: donateUrl || GENERAL_DONATE_URL
    })
  }, [])

  const closeDonate = useCallback(() => {
    setState((s) => ({ ...s, isOpen: false }))
  }, [])

  const value = useMemo(
    () => ({ ...state, openDonate, closeDonate }),
    [state, openDonate, closeDonate]
  )

  return <DonateContext.Provider value={value}>{children}</DonateContext.Provider>
}

export function useDonate() {
  const ctx = useContext(DonateContext)
  if (!ctx) throw new Error('useDonate must be used within DonateProvider')
  return ctx
}
