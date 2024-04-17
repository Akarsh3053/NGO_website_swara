import Header from '@/components/navbar';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold text-center mb-8 font-serif text-teal-500">Our Story and Mission</h1>

          <div className="flex flex-col-reverse md:flex-row justify-between items-center">

            <div className="md:w-2/3 mb-4 md:mb-0">
              <p className="text-lg font-medium text-gray-800 leading-relaxed pr-8 text-center md:text-left">
                Swara Foundation is a Kanpur based NGO working in the field of Mental and Psychological Health Awareness. We organize regular camps and seminars to promote awareness among people as we believe that psychology is not just a Science it is a way to live life in a healthier way. We provide several services in this field as Swara Academy of Psychology which is a child organization of Swara Foundation.
              </p>
              <p className="text-lg font-medium text-gray-800 leading-relaxed mt-4 pr-8 text-center md:text-left">
                SWARA ACADEMY OF PSYCHOLOGY (SAP) has been established to cater to the growing needs of the parents, educationists, schools, and corporates for wide-ranging psychological problems and their solutions. Institutions for personality and ability testing are quite common in the western countries. Parents in India have also started realizing the need for psychological assessment of their children.
              </p>
            </div>

            <div className="md:w-1/3">
              <img
                src="/lead.jpg"
                alt="NGO Logo"
                className="mx-auto w-2/3 md:w-full rounded-lg shadow-md mb-10"
              />
            </div>

          </div>
        </div>
      </div>

    </>
  );
};

export default AboutPage;
