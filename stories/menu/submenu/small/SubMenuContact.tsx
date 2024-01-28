import { Listbox, ListboxItem } from "@nextui-org/react";
import { EmailIcon } from "@/stories/icon/contact/EmailIcon";
import { InstagramIcon } from "@/stories/icon/contact/InstagramIcon";
import { GithubIcon } from "@/stories/icon/contact/GithubIcon";
import { LinkedinIcon } from "@/stories/icon/contact/LinkedinIcon";
import { WaIcon } from "@/stories/icon/contact/WaIcon";
import { FastworkIcon } from "@/stories/icon/contact/FastworkIcon";
export default function SubMenuContact() {
    return (
        <Listbox aria-label="Listbox data"
            variant="shadow" color="primary" >
            <ListboxItem startContent={<WaIcon className="size-2" />} href="https://wa.me/6285251743273?text=Hi%20Aji%20can%20we%20talk?%"  key="whatsapp">
                Whatsapp
            </ListboxItem >
            <ListboxItem startContent={<InstagramIcon className="size-2" />}  href="https://www.instagram.com/dwisaji/" key="instagram">
                Instagram
            </ListboxItem >
            <ListboxItem startContent={<GithubIcon className="size-2" />} href="https://github.com/dwissaaj" key="github">
                Github
            </ListboxItem >
            <ListboxItem startContent={<LinkedinIcon className="size-2" />} href="https://www.linkedin.com/in/dwi-setyo-aji/" key="linkedin">
                Linkedin
            </ListboxItem >
            <ListboxItem className="font-md" startContent={<EmailIcon className="size-2" />} href="mailto:dwisaji150@gmail.com" key="email">
                Email
            </ListboxItem >
            <ListboxItem className="font-md" startContent={<FastworkIcon className="size-2" />} href="https://fastwork.id/user/dwisaji" key="fastwork">
                Fastwork 
            </ListboxItem >
        </Listbox>
    )
}