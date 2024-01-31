'use client'
import { Link } from "@nextui-org/react"
import { useRef } from "react";
import { useHover } from 'usehooks-ts'
export default function HomeCard() {
    const hoverRef = useRef(null)
    const hoverRef2 = useRef(null)
    const hoverRef3 = useRef(null)
    const isHover = useHover(hoverRef)
    const isHover2 = useHover(hoverRef2)
    const isHover3 = useHover(hoverRef3)


    return (
        <>
          

            <section className={'mx-auto container '}>
                <div className={'w-full justify-center items-center flex text-center my-12 '}>
                    <div className={'relative z-10 p-2 m-2'}>
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 -z-10  w-[300px] md:w-[500px] lg:w-[800px] h-[300px] blur-[100px] defaultHomeBg ${isHover ? 'blueHomeBg' : ''} ${isHover2 ? 'purpleHomeBg' : ""} ${isHover3 ? "redHomeBg" : ""}`}></div>
                        <div>
                            <h1 className={`transition delay-300 duration-500 ease-in-out font-bold z-10 brightness-125 inline-flex flex-col text-5xl lg:text-7xl xl:text-9xl text-opacity-120 text-transparent bg-clip-text defaultHome  ${isHover ? 'blueHome' : ''} ${isHover2 ? 'purpleHome' : ""} ${isHover3 ? "redHome" : ""} `}>
                                <span>DWI</span>
                                <span>SETYO AJI</span>
                            </h1>

                        </div>
                        <div className={'grid grid-cols-1 md:grid-cols-3 gap-2'}>
                            <div ref={hoverRef} className={'bg-white/5 hover:bg-white/10 brightness-110 backdrop-blur p-4 m-2 rounded-xl first:rounded-t-2xl last:rounded-b-2xl ' +
                                'md:first:rounded-t-lg md:last:rounded-b-lg md:first:!rounded-l-3xl md:last:!rounded-r-3xl ' +
                                'transition duration-300 ease-in-out hover:scale-110 '}>
                                <h2 className={'flex flex-col items-center text-zinc-50  gap-2'}>
                                    <span className={'font-display text-lg md:text-xl lg:text-2xl font-bold'}>IT Tech</span>
                                    <span className={'text-sm md:text-lg lg:text-xl opacity-30 font-normal'}>Coding & data science</span>
                                    <Link href={'https://github.com/dwissaaj'} className={`px-2 rounded-full text-black font-light ${isHover ? 'blueHomeBg' : 'bg-white'}`}>See Github</Link>
                                </h2>

                            </div>
                            <div ref={hoverRef2} className={'bg-white/5 hover:bg-white/10 brightness-110 backdrop-blur p-4 m-2 rounded-xl first:rounded-t-2xl last:rounded-b-2xl ' +
                                'md:first:rounded-t-lg md:last:rounded-b-lg md:first:!rounded-l-3xl md:last:!rounded-r-3xl ' +
                                'transition duration-300 ease-in-out hover:scale-110 '}>
                                <h2 className={'flex flex-col items-center text-zinc-50  gap-2'}>
                                    <span className={'font-display text-lg md:text-xl lg:text-2xl font-bold'}>Art</span>
                                    <span className={'text-sm md:text-lg lg:text-xl opacity-30 font-normal'}>Color, design, and composition</span>
                                    <Link href={'https://www.instagram.com/dwisaji/'} className={`px-2 rounded-full text-black font-light ${isHover2 ? 'purpleHomeBg' : 'bg-white'}`}>See Instagram</Link>
                                </h2>

                            </div>
                            <div ref={hoverRef3} className={'bg-white/5 hover:bg-white/10 brightness-110 backdrop-blur p-4 m-2 rounded-xl first:rounded-t-2xl last:rounded-b-2xl ' +
                                'md:first:rounded-t-lg md:last:rounded-b-lg md:first:!rounded-l-3xl md:last:!rounded-r-3xl ' +
                                'transition duration-300 ease-in-out hover:scale-110 '}>
                                <h2 className={'flex flex-col items-center text-zinc-50  gap-2'}>
                                    <span className={'font-display text-lg md:text-xl lg:text-2xl font-bold'}>Social Science</span>
                                    <span className={'text-sm md:text-lg lg:text-xl opacity-30 font-normal'}>Social Media Research, NLP, & IT</span>
                                    <Link href={'https://cosmic-raptorex-650.notion.site/Design-Portfolio-e3d8261434b2445788742e997a8e0783'} className={`px-2 rounded-full text-black font-light ${isHover3 ? 'redHomeBg' : 'bg-white'}`}>See Research</Link>
                                </h2>

                            </div>
                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}
