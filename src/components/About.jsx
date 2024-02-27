import React from 'react';
import img from '../assets/img/about.jpg';

function About() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 ga-5">
      <div className="w-full lg:w-3/4 space-y-4">
        <h1 className="text-4xl font-semibold text-center lg:text-left">About Us</h1>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam magnam omnis natus accusantium quos. Reprehenderit incidunt expedita molestiae impedit at sequi dolorem iste sit culpa, optio voluptates fugiat vero consequatur?
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempora quia suscipit illum, numquam incidunt dolor officia doloremque cupiditate, placeat explicabo sed iure quidem ipsam! Dolor, minus reiciendis.
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Saepe, illum. Accusantium ab expedita veniam nobis aut, in rerum repellendus! Exercitationem libero recusandae corrupti accusantium reiciendis in placeat illo maxime eo.
        </p>
      </div>
      <div className="w-full lg:w-3/4">
        <img src={img} alt="img" className="rounded-lg h-80" />
      </div>
    </div>
  );
}

export default About;
