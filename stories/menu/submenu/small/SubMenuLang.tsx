import { SelectItem, Select } from "@nextui-org/react";
export default function SubMenuLang() {
    return (
        <Select placeholder="English" value={"english"} defaultSelectedKeys={"english"} disabledKeys={["japan", "indonesia"]} label="Pick Language" key="secondary" variant="underlined" >
            <SelectItem variant="flat" color="primary" key="english" value="english ">
                English
            </SelectItem>
            <SelectItem variant="flat" color="primary" key="japan" value="japaN ">
                Japan
            </SelectItem>

            <SelectItem variant="flat" color="primary" key="indonesia" value="Indonesia ">
                Indonesia
            </SelectItem>
        </Select>
    )
}