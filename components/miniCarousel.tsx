'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './carouselMini.css'

import { Pagination, Autoplay } from 'swiper/modules';
import { BrandItem } from '@/types';
import CustomImage from './customImage';
import Link from 'next/link';

export default function MiniCarousel({ brands }: {
    brands: BrandItem[]
}) {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
            >
                {
                    brands.map((brand, index) => (
                        <SwiperSlide className='swiper-custom' key={index}>
                            <Link href={{
                                pathname: `/category/${brand.slug}`,
                                query: {
                                    slug: brand.slug
                                }
                            }} className={`bg-[${brand.bgColor.hex}] flex justify-between items-center w-full h-full`}>
                                <div className={brand.nameBrand === "APPLE" ? "text-white" : "text-inherit"}>
                                    <span>{brand.nameBrand}</span>
                                    <div className={`relative ${brand.nameBrand === 'REALME' ? 'min-w-[200px]' : 'w-[80px]'} ${brand.nameBrand === 'APPLE' ? ' h-[200px]' : ' h-[60px]'}`}>
                                        <CustomImage src={brand.logo.url} alt={`Logo of brand ${brand.nameBrand}`} />
                                    </div>
                                    {
                                        brand?.discount?.discount > 0 ? (
                                            <p>UP to {brand?.discount?.discount}% OFF</p>
                                        ) : (
                                            <p>No OFF's yet</p>
                                        )
                                    }
                                </div>
                                <div>
                                    <div className='relative w-[250px] h-[300px]'>
                                        <CustomImage src={brand.exampleProduct.url} alt={brand.nameBrand} />
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}
