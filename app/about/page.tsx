// AboutPage.tsx
import Header from '@/components/navbar';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className=" min-h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-2/3 mb-4 md:mb-0">
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                suscipit fringilla enim, nec bibendum ipsum volutpat eu. In hac
                habitasse platea dictumst. Mauris faucibus nunc id mi efficitur
                vestibulum.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Vestibulum sit amet convallis arcu. Mauris nec suscipit purus.
                Quisque nec fermentum orci. Aliquam erat volutpat. Vivamus
                bibendum sapien at nunc bibendum, nec convallis odio mattis.
              </p>
            </div>
            <div className="md:w-1/3">
              <img
                src="/mainlogo.webp"
                alt="NGO Logo"
                className="mx-auto w-2/3 md:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
