import { CssBaseline } from '@mui/material'
import { FC, PropsWithChildren, ReactNode } from 'react'
import Router from 'next/router'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  )
}
