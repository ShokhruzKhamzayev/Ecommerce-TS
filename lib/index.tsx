import { BannerData, CateMain } from "@/types";
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