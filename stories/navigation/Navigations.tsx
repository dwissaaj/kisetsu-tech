'use client'
import MdSubMenuAccount from "../menu/submenu/medium/MdSubMenuAccount";
import MdSubMenuData from "../menu/submenu/medium/MdSubMenuData";
import MdSubMenuDesign from "../menu/submenu/medium/MdSubMenuDesign";
import MdSubMenuContact from "../menu/submenu/medium/MdSubMenuContact";
import MenuBurger from "../menu/MenuBurger";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarItem, Link } from "@nextui-org/react";
import {  useState } from "react";
import { ThemeSwitcher } from "@/app/components/ThemeSwitcher";
import { KisetsuLogo } from "@/app/components/brand/KisetsuLogo";
import InputUI from "../input/Input";
export default function Navigations() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <Navbar isBordered className="py-4" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <div className="hidden md:flex  space-x-4">
          <KisetsuLogo  />
          </div>
          <Link href="/" className="font-bold text-inherit">
          KISETSU
          </Link>
      
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="md:flex gap-4 " justify="center">
        <NavbarItem>
          <InputUI />
        </NavbarItem>
        <div className="hidden md:flex gap-3">
        
        <NavbarItem>
          <MdSubMenuDesign />
        </NavbarItem>
        <NavbarItem>
          <MdSubMenuContact />
        </NavbarItem>
        </div>
      </NavbarContent>
      <NavbarContent justify="end">
      <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <MdSubMenuAccount />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <MdSubMenuData />
        </NavbarItem>

      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
        <MenuBurger />
        </NavbarMenuItem>
      </NavbarMenu>
     
    </Navbar>
  );
}
