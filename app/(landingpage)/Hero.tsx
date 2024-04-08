import { Button } from "@/components/ui/button";
import Link from "next/link";


export const HeroPage = () => {
    return (
        <>
            <div className="">
                <div className="flex flex-col items-center md:mt-20 mt-10 mb-10 text-black">
                    <div className="rounded-full">
                        <img src="/mainlogo.webp" className="w-full h-full rounded-full" alt="mainLogo" />
                    </div>
                    <h1 className="md:text-6xl text-4xl font-semibold">Our Ambition</h1>
                    <p className="xl:max-w-2xl m-auto p-2  md:text-base text-sm text-center">SWARA ACADEMY OF PSYCHOLOGY (SAP) has been established to cater to the growing needs of the parents, educationists,
                        schools and corporates for wide ranging psychological problems and their solutions.
                        Institutions for personality and ability testing are quite common in the western countries.
                        Parents in India have also started realizing the need of psychological assessment of their children.</p>
                    <p className="xl:max-w-2xl m-auto md:text-base text-sm p-2 text-center mt-2">SWARA ACADEMY OF PSYCHOLOGY- A unique institute providing complete psycho-solution in India under one roof.
                        The institute provides various kinds of psychological services in these areas</p>
                    <div className="mt-2 flex items-center gap-x-2 sm:text-sm text-xs">
                        <Link href="/service"><Button>Design Your Life</Button></Link>
                        <Link href="/career"><Button variant="outline" className=" border">Enhance Your Career</Button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};
