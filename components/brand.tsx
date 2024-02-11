import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import MiniCarousel from "./miniCarousel";
import { fetchAllBrands } from "@/lib";
import { BrandItem } from "@/types";

export default async function Brand() {
  const companyBrands = await fetchAllBrands()
  return (
    <div>
      <div className="starter">
        <h1 className="text-[20px] md:text-[30px] font-bold">Top <span className="text-[#008ECC]">Electronics Brands</span></h1>
        <Link href={{
          pathname: `/category/brands}`,
        }} className="flex items-center gap-[7px]">
          View all
          <FaChevronRight />
        </Link>
      </div>
      <div>
        <MiniCarousel brands={companyBrands}/>
      </div>
    </div>
  )
}
