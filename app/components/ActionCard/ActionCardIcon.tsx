import { PropsWithChildren } from 'react'

export function ActionCardIcon({ children }: PropsWithChildren) {
  return (
    <div className="p-3 rounded-2xl w-min border border-gray-05 bg-gray-06 text-gray-03">
      {children}
    </div>
  )
}
