import { Listbox, ListboxItem } from "@nextui-org/react";
import { SnaIcon } from "@/stories/icon/data/SnaIcon";
import { PowerBiIcon } from "@/stories/icon/data/PowerBiIcon";
import { TableauIcon } from "@/stories/icon/data/TableauIcon";
export default function SubMenuData() {
    return (
        <Listbox aria-label="Listbox data"
            variant="flat" color="primary" >
            <ListboxItem startContent={<PowerBiIcon className="size-2 lg:size-4" />} href="https://drive.google.com/file/d/1Kgyd9CT55lCdLJrsRgvY8GZqVB12-Ewh/view" key="power bi">
                Power BI
            </ListboxItem >
            <ListboxItem startContent={<TableauIcon className="size-2 lg:size-4" />} href="https://public.tableau.com/app/profile/dwi.setyo.aji/vizzes" key="tableau">
                Tableau
            </ListboxItem >
            <ListboxItem startContent={<SnaIcon className="size-2 lg:size-4" />} href="https://docs.google.com/spreadsheets/u/2/d/1EIFTOB16fVdaWIMFQNBc1-zjeqLu7ojd/edit?usp=sharing&ouid=100367702123448522266&rtpof=true&sd=true" key="social network analysis">
                Social Network Analysis
            </ListboxItem >
        </Listbox>

    )
}