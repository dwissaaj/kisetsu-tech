import React from 'react'
import { Dropdown, DropdownMenu, DropdownTrigger, DropdownItem, Button, DropdownSection } from "@nextui-org/react"
import { DataIcon } from '@/stories/icon/DataIcon'
import { SnaIcon } from "@/stories/icon/data/SnaIcon";
import { PowerBiIcon } from "@/stories/icon/data/PowerBiIcon";
import { TableauIcon } from "@/stories/icon/data/TableauIcon";
export default function MdSubMenuData() {
  return (
    <Dropdown>
            <DropdownTrigger>
                <Button isIconOnly color="default" variant="ghost" aria-label="setting">
                    <DataIcon className="size-4" />
                </Button>
            </DropdownTrigger>
            <DropdownMenu color="primary" variant="light" aria-label="dropdown menu">
                <DropdownSection title="Check My Analysis" showDivider>
        
                    <DropdownItem startContent={<PowerBiIcon className="size-2 lg:size-4" />} href="https://drive.google.com/file/d/1Kgyd9CT55lCdLJrsRgvY8GZqVB12-Ewh/view" key="power bi">
                        Power BI
                    </DropdownItem >
                    <DropdownItem startContent={<TableauIcon className="size-2 lg:size-4" />} href="https://public.tableau.com/app/profile/dwi.setyo.aji/vizzes" key="tableau">
                        Tableau
                    </DropdownItem >
                    <DropdownItem startContent={<SnaIcon className="size-2 lg:size-4" />} href="https://docs.google.com/spreadsheets/u/2/d/1EIFTOB16fVdaWIMFQNBc1-zjeqLu7ojd/edit?usp=sharing&ouid=100367702123448522266&rtpof=true&sd=true" key="social network analysis">
                        Social Network Analysis
                    </DropdownItem >
              

                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
  )
}
