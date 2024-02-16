"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { Button , Dropdown, DropdownTrigger, DropdownItem, DropdownMenu} from "@nextui-org/react";
import { FallIcon } from "./icon/theme/fallIcon";
import { SummerIcon } from "./icon/theme/summerIcon";
import { DarkIcon } from "./icon/theme/darkIcon";
import { LightIcon } from "./icon/theme/lightIcon";
import { WinterIcon } from "./icon/theme/winterIcon";
import { SpringIcon } from "./icon/theme/springIcon";
export function SixThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Dropdown closeOnSelect={false}>
    <DropdownTrigger>
      <Button 
        variant="bordered" 
      >
        Theme
      </Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="Static Actions">
      <DropdownItem key="fall">
        <Button size="sm" color="secondary" onClick={() => setTheme('fall')} endContent={<FallIcon />} fullWidth={true} variant="ghost">Fall</Button>
      </DropdownItem>
      <DropdownItem key="summer">
        <Button size="sm" color="secondary" onClick={() => setTheme('summer')} endContent={<SummerIcon />} fullWidth={true} variant="ghost">Summer</Button>
      </DropdownItem>
      <DropdownItem key="winter">
        <Button size="sm" color="secondary" onClick={() => setTheme('winter')} endContent={<WinterIcon />} fullWidth={true} variant="ghost">Winter</Button>
      </DropdownItem>
      <DropdownItem key="spring">
        <Button size="sm" color="secondary" onClick={() => setTheme('spring')} endContent={<SpringIcon />} fullWidth={true} variant="ghost">Spring</Button>
      </DropdownItem>
      <DropdownItem key="dark">
        <Button size="sm" color="secondary" onClick={() => setTheme('dark')} endContent={<DarkIcon />} fullWidth={true} variant="ghost">Dark</Button>
      </DropdownItem>
      <DropdownItem key="light">
        <Button size="sm" color="secondary" onClick={() => setTheme('light')} endContent={<LightIcon />} fullWidth={true} variant="ghost">Light</Button>
      </DropdownItem>
    </DropdownMenu >
    </Dropdown>
  )
};