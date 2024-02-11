import { FaChevronRight } from "react-icons/fa";
import { fetchCategories } from "@/lib"
import Link from "next/link"


export default async function Category({ withImage }: { withImage: boolean }) {
    const { categories } = await fetchCategories()
    return (
        <div className="flex justify-between items-center flex-wrap">
            {
                categories.map(category => (
                    <Link href={{
                        pathname: `/category/${category.slug}`,
                        query: {
                            slug: category.slug
                        }
                    }} key={category.slug} className="bg-[#F3F9FB] py-[10px] px-[14px] rounded-[12px] text-[#222222] hover:bg-[#008ECC] hover:text-white transition-all duration-500">
                        {
                            withImage ? (
                                <h1>12</h1>
                            ) : (
                                <div className="flex items-center gap-[6px]">
                                    <span>{category.label}</span>
                                    <FaChevronRight />
                                </div>
                            )
                        }
                    </Link>
                ))
            }
        </div>
    )
}
