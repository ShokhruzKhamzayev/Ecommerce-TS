import React from 'react'
import CustomImage from './customImage'
import Link from 'next/link'
import { Product } from '@/types'
import { FaChevronRight } from 'react-icons/fa6'

export default function ProductPreview({ products }: {
    products: Product[]
}) {
    return (
        <>
            {
                products.map((item, index) => (
                    <Link href={{
                        pathname: `/product/${item.slug}`,
                        query: {
                            slug: item.slug
                        }
                    }} key={index} className="mt-[15px] border rounded-[16px]">
                        <div className="bg-[#EDEDED] rounded-t-[16px] py-[12px] relative">
                            {
                                item?.discount?.discount > 0 ? (
                                    <>
                                        <div className="flex flex-col bg-[#008ECC] w-[51px] absolute right-0 top-0 rounded-[0px_12px_0px_12px] z-10 text-white justify-center items-center p-[10px]">
                                            <span>{item?.discount?.discount}%</span>
                                            <span>OFF</span>
                                        </div>
                                    </>
                                ) : (
                                    <span></span>
                                )
                            }

                            <div className="img-container relative w-full h-[220px]">
                                <CustomImage src={item.images[0].url} alt={item.title} />
                            </div>
                        </div>
                        <div className="p-[12px]">
                            <h1 className="font-bold ">{item.title}</h1>
                            <div className="flex gap-[12px] border-b border-[#EDEDED] py-[10px]">
                                {
                                    item?.discount?.discount > 0 ? (
                                        <>
                                            <h2>${Math.floor(item.price - item.price / 100 * item?.discount?.discount)}</h2>
                                            <h2 className="line-through text-gray-400">${item.price}</h2>
                                        </>
                                    ) : (
                                        <h2 className="text-black">${item.price}</h2>
                                    )
                                }
                            </div>
                        </div>
                        <div className="pl-[12px] pb-[12px] flex justify-between items-center">
                            <h3 className="text-[#249B3E] font-bold ">
                                {
                                    item?.discount?.discount > 0 ? (
                                        `$${Math.floor(item.price / 100 * item?.discount?.discount)} save now`
                                    ) : (
                                        <span>No savings yet</span>
                                    )

                                }
                            </h3>
                            <span className='flex justify-center items-center gap-[5px] pr-[10px] text-[#008ECC] animate-bounce'>
                                More
                                <FaChevronRight />
                            </span>
                        </div>
                    </Link >
                ))
            }
        </>
    )
}
