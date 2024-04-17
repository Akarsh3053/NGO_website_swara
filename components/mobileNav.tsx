"use client"
import Link from "next/link";
import { Niconne } from 'next/font/google';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Contact } from "./Contact";

const niconne = Niconne({ subsets: ["latin"], weight: '400' });

export function MobileNav() {

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button className="relative group">
                    <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
                            <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
                            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>

                            <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                                <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                                <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                            </div>
                        </div>
                    </div>
                </button>
            </DrawerTrigger>
            <DrawerContent className="h-[50vh] max-w-full m-auto ">
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>
                            <div className={niconne.className}>
                                <Link href="/">
                                    <h1 className="text-3xl font-semibold text-red-400">Swara</h1>
                                    <h1 className="text-3xl font-semibold text-red-400">Foundation</h1>
                                </Link>
                            </div>
                        </DrawerTitle>
                        <DrawerDescription className="mt-5">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="flex flex-col items-center">
                                    <Link href="/services">
                                        <img className="w-20 h-20" src="/counselling_icon.png" alt="Services" />
                                    </Link>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Link href="/career">
                                        <img className="w-20 h-20" src="/edu_icon.png" alt="Educational Consulting" />
                                    </Link>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Link href="/about">
                                        <img className="w-20 h-20" src="/about_icon.png" alt="About Us" />
                                    </Link>
                                </div>
                            </div>
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Contact />
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
