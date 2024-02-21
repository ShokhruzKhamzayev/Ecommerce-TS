import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import MiniCarousel from "./miniCarousel";
import { fetchAllBrands } from "@/lib";


export default async function Brand() {
  const { brands }: any = await fetchAllBrands();
  return (
    <div>
      <div className="starter">
        <h1 className="text-[20px] md:text-[30px] font-bold">Top <span className="text-[#008ECC]">Electronics Brands</span></h1>
      </div>
      <div className="my-[30px]">
        <MiniCarousel brands={brands} />
      </div>
    </div>
  );
}



