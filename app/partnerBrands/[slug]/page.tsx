import ProductPreview from "@/components/productPreview"
import { fetchProductsBrand } from "@/lib"

export default async function SpecificBrand({ searchParams }: {
  searchParams: {
    slug: string
  }
}) {
  const { slug } = searchParams
  const { brand } = await fetchProductsBrand(slug)
  const { product } = brand
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 custom-container gap-[30px] pb-[30px]">
      <ProductPreview products={product} />
    </div>
  )
}
