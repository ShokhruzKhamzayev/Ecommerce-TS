'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination, Autoplay } from 'swiper/modules';
import CustomImage from './customImage';
import Link from 'next/link';
import { BrandItem } from '@/types';

export default function App({ brands }: {
    brands: BrandItem[]
}) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1320: {
                        slidesPerView: 3,
                        spaceBetween: 50
                    }
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    brands.map((brand, index) => (
                        <SwiperSlide className='swiper-custom' key={index} style={{ backgroundColor: brand.bgColor.hex, borderRadius: 20 }}>
                            <Link href={{
                                pathname: `/brand/${brand.slug}`,
                                query: {
                                    slug: brand.slug
                                }
                            }} className={'flex w-full h-full items-center px-[15px]'}>
                                <div className={`swiper-custom ${brand.nameBrand === 'REALME' ? 'text-black' : 'text-white'} flex flex-col h-[100%] justify-between py-[40px] w-[60%] text-left`}>
                                    <span className='border border-gray-500 w-fit py-[15px] px-[25px] rounded-[12px]'>{brand.nameBrand}</span>
                                    <div className={`relative ${brand.nameBrand === 'REALME' ? 'min-w-[200px]' : 'w-[90px]'} ${brand.slug === 'apple' ? ' h-[80px]' : ' h-[60px]'}`}>
                                        <CustomImage src={brand.logo.url} alt={`Logo of brand ${brand.nameBrand}`} />
                                    </div>
                                    {
                                        brand?.discount?.discount > 0 ? (
                                            <p>UP to {brand?.discount?.discount}% OFF</p>
                                        ) : (
                                            <p>No OFF&quot;s yet</p>
                                        )
                                    }
                                </div>
                                <div>
                                    <div className='relative w-[180px] h-[230px]'>
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
