import { Listbox, ListboxItem } from "@nextui-org/react";
import { EmailIcon } from "@/app/components/icon/contact/EmailIcon";
import { InstagramIcon } from "@/app/components/icon/contact/InstagramIcon";
import { GithubIcon } from "@/app/components/icon/contact/GithubIcon";
import { LinkedinIcon } from "@/app/components/icon/contact/LinkedinIcon";
import { WaIcon } from "@/app/components/icon/contact/WaIcon";
import { FastworkIcon } from "@/app/components/icon/contact/FastworkIcon";
export default function SubMenuContact() {
    return (
        <Listbox aria-label="Listbox data"
            variant="shadow" color="primary" >
            <ListboxItem startContent={<WaIcon className="size-2 lg:size-4" />} href="https://wa.me/6285251743273?text=Hi%20Aji%20can%20we%20talk?%"  key="whatsapp">
                Whatsapp
            </ListboxItem >
            <ListboxItem startContent={<InstagramIcon className="size-2 lg:size-4" />}  href="https://www.instagram.com/dwisaji/" key="instagram">
                Instagram
            </ListboxItem >
            <ListboxItem startContent={<GithubIcon className="size-2 lg:size-4" />} href="https://github.com/dwissaaj" key="github">
                Github
            </ListboxItem >
            <ListboxItem startContent={<LinkedinIcon className="size-2 lg:size-4" />} href="https://www.linkedin.com/in/dwi-setyo-aji/" key="linkedin">
                Linkedin
            </ListboxItem >
            <ListboxItem className="font-md" startContent={<EmailIcon className="size-2 lg:size-4" />} href="mailto:dwisaji150@gmail.com" key="email">
                Email
            </ListboxItem >
            <ListboxItem className="font-md" startContent={<FastworkIcon className="size-2 lg:size-4" />} href="https://fastwork.id/user/dwisaji" key="fastwork">
                Fastwork 
            </ListboxItem >
        </Listbox>
    )
}