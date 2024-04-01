import Image from "next/image";

import Header from "@/components/navbar";
import { HeroPage } from "./(landingpage)/Hero";
import InfoPage from "./(landingpage)/Infopage";
import { CarouselPage } from "./(landingpage)/slider";


export default function Home() {
  return (
    <>
    <div className="">
       <Header/>
       <HeroPage/>
       <InfoPage/>
       <CarouselPage/>
    </div>
    </>
  );
}
