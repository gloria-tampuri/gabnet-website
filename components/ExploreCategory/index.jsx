import React from 'react'
import classes from './ExploreCategory.module.css'
import Image from 'next/image'
import Link from 'next/link'

const CategoryData = [
    {
        name: "Toners and Inks",
        slug: "toners-and-inks",
        image: '/images/DIRECT_TO_FILM_INKS_CMYKW.webp'
    },
    {
        name: "Printers Spare Parts",
        slug: "printers spare parts",
        image: '/images/gapnet-8.jpeg'
    },
    {
        name: "Refurbished Printers",
        slug: "refurbished-printers",
        image: '/images/gapnet-2.jpeg',
        path: '/printers'
    },
    {
        name: "Printing Finishing",
        slug: "printing -finishing",
        image: '/images/gapnet-8.jpeg',
        path: '/printers'
    },
    {
        name: "Industrial Printers Special Commercial Machines",
        slug: "printing -finishing",
        image: '/images/gapnet-8.jpeg',
        path: '/printers'
    },
    {
        name: "Printer Spare Parts",
        slug: "printer-spare-parts",
        image: '/images/gapnet-8.jpeg',
        path: '/printers'
    },
]

export default function ExploreCategory() {

    return (
        <section className={classes.ExploreCategory}>
            {CategoryData.map((category) => (
                <Link href={""} className={classes.CategoryItem} key={category.slug}>
                    <Image width={200} height={200} src={category.image} alt={category.name} />
                    <p>{category.name}</p>
                </Link>
            ))}
        </section>
    )
}
