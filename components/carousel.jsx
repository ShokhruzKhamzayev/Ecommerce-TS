'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { BannerData } from '@/types';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

export default function Carousel({ banner }) {
  const [bannerData, setBannerData] = useState([])
  useEffect(() => {
    setBannerData(banner)
  }, [])
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {
          banner.map((bn, index) => (
            <SwiperSlide key={index} className='relative'>
              <Link href={{
                pathname: `/category/${bn.slug}`,
                query: {
                  slug: bn.slug
                }
              }}>
                <div>
                  <Image src={bn.image.url} alt='banner' fill />
                </div>
              </Link>
            </SwiperSlide>
          ))
        }
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span className='counter' ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
