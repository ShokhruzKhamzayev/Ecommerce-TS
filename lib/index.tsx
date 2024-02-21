import { ALlBrandProducts, BannerData, BrandItem, CateMain, DetailedProductI, MostWantedList, SpecificProduct } from "@/types";
import { GraphQLClient, gql } from "graphql-request";

const gqlClient = new GraphQLClient(process.env.HYGRAPHQL_ENDPOINT as string)

export async function fetchCategories() {
    const query = gql`
        query Category {
            categories {
                label
                slug
                image {
                url
                }
            }
        }
    `

    const data = await gqlClient.request<CateMain>(query)
    return data
}

export async function fetchBanner() {
    const query = gql`
        query Banner {
            banners(last: 3) {
                image {
                url
            }
                slug
            }
        }
    `

    const banner = await gqlClient.request<BannerData>(query)
    return banner
}

export async function fetchDetailedProduct() {
    const query = gql`
        query DetailedProduct {
            categories(where: {slug: "mobile"}) {
                products(first:5) {
                    title
                    slug
                    quan
                    rate
                    price
                    details
                    categorySlug
                    images {
                        url
                    }
                    discount {
                        discount
                    }
                }
            }
        }
    `

    const detailedProd = await gqlClient.request<DetailedProductI>(query)
    return detailedProd
}

export async function fetchALlProductsCategory(slug: string) {
    const allCategoryProducts = gql`
        query CategoryProducts {
            categories(where: {slug: "${slug}"}) {
                products {
                title
                slug
                rate
                price
                images {
                    url
                }
                discount {
                    discount
                }
                }
            }
        }
    `

    const categoryProducts = await gqlClient.request<DetailedProductI>(allCategoryProducts)
    return categoryProducts
}

export function MostWanteds() {
    const query = gql`
    query DetailedCategoryProduc {
        mostWanteds(first: 6) {
            slug
            nameWanted
            discount {
            discount
            }
            image{
            url
            }
        }
    }
    `
    const mostWanteds = gqlClient.request<MostWantedList>(query)
    return mostWanteds
}

export async function fetchAllBrands() {
    const query = gql`
        query MyQuery {
            brands {
                nameBrand
                slug
                logo {
                url
                }
                bgColor {
                hex
                }
                exampleProduct {
                url
                }
                discount {
                discount
                }
            }
        }
    `

    const companyBrands = await gqlClient.request<BrandItem[]>(query)
    return companyBrands
}

export async function fetchProductsBrand(slug: string) {
    const query = gql`
    query Brand {
        brand(where: {slug: "${slug}"}) {
            product {
                title
                slug
                rate
                price
                images {
                    url
                }
                discount {
                    discount
                }
            }
        }
    }
    `

    const brandData = await gqlClient.request<ALlBrandProducts>(query)
    return brandData
}

export async function fetchSpecificProduct(slug: string) {
    const query = gql`
    query MyQuery {
        product(where: {slug: "${slug}"}) {
                    title
                    slug
                    quan
                    rate
                    price
                    details
                    images {
                        url
                    }
                    discount {
                        discount
                    }
                    brand {
                    nameBrand
                    slug
                    }
                    category {
                    label
                    slug
                    }
                    feedback
                }
        }
    `

    const fullProduct = await gqlClient.request<SpecificProduct>(query)
    return fullProduct
}
