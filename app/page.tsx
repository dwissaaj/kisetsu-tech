
import { Metadata } from "next";
import HomeTitle from "@/stories/home/homeTitle";
import HomeGrid from "@/stories/home/HomeGrid";

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
    <main className="flex flex-col items-center p-24 gap-4">
      <HomeTitle />
      <HomeGrid />
    </main>
  );
}
