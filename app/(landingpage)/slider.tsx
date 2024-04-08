"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const CarouselPage = () => {
  const images = [
    { id: "1", src: "/banner.jpg" },
    { id: "2", src: "/meditation.webp" }
  ];
  return (
    <div className='max-w-[1400px] m-auto p-2'>
      <div className='flex lg:flex-row flex-col justify-between  '>
        <div className='max-w-xl lg:mb-0 mb-4 max-h-64'>
          <Carousel
            infiniteLoop={true}
            autoPlay={true}
            showThumbs={false}
            stopOnHover={true}
            swipeable={true}
            showStatus={false}
            interval={2000}
            showArrows={false}
            useKeyboardArrows={true}>
            {images.map((image, index) => (
              <div key={index}>
                <img className='max-w-xl max-h-64 ' src={image.src} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className='flex flex-col'>
          <div>
            <div>
              <img src="/Quote.webp" alt="/" />
            </div>
            <div className='grid grid-cols-2 gap-x-10 mt-10'>
              <div className='flex flex-col max-w-64'>
                <h1>What mental health needs is more sunlight, more candor, and more unashamed conversation.
                  <p className='mt-2 text-gray-500'>– Glenn Close</p>
                </h1>
              </div>
              <div className='flex flex-col max-w-64'>
                <h1>Mental health…is not a destination, but a process. It’s about how you drive, not where you’re going
                  <p className='mt-2 text-gray-500'>– Noam Shpencer</p>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}





