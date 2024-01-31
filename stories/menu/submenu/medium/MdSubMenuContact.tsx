import React from 'react'
import { Dropdown, DropdownMenu, DropdownTrigger, DropdownItem, Button, DropdownSection } from "@nextui-org/react"
import { EmailIcon } from "@/stories/icon/contact/ContactsIcon"
import { WaIcon } from '@/stories/icon/contact/WaIcon';
import { InstagramIcon } from '@/stories/icon/contact/InstagramIcon';
import  {LinkedinIcon} from '@/stories/icon/contact/LinkedinIcon'
import { GithubIcon } from '@/stories/icon/contact/GithubIcon';
export default function  MdSubMenuContact() {
   
  return (
    <Dropdown showArrow={true}>
            <DropdownTrigger>
                <Button variant="light"  aria-label="setting">
                    Contact
                </Button>
            </DropdownTrigger>
            <DropdownMenu color="primary" variant="light" aria-label="dropdown menu contact">
                <DropdownSection title="All My Design" >
                
            <DropdownItem startContent={<WaIcon className="size-2 lg:size-4" />} href="https://wa.me/6285251743273?text=Hi%20Aji%20can%20we%20talk?%"  key="whatsapp">
                Whatsapp
            </DropdownItem >
            <DropdownItem startContent={<InstagramIcon className="size-2 lg:size-4" />}  href="https://www.instagram.com/dwisaji/" key="instagram">
                Instagram
            </DropdownItem >
            <DropdownItem startContent={<GithubIcon className="size-2 lg:size-4" />} href="https://github.com/dwissaaj" key="github">
                Github
            </DropdownItem >
            <DropdownItem startContent={<LinkedinIcon className="size-2 lg:size-4" />} href="https://www.linkedin.com/in/dwi-setyo-aji/" key="linkedin">
                Linkedin
            </DropdownItem >
            <DropdownItem className="font-md" startContent={<EmailIcon className="size-2 lg:size-4" />} href="mailto:dwisaji150@gmail.com" key="power bi">
                Email
            </DropdownItem >
     
              

                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
  )
}
