import { Listbox, ListboxItem } from "@nextui-org/react";
import { FigmaIcon } from "@/stories/icon/design/FigmaIcon";
import { CameraIcon } from "@/stories/icon/design/CameraIcon";
import { CanvaIcon } from "@/stories/icon/design/CanvaIcon";
import { CatalogIcon } from "@/stories/icon/design/CatalogIcon";
export default function SubMenuDesign() {
    return (
        <Listbox aria-label="Listbox data"
            variant="bordered" color="primary" >
            <ListboxItem startContent={<FigmaIcon className="size-2 lg:size-4" />} href="https://www.figma.com/file/RFeIKIAvjsJXMw6SpEdn8V/Kisetsu?type=design&node-id=0%3A1&mode=design&t=36BsevdILGatxItY-1" key="ui ux">
                UI/UX
            </ListboxItem >
            <ListboxItem startContent={<CameraIcon className="size-2 lg:size-4" />} href="https://www.instagram.com/dwisaji/" key="photography">
                Photography
            </ListboxItem >
            <ListboxItem startContent={<CanvaIcon className="size-2 lg:size-4" />} href="https://www.canva.com/design/DAF5FWNKjU4/ayvGYwI1lF5vMdUfdnX7Hw/view?utm_content=DAF5FWNKjU4&utm_campaign=designshare&utm_medium=link&utm_source=editor" key="social media design">
                Social Media Design
            </ListboxItem >
            <ListboxItem startContent={<CatalogIcon className="size-2 lg:size-4" />} href="https://www.canva.com/design/DAF46jSAJyg/DByfd-BppF7bCtevu3Nj1g/view?utm_content=DAF46jSAJyg&utm_campaign=designshare&utm_medium=link&utm_source=editor" key="catalog design">
                Catalog Graphic Design
            </ListboxItem >
        </Listbox>
    )
}