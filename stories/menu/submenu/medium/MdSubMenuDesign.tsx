import React from 'react'
import { Dropdown, DropdownMenu, DropdownTrigger, DropdownItem, Button, DropdownSection } from "@nextui-org/react"
import { FigmaIcon } from "@/stories/icon/design/FigmaIcon";
import { CameraIcon } from "@/stories/icon/design/CameraIcon";
import { CanvaIcon } from "@/stories/icon/design/CanvaIcon";
import { CatalogIcon } from "@/stories/icon/design/CatalogIcon";

export default function MdSubMenuDesign() {
   
  return (
    <Dropdown showArrow={true}>
            <DropdownTrigger>
                <Button variant="light"    aria-label="setting">
                    Design
                </Button>
            </DropdownTrigger>
            <DropdownMenu color="primary" variant="light" aria-label="dropdown menu design">
                <DropdownSection title="Reach me out here" >
                <DropdownItem startContent={<FigmaIcon className="size-2 lg:size-4" />} href="https://www.figma.com/file/RFeIKIAvjsJXMw6SpEdn8V/Kisetsu?type=design&node-id=0%3A1&mode=design&t=36BsevdILGatxItY-1" key="ui ux">
                UI/UX
            </DropdownItem >
            <DropdownItem startContent={<CameraIcon className="size-2 lg:size-4" />} href="https://www.instagram.com/dwisaji/" key="photography">
                Photography
            </DropdownItem >
            <DropdownItem startContent={<CanvaIcon className="size-2 lg:size-4" />} href="https://www.canva.com/design/DAF5FWNKjU4/ayvGYwI1lF5vMdUfdnX7Hw/view?utm_content=DAF5FWNKjU4&utm_campaign=designshare&utm_medium=link&utm_source=editor" key="social media design">
                Social Media Design
            </DropdownItem >
            <DropdownItem startContent={<CatalogIcon className="size-2 lg:size-4" />} href="https://www.canva.com/design/DAF46jSAJyg/DByfd-BppF7bCtevu3Nj1g/view?utm_content=DAF46jSAJyg&utm_campaign=designshare&utm_medium=link&utm_source=editor" key="catalog design">
                Catalog Graphic Design
            </DropdownItem >
            
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
  )
}
