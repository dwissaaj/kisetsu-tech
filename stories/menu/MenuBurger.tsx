import { NavbarMenu, Navbar, NavbarContent, NavbarMenuItem, Link, Accordion, AccordionItem, Listbox, ListboxItem } from "@nextui-org/react";
import { GitHubLogoIcon, PersonIcon } from "@radix-ui/react-icons";
import { UilSetting } from "../icon/UilSettingIcon";
import { EpDataLine } from "../icon/EpDataLineIcon";
import { ComponentIcon } from "../icon/ComponentIcon";
import { PowerBiIcon } from "../icon/data/PowerBiIcon";
import { TableauIcon } from "../icon/data/TableauIcon";
import { SnaIcon } from "../icon/data/SnaIcon";
import { FigmaIcon } from "../icon/design/figmaIcon";
import { CanvaIcon } from "../icon/design/CanvaIcon";
import { CatalogIcon } from "../icon/design/CatalogIcon";
import { CameraIcon } from "../icon/design/CameraIcon";
import { WaIcon } from "../icon/contact/WaIcon";
import { InstagramIcon } from "../icon/contact/InstagramIcon";
import { LinkedinIcon } from "../icon/contact/LinkedinIcon";
import { EmailIcon } from "../icon/contact/EmailIcon";
export default function MenuBurger() {

    return (
        <>
            <NavbarMenuItem >
                <Accordion >
                    <AccordionItem indicator={<PersonIcon />} key="1" aria-label="Account" title="Account">
                    <Listbox aria-label="Listbox data"
                            variant="flat" color="primary" >
                            <ListboxItem startContent={<PersonIcon className="size-2" />} href="" key="power bi">
                                Your Account
                            </ListboxItem >
            
                        </Listbox>
                    </AccordionItem>

                    <AccordionItem indicator={<EpDataLine />} key="3" aria-label="Data" title="Data">

                        <Listbox aria-label="Listbox data"
                            variant="flat" color="primary" >
                            <ListboxItem startContent={<PowerBiIcon className="size-2" />} href="" key="power bi">
                                Power BI

                            </ListboxItem >
                            <ListboxItem startContent={<TableauIcon className="size-2" />} href="" key="tableau">
                                Tableau

                            </ListboxItem >
                            <ListboxItem startContent={<SnaIcon className="size-2" />} href="" key="social network analysi">
                                Social Network Analysis
                            </ListboxItem >
                        </Listbox>

                    </AccordionItem>
                    <AccordionItem indicator={<ComponentIcon />} key="4" aria-label="Design" title="Design">
                    <Listbox aria-label="Listbox data"
                            variant="bordered" color="primary" >
                            <ListboxItem startContent={<FigmaIcon className="size-2" />} href="" key="power bi">
                                UI/UX
                            </ListboxItem >
                            <ListboxItem startContent={<CameraIcon className="size-2" />} href="" key="power bi">
                                Photography
                            </ListboxItem >
                            <ListboxItem startContent={<CanvaIcon className="size-2" />} href="" key="power bi">
                                Social Media Design
                            </ListboxItem >
                            <ListboxItem startContent={<CatalogIcon className="size-2" />} href="" key="power bi">
                                Catalog Graphic Design
                            </ListboxItem >
                        </Listbox>

                    </AccordionItem>
                    <AccordionItem indicator={<UilSetting />} key="5" aria-label="Contact" title="Contact">
                    <Listbox aria-label="Listbox data"
                            variant="shadow" color="secondary" >
                            <ListboxItem startContent={<WaIcon className="size-2" />} href="" key="power bi">
                                Whatsapp
                            </ListboxItem >
                            <ListboxItem startContent={<InstagramIcon className="size-2" />} href="" key="power bi">
                                Instagram
                            </ListboxItem >
                            <ListboxItem startContent={<GitHubLogoIcon className="size-2" />} href="" key="power bi">
                                Github
                            </ListboxItem >
                            <ListboxItem startContent={<LinkedinIcon className="size-2" />} href="" key="power bi">
                                Linkedin
                            </ListboxItem >
                            <ListboxItem startContent={<EmailIcon className="size-2" />} href="" key="power bi">
                                Email
                            </ListboxItem >
                        </Listbox>
                    </AccordionItem>
                </Accordion>
            </NavbarMenuItem>

        </>
    )




}