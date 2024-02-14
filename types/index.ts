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

export interface Product {
    title: string,
    slug: string,
    quan: number,
    rate: number,
    price: number,
    details: string,
    categorySlug: string,
    images: Url[],
    feedback: number
    discount: {
        discount: number
    }
    brand: {
        nameBrand: string,
        slug: string
    }
    category: {
        label: string
        slug: string
    }
}

export interface SpecificProduct {
    product: Product,
    
}

export interface Url {
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

export interface BrandItem {
    nameBrand: string,
    slug: string,
    logo: {
        url: string
    },
    bgColor: {
        hex: string
    },
    exampleProduct: {
        url: string
    },
    discount: {
        discount: number
    }
}

export interface MostWantedList {
    mostWanteds: MostWantedSingle[]
}

interface Products {
    products: Product[]
}

interface ProductBrandType {
    product: Product[]
}

export interface ALlBrandProducts {
    brand: ProductBrandType
}

export interface DetailedProductI {
    categories: Products[]
}

export interface BannerData {
    banners: BannerMap[]
}

export interface CateMain {
    categories: CategoryProps[]
}