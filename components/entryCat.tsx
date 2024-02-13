import { MostWanteds, fetchDetailedProduct } from "@/lib"
import Image from "next/image"
import Link from "next/link"
import { FaChevronRight } from "react-icons/fa6"
import CustomImage from "./customImage"
import ProductPreview from "./productPreview"

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
        }} className="flex items-center gap-[7px] text-center">
          View all
          <FaChevronRight />
        </Link>
      </div>
      <div className="wrapper-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-[16px] gap-y-[20px] py-[10px]">
        {
          daily ? (
            <>
              {
                mostWanteds.map((item, index) => (
                  <Link href={{
                    pathname: `/category/${item.slug}`,
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
              <ProductPreview products={products}/>
            </>
          )
        }
      </div>
    </div>
  )
}
// 