import CustomImage from "@/components/customImage"
import ReactStarsManual from "@/components/stars"
import { fetchSpecificProduct } from "@/lib"
import Link from "next/link"
import { FaHeart } from "react-icons/fa"
import { FaCartPlus } from "react-icons/fa6"

export default async function DetailedProduct({ searchParams }: {
    searchParams: {
        slug: string
    }
}) {
    const { slug } = searchParams
    const { product } = await fetchSpecificProduct(slug)
    const { images } = product
    return (
        <div className="custom-container">
            <div className="flex flex-col gap-[20px] lg:flex-row justify-between items-center">
                <div className="relative w-[100%] h-[300px] lg:w-[50%] lg:h-[450px]  overflow-hidden">
                    <CustomImage src={images[0].url} alt={product.title} />
                </div>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <div className="flex items-center gap-[10px]">
                        {
                            product.brand?.nameBrand ? (
                                <>
                                    <Link href={{
                                        pathname: `/category/${product.category.slug}`,
                                        query: {
                                            slug: product.category.slug
                                        }
                                    }} className="text-sm title-font text-gray-500 tracking-widest">{product.category.label}</Link>
                                    <Link href={{
                                        pathname: `/brand/${product.brand.slug}`,
                                        query: {
                                            slug: product.brand.slug
                                        }
                                    }} className="text-md title-font text-[#008ECC] tracking-widest capitalize">{product.brand.nameBrand.toLowerCase()}</Link>
                                </>
                            ) : (
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category.label}</h2>
                            )
                        }
                    </div>
                    <div>
                    </div>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
                    <div className="flex items-center gap-[20px] mt-[15px]">
                        <div className="flex items-center gap-[5px]">
                            <ReactStarsManual rateValue={product.rate} />
                            <span>({product.rate})</span>
                        </div>
                        <span className="text-gray-300 font-serif">{product.feedback} comments</span>
                    </div>
                    <p className="leading-relaxed my-[25px]">{product.details}</p>
                    <div className="flex justify-between items-center">
                        <span className="title-font font-medium text-2xl text-gray-900">
                            {
                                product?.discount?.discount > 0 ? (
                                    <div className="flex items-center gap-[13px]">
                                        <h2>${Math.floor(product.price - product.price / 100 * product?.discount?.discount)}</h2>
                                        <h2 className="line-through text-gray-400">${product.price}</h2>
                                    </div>
                                ) : (
                                    <h2 className="text-black">${product.price}</h2>
                                )
                            }
                        </span>
                        <button className="rounded-full w-[50px] h-[50px] bg-gray-200 border-0  flex items-center justify-center text-gray-500">
                            <FaCartPlus size={23} color="#008ECC"/>
                        </button>
                    </div>
                    <div>
                        <h3 className="text-center text-[#008ECC] text-lg">
                            {
                                product?.discount?.discount > 0 ? (
                                    `$${Math.floor(product.price / 100 * product?.discount?.discount)} save now`
                                ) : (
                                    <span></span>
                                )

                            }
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
