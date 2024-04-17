import React from 'react'
import Link from "next/link";
import { Niconne } from 'next/font/google';
import { Contact } from './Contact';
import { MobileNav } from './mobileNav';

const niconne = Niconne({ subsets: ["latin"], weight: '400' });

const Header = () => {

    return (
        <>
            <header className="w-full m-auto flex items-center md:justify-around justify-between p-2 mb-8 shadow-sm rounded-sm">
                <div className={niconne.className}>
                    <Link href="/">
                        <h1 className="text-3xl font-semibold text-red-400">Swara</h1>
                        <h1 className="text-3xl font-semibold text-red-400">Foundation</h1>
                    </Link>
                </div>
                <div className="md:block hidden">
                    <ul className="flex items-center gap-x-10 text-gray-900">
                        <Link href="/services">
                            <li className="cursor-pointer font-semibold">Counselling Services</li>
                        </Link>
                        <Link href="/career">
                            <li className="cursor-pointer font-semibold">Educational Consulting</li>
                        </Link>
                        <Link href="/about">
                            <li className="cursor-pointer font-semibold">About Us</li>
                        </Link>
                    </ul>
                </div>
                <div className='hidden md:block'>
                    <Contact />
                </div>
                <div className='md:hidden block'>
                    <MobileNav />
                </div>
            </header>
        </>
    )
}

export default Header
