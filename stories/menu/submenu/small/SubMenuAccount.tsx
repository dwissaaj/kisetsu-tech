'use client'
import { ListboxSection, SelectItem, Select, Listbox, ListboxItem } from "@nextui-org/react";
import { LanguageIcon } from "@/stories/icon/account/LanguageIcon";
import { LogoutIcon } from "@/stories/icon/account/LogoutIcon";
import { PersonIcon } from "@/stories/icon/account/PersonIcon";
export default function SubMenuAccount() {
    return (
        <Listbox disabledKeys={["account"]} aria-label="Listbox data"
            variant="flat" color="primary" >
            <ListboxSection title="Your Privacy" showDivider>
                <ListboxItem startContent={<PersonIcon className="size-2 lg:size-4" />} href="" key="account">
                    Your Account
                </ListboxItem >
                <ListboxItem startContent={<LanguageIcon className="size-2 lg:size-4" />} href="" key="language">
                    <Select placeholder="English" value={"english"} defaultSelectedKeys={"english"} disabledKeys={["japan", "indonesia"]} label="Pick Language" key="secondary" variant="underlined" >
                        <SelectItem variant="flat" color="primary" key="english" value="english ">
                            English
                        </SelectItem>
                        <SelectItem variant="flat" color="primary" key="japan" value="japa ">
                            Japan
                        </SelectItem>

                        <SelectItem variant="flat" color="primary" key="indonesia" value="Indonesia ">
                            Indonesia
                        </SelectItem>
                    </Select>
                </ListboxItem >
            </ListboxSection>
            <ListboxSection title="Connect" showDivider>
                <ListboxItem description="Log Out" startContent={<LogoutIcon className="size-2 lg:size-4" />} href="" color="danger" key="power bi">
                    Log Out
                </ListboxItem >
            </ListboxSection>
        </Listbox>
    )
}