'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import postpartum from '../Images/postpartum.PNG';
import pregnancy from '../Images/pregnancy.PNG';
import community from '../Images/community.PNG';
import resources from '../Images/resources.PNG';

const slides = [
  {
    src: pregnancy,
    alt: 'Pregnancy Support'
  },
  {
    src: community,
    alt: 'Community'
  },
  {
    src: resources,
    alt: 'Resources'
  },
  {
    src: postpartum,
    alt: 'Postpartum Support'
  }
]
export default function Welcome() {
  const [ slide, setSlide ] = useState(0);
  const router = useRouter();

  const nextSlide = () => {
    slide === slides.length - 1 ? router.push('/login') : setSlide(slide + 1);
  }
  return (
    <div className="bg-[#D1F1D1] h-screen flex flex-col justify-between">
      <div className="h-2/3 w-screen flex flex-col justify-center items-center">
        {slides.map((item, idx) => {
                return <Image src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide transition-opacity object-contain h-screen" : "slide slide-hidden hidden"}/>
            })}
      </div>
      <div className="flex justify-between items-center p-5">
        <Link className={slide === slides.length - 1 ? "invisible" : "text-black font-bold"} href="/login">SKIP</Link>
        <span className="indicators flex justify-center space-x-2 w-fit h-fit">
          {slides.map((_, idx) => {
            return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator bg-white h-2 w-2 border-none rounded-full outline-none shadow-[0px_0px_5px_#555] m-[0 0.2rem] cursor-pointer" : "h-2 w-2 border-none rounded-full outline-none shadow-[0px_0px_5px_#555] m-[0 0.2rem] cursor-pointer bg-gray-400"}></button>
          })}
        </span>
        <button className="text-black font-bold" onClick={nextSlide}>{slide === slides.length - 1 ? "FINISH" : "NEXT" }</button>
      </div>
    
    </div>
  )
}
