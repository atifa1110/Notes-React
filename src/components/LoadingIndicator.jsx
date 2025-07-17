import React from 'react'
import { useTranslation } from '../hooks/use-translation'


export default function LoadingIndicator() {
  const t = useTranslation();

  return (
    <p className='loading-indicator'>{t.NOTE.LOADING}</p>
  )
}