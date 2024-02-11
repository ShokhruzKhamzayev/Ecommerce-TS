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

interface Product {
    title: string,
    slug: string,
    quan: number,
    rate: number,
    price: number,
    details: string,
    categorySlug: string,
    images: url[],
    discount: {
        discount: number
    }
}

interface url {
    url: string
}

interface MostWantedSingle {
    image: {
        url: string
    },
    nameWanted: string,
    slug: string,
    discount: {
        discount: number
    }
}

export interface DetailedProductI {
    category: {
        products: Product[]
        mostWanted: MostWantedSingle[]
    }
}

export interface BannerData {
    banners: BannerMap[]
}

export interface CateMain {
    categories: CategoryProps[]
}