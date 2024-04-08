import React from 'react'
import Link from "next/link";
import { Niconne } from 'next/font/google';
import { Contact } from './Contact';

const niconne = Niconne({ subsets: ["latin"], weight: '400' });

const Header = () => {

    return (
        <>
            <header className="max-w-[1300px] m-auto flex items-center justify-between text-black p-2">
                <div className={niconne.className}>
                    <Link href="/">
                        <h1 className="text-3xl font-semibold">Swara</h1>
                        <h1 className="text-3xl font-semibold">Foundation</h1>
                    </Link>
                </div>
                <div className="md:block hidden">
                    <ul className="flex items-center gap-x-10 ">
                        <Link href="/service">
                            <li className="cursor-pointer">Counselling Services</li>
                        </Link>
                        <Link href="/career">
                            <li className="cursor-pointer">Educational Consulting</li>
                        </Link>
                        <Link href="/about">
                            <li className="cursor-pointer">About Us</li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <Contact />
                </div>
            </header>
        </>
    )
}

export default Header
