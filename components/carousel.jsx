'use client';
import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function MyCarousel() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={3000}
    >
      <div>
        <img src='https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/GD6.png' />
      </div>
      <div>
        <img src='https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/Aqua.png' />
      </div>
      <div>
        <img src='https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/Hondafit.png' />
      </div>
      <div>
        <img src='https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/Nissan.png' />
      </div>
    </Carousel>
  );
}