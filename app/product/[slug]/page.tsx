export default function DetailedProduct({ searchParams }: {
    searchParams: {
        slug: string
    }
}) {
    const { slug } = searchParams
    return (
        <div>{slug}</div>
    )
}
