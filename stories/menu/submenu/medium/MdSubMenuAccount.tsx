'use client'
import { Dropdown, DropdownMenu, DropdownTrigger, DropdownItem, Button, DropdownSection } from "@nextui-org/react"
import { PersonIcon } from "@/stories/icon/account/PersonIcon"
import { LogoutIcon } from "@/stories/icon/account/LogoutIcon"
export default function MdSubMenuAccount() {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button isIconOnly color="default" variant="ghost" aria-label="setting">
                    <PersonIcon className="size-6" />
                </Button>
            </DropdownTrigger>
            <DropdownMenu color="primary" variant="light" aria-label="dropdown menu">
                <DropdownSection title="Setting Yours" showDivider>
                    <DropdownItem endContent={<PersonIcon />}>
                        Your Account
                    </DropdownItem>
                    <DropdownItem color="danger" description="Out From Account" endContent={<LogoutIcon />}>
                        Log out
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    )
}