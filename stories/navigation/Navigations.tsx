'use client'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,Input, Navbar, NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarItem, Link, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { PersonIcon } from "@radix-ui/react-icons";
import MenuBurger from "../menu/MenuBurger";
import { ThemeSwitcher } from "@/app/components/ThemeSwitcher";
export default function Navigations() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
    
          <p className="font-bold text-inherit">KISETSU</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
         <MenuBurger />
      </NavbarMenu>
     
    </Navbar>
  );
}
