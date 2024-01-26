import Image from "next/image";
import {Button} from "@nextui-org/react";
 import { Metadata } from "next";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
export const metadata: Metadata = {
  title: 'Sakura | Kisetsu | ',
  description: 'Kisetsu Tech Dwi Aji Personal Website',
  applicationName: 'Kisetsu Sakura App ',
  referrer: 'origin-when-cross-origin',
  keywords: ['Dwis Aji', 'Front End Developer','indonesia', 'Japan', 'Data Analyst', 'UI/UX Designer'],
  authors: [{ name: 'Dwis Aji' }, { name: 'Dwis Aji', url: 'https://kisetsu.tech' }],
  creator: 'Dwis Aji',
  publisher: 'Dwis Aji',
 
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeSwitcher />
      <Button color="primary" variant="solid">Solid</Button>
    </main>
  );
}
