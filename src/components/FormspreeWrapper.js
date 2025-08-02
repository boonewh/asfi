'use client'
import { FormspreeProvider } from '@formspree/react'

export default function FormspreeWrapper({ children }) {
  return <FormspreeProvider>{children}</FormspreeProvider>
}
