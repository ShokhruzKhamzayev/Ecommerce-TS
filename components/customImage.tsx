'use client'
import Image from "next/image";
import { useState } from "react";

export default function CustomImage({ src, alt }: { src: any, alt: string }) {
    // const [loading, setLoading] = useState(true)
    return (
        <Image src={src} alt={alt} fill className={`overflow-hidden transition-all  duration-300 object-contain hover:scale-110 w-full'} `} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
    )
}
