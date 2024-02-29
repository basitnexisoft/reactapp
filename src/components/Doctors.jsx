import React, { useRef } from 'react';
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Doctors = () => {
  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };

  const doctorsData = [
    {
      img: "./src/assets/img/doctor7.jpg",
      name: "Dr. Serena Mitchell",
      specialties: "Orthopedic Surgeon",
    },
    {
      img: "/src/assets/img/doctor2.jpg",
      name: "Dr. Serena Mitchell",
      specialties: "Cardiologist",
    },
    {
      img: "/src/assets/img/doctor3.jpg",
      name: "Dr. Camila Rodriguez",
      specialties: "Pediatrician",
    },
    {
      img: "/src/assets/img/doctor4.jpg",
      name: "Dr. victor Nguyen",
      specialties: "Neurologist",
    },
    {
      img: "/src/assets/img/doctor5.jpg",
      name: "Dr. Ethan Carter",
      specialties: "Dermatologist",
    },
    {
      img: "/src/assets/img/doctor6.jpg",
      name: "Dr. Olivia Martinez",
      specialties: "Ophthalmologist",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">Our Doctors</h1>
          <p className="mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quidem, inventore?
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
           onClick={() => slider.current.slickPrev()}>
            <FaArrowLeft size={25} />
          </button>
          <button className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
           onClick={() => slider.current.slickNext()}>
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {doctorsData.map((doctor, index) => (
            <div
              className="h-[350px] text-black rounded-xl shadow-[rgba(0,0,0,0.24)] md-2 cursor-pointer"
              key={index}
            >
              <div>
                <img src={doctor.img} alt="Doctor" className="h-56 rounded-t-xl w-full" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-xl pt-4">{doctor.name}</h1>
                <h3 className="pt-2">{doctor.specialties}</h3>
                <p>{doctor.specialties}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;

