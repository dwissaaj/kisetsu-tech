import {Image} from "@nextui-org/react";
import NextImage from "next/image";
import Link from "next/link";
export const KisetsuLogo = () => (
  <Link href={'/'}>
    <Image as={NextImage} width={40} height={40} src='/Sakura Kisetsu.svg' alt="Logo Kisetsu" />
  
  </Link>
);
