type params = {
    slug: string
}

export default function DetailedCategory({ searchParams }: {searchParams: params}) {
    const {slug} = searchParams
    return (
        <div>{slug}</div>
    )
}
