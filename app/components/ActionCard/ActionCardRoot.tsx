'use client'

import { PropsWithChildren } from 'react'
import { ArrowRight } from '@phosphor-icons/react'

export function ActionCardRoot({ children }: PropsWithChildren) {
  return (
    <button className="flex items-center justify-between w-full p-4 rounded-2xl border border-gray-05 bg-gray-06 text-gray-03 transition-all hover:border-blue-400">
      <div className="flex items-center gap-6">{children}</div>

      <div className="text-gray-03">
        <ArrowRight size={32} />
      </div>
    </button>
  )
}
