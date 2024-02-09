"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { Button } from "@nextui-org/react";
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (theme === 'light')
    return (
      <Button variant="flat" color="secondary" onClick={() => setTheme('dark')}>
        <MoonIcon className="size-6 "  />
      </Button>
    )
  if (theme === 'dark')
    return (
      <Button variant="flat" color="secondary"  onClick={() => setTheme('light')}>
        <SunIcon className="size-6 "  />
      </Button>
    )

};