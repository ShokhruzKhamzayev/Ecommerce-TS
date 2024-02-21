'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carouselMini.css'

import { Pagination, Navigation } from 'swiper/modules';
import CustomImage from './customImage';

interface image {
    url: string
}

export default function CarouselProduct({ images }: {
    images: image[]
}) {
    return (
        <>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    images.map((image, ind) => (
                        <SwiperSlide key={ind} >
                            <div className='relative w-[300px] h-[350px]'>
                                <CustomImage src={image.url} alt='image of product' />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}
