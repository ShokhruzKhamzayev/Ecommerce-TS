import ProductPreview from "@/components/productPreview"
import { fetchALlProductsCategory } from "@/lib"

export default async function CategoryAllProducts({ searchParams }: {
    searchParams: {
        slug: string
    }
}) {
    const { slug } = searchParams

    const { categories } = await fetchALlProductsCategory(slug)
    const { products } = categories[0]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 custom-container gap-[30px] pb-[30px]">
            {
                <ProductPreview products={products} />
            }
        </div>
    )
}
