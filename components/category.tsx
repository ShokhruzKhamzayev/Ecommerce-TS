import { FaChevronRight } from "react-icons/fa";
import { fetchCategories } from "@/lib"
import Link from "next/link"
import CustomImage from "./customImage";


export default async function Category({ withImage }: { withImage: boolean }) {
    const { categories } = await fetchCategories()
    return (
        <div className="flex justify-center items-center flex-wrap gap-x-[20px] gap-y-[10px] lg:justify-between border-y border-[#EDEDED] py-[17px] my-[20px] lg:mt-0">
            {
                categories.map(category => (
                    <Link href={{
                        pathname: `/category/${category.slug}`,
                        query: {
                            slug: category.slug
                        }
                    }} key={category.slug}>
                        {
                            withImage ? (
                                <div className="flex justify-center items-center flex-col gap-[15px]">
                                    <div className="bg-[#F5F5F5] p-[20px] rounded-[50%]">
                                        <div className="relative w-[100px] h-[100px]">
                                            <CustomImage src={category.image.url} alt="photo of category" />
                                        </div>
                                    </div>
                                    <span className="md:text-[16px] text-[20px] font-bold">{category.label}</span>
                                </div>
                            ) : (
                                <div className="flex items-center gap-[6px] bg-[#F3F9FB] py-[10px] px-[14px] rounded-[12px] text-[#222222] hover:bg-[#008ECC] hover:text-white transition-all duration-500">
                                    <span className="text-[14px] md:text-[16px]">{category.label}</span>
                                    <FaChevronRight size={16} color="008ecc" />
                                </div>
                            )
                        }
                    </Link>
                ))
            }
        </div>
    )
}
