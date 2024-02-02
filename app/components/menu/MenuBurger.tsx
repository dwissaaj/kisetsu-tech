import { NavbarMenuItem, Accordion, AccordionItem } from "@nextui-org/react";
import { UilSetting } from "@/app/components/icon/UilSettingIcon";
import { PersonIcon } from "@/app/components/icon/account/PersonIcon";
import { DataIcon } from "@/app/components/icon/DataIcon";
import { ComponentIcon } from "@/app/components/icon/ComponentIcon";
import SubMenuAccount from "./submenu/small/SubMenuAccount";
import SubMenuData from "./submenu/small/SubMenuData";
import SubMenuDesign from "./submenu/small/SubMenuDesign";
import SubMenuContact from "./submenu/small/SubMenuContact";
export default function MenuBurger() {
    return (
        <>  
                <Accordion >
                    <AccordionItem indicator={<PersonIcon />} key="1" aria-label="Account" title="Account">
                        <SubMenuAccount />
                    </AccordionItem>
                    <AccordionItem indicator={<DataIcon />} key="3" aria-label="Data" title="Data">
                        <SubMenuData />
                    </AccordionItem>
                    <AccordionItem indicator={<ComponentIcon />} key="4" aria-label="Design" title="Design">
                        <SubMenuDesign />
                    </AccordionItem>
                    <AccordionItem indicator={<UilSetting />} key="5" aria-label="Contact" title="Contact">
                        <SubMenuContact />
                    </AccordionItem>
                </Accordion>
        </>
    )





}
