// app/components/ThemeSwitcher.tsx
"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (theme === 'light')
    return (
      <button onClick={() => setTheme('dark')}>
        <MoonIcon className="size-6 md:size-8"  />
      </button>
    )
  if (theme === 'dark')
    return (
      <button  onClick={() => setTheme('light')}>
        <SunIcon className="size-6 md:size-8"  />
      </button>
    )

};