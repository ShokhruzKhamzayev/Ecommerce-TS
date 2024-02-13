'use client'
import ReactStars from 'react-stars'

export default function ReactStarsManual({ rateValue }: {
    rateValue: number
}) {
    return <ReactStars value={rateValue} edit={false} />
}
