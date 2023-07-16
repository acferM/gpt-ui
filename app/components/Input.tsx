'use client'

import { useState } from 'react'
import { Plus } from './icons'

export function Input() {
  const [isFocused, setIsFocused] = useState(false)

  const focusedStyles = isFocused ? 'outline outline-blue-400' : ''

  return (
    <label
      className={`flex items-center gap-4 bg-gray-06 p-4 rounded-2xl border border-gray-05 w-full ${focusedStyles}`}
    >
      <Plus />

      <input
        className="bg-transparent w-full text-2 font-2 leading-2 text-gray-01 placeholder:text-gray-03 focus:outline-none"
        placeholder='Envie uma mensagem ou digite "/" para exibir comandos'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type="text"
      />
    </label>
  )
}
