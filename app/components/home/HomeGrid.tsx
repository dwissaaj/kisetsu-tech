'use client'
import React from 'react'
import { Card,Button, CardHeader, CardFooter, Link, CardBody, Image } from "@nextui-org/react";

export default function HomeGrid() {
    return (
        <section className="w-full grid grid-cols-12 gap-4">
            <Card isFooterBlurred className="col-span-4 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <h2 className="text-xl lg:text-5xl uppercase font-bold">IT TECH</h2>
                    <h4 className="text-white/80 font-medium text-large">Code, Data & Scrap</h4>

                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="/home/2.png"
                />
                <CardFooter className="justify-between overflow-hidden py-1 absolute bottom-1">
                    <Button
                        href="https://github.com/dwissaaj"
                        as={Link}
                        color="secondary"
                        showAnchorIcon
                        variant="flat"
                    >
                        Github
                    </Button>
                </CardFooter>
            </Card>
            <Card isFooterBlurred className="col-span-4 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <h2 className="text-xl lg:text-5xl text-white/60 uppercase font-bold">Social Science</h2>
                    <h4 className="text-white font-medium text-large">Social Media, NLP & Tech Research</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="/home/4.png"
                />
                <CardFooter className="justify-between overflow-hidden py-1 absolute bottom-1">
                    <Button
                        href="https://cosmic-raptorex-650.notion.site/Design-Portfolio-e3d8261434b2445788742e997a8e0783"
                        as={Link}
                        color="secondary"
                        showAnchorIcon
                        variant="flat"
                    >
                        Research
                    </Button>
                </CardFooter>
            </Card >
            <Card isFooterBlurred className="col-span-4 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <h2 className="text-xl lg:text-5xl uppercase font-bold">ART</h2>
                    <h4 className="text-white/80 font-medium text-large">UI/UX,Graphic Design & Photography</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="/home/1.png"
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-sm lg:text-lg text-white/80">Available Soon</p>
                    <Link isDisabled={true} showAnchorIcon href="#" color="secondary">
                        Design
                    </Link>
                </CardFooter>
            </Card>
        </section>
    )
}
