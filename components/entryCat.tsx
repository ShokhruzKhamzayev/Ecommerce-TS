import { MostWanteds, fetchDetailedProduct } from "@/lib"
import Image from "next/image"
import Link from "next/link"
import { FaChevronRight } from "react-icons/fa6"
import CustomImage from "./customImage"

export default async function EntryCard({ simpleTitle, coloredTitle, nameCategory, daily }: {
  simpleTitle: string,
  coloredTitle: string,
  nameCategory: string,
  daily: boolean
}) {
  const detailedProd = await fetchDetailedProduct()
  const { mostWanteds } = await MostWanteds()
  const { categories } = detailedProd
  const { products } = categories[0]
  return (
    <div>
      <div className="starter">
        <h1 className="text-[20px] md:text-[30px] font-bold">{simpleTitle} <span className="text-[#008ECC]">{coloredTitle}</span></h1>
        <Link href={{
          pathname: `/category/${nameCategory}`,
          query: {
            slug: nameCategory
          }
        }} className="flex items-center gap-[7px]">
          View all
          <FaChevronRight />
        </Link>
      </div>
      <div className="wrapper-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-[16px] gap-y-[20px]">
        {
          daily ? (
            <>
              {
                mostWanteds.map((item, index) => (
                  <Link href={{
                    pathname: `/product/${item.slug}`,
                    query: {
                      slug: item.slug
                    }
                  }} key={index} className="mt-[15px]">
                    <div className="bg-[#EDEDED] py-[20px] rounded-[16px]">
                      <div className="img-container relative w-full h-[200px]">
                        <CustomImage src={item.image.url} alt={item.nameWanted} />
                      </div>
                    </div>
                    <div className="info relative text-center ">
                      <h2 className="text-[20px] text-[#666666] mt-[20px]">{item.nameWanted}</h2>
                      <h3 className="text-[20px] font-bold">
                        {
                          item?.discount?.discount > 0 ? (
                            <p>UP to {item?.discount?.discount}% OFF</p>
                          ) : (
                            <p>No OFF's yet</p>
                          )
                        }
                      </h3>
                    </div>
                  </Link>
                ))
              }
            </>
          ) : (
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
                      <div className="flex flex-col bg-[#008ECC] w-[51px] absolute right-0 top-0 rounded-[0px_12px_0px_12px] z-10 text-white justify-center items-center p-[10px]">
                        <span>{item?.discount?.discount}%</span>
                        <span>OFF</span>
                      </div>
                      <div className="img-container relative w-full h-[220px]">
                        <CustomImage src={item.images[0].url} alt={item.title} />
                      </div>
                    </div>
                    <div className="p-[12px]">
                      <h1 className="font-bold ">{item.title}</h1>
                      <div className="flex gap-[12px] border-b border-[#EDEDED] pb-[10px]">
                        {
                          item?.discount?.discount > 0 ? (
                            <>
                              <h2>${Math.floor(item.price - item.price / 100 * item?.discount?.discount)}</h2>
                              <h2 className="line-through text-gray-400">${item.price}</h2>
                            </>
                          ) : (
                            <h2 className="line-through text-gray-400">${item.price}</h2>
                          )
                        }
                      </div>
                    </div>
                    <div className="pl-[12px] pb-[12px]">
                      <h3 className="text-[#249B3E] font-bold "> Save - $
                        {
                          item?.discount?.discount > 0 ? (
                            Math.floor(item.price / 100 * item?.discount?.discount)
                          ) : (
                            'No savings yet'
                          )

                        }</h3>
                    </div>
                  </Link>
                ))
              }
            </>
          )
        }
      </div>
    </div>
  )
}
// 