import { fetchBanner } from "@/lib"
import Carousel from "./carousel"

export default async function Banner() {
    const { banners } = await fetchBanner()
    return (
        <div className="hidden lg:block m-[30px]">
            <Carousel banner={banners} />
        </div>
    )
}
