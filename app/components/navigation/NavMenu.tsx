'use client'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,Input, Navbar, NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarItem, Link, Button } from "@nextui-org/react";
import { KisetsuLogo } from "../brand/KisetsuLogo"
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { PersonIcon } from "@radix-ui/react-icons";

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "account",
    "setting",
    "blog",
  ];

  return (
    <Navbar isBlurred={true} className="py-3 light:bg-primary dark:bg-primary light:border-b-2 light:border-white dark:border-b-2 border-zinc-800 shadow-md light:shadow-white dark:shadow-zinc-800" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        
        <NavbarBrand>
          <KisetsuLogo />
          <Link href="/" className="hidden md:flex font-bold text-inherit pl-2">KISETSU</Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="" justify="center">
        <NavbarItem>
          <Input
            isDisabled
            type="email"
            color="primary"
            placeholder="Search on Blog"
            className="max-w-full w-full"
          />
        </NavbarItem>

      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitcher />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <Dropdown>
      <DropdownTrigger>
        <Button  isIconOnly aria-label="account" className="hidden md:flex items-center justify-center">
          <PersonIcon className="size-8" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
      </NavbarContent>
      <NavbarMenu className="p-9">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full capitalize"
              href={item}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}