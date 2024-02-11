interface CategoryProps {
    label: string,
    slug: string,
    image: {
        url: string
    }
}

interface BannerMap {
    banner: {
        image: {
            url: string
        }
        slug: string
    }
}

export interface BannerData {
    banners: BannerMap[]
}

export interface CateMain {
    categories: CategoryProps[]
}
