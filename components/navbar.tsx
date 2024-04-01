import React from 'react'
import { Button } from './ui/button'
import Link from "next/link";
import { Contact } from './Contact';
const Header = () => {
  return (
    <>
      <header className="max-w-[1300px] m-auto flex items-center justify-between text-black p-2">
                    <div>
                        <h1 className="text-xl font-semibold">Swara</h1>
                        <h1 className="text-xl font-semibold">Foundation</h1>
                    </div>
                    <div className="md:block hidden">
                        <ul className="flex items-center gap-x-10 ">
                            <Link href="/">
                                <li className="cursor-pointer">Counselling Services</li>
                            </Link>
                            <Link href="/service">
                                <li className="cursor-pointer">Educational Consulting</li>
                            </Link>
                            <Link href="career">
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
