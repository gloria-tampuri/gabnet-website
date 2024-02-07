import React from 'react'
import classes from './ExploreCategory.module.css'
import Image from 'next/image'

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
        image: '/images/gapnet-2.jpeg'
    },
    {
        name: "Printing Finishing",
        slug: "printing -finishing",
        image: '/images/gapnet-8.jpeg'
    },
    {
        name: "Industrial Printers Special Commercial Machines",
        slug: "printing -finishing",
        image: '/images/gapnet-8.jpeg'
    },
    {
        name: "Printer Spare Parts",
        slug: "printer-spare-parts",
        image: '/images/gapnet-8.jpeg'
    },
]

export default function ExploreCategory() {

    return (
        <section className={classes.ExploreCategory}>
            {CategoryData.map((category) => (
                <div className={classes.CategoryItem} key={category.slug}>
                    <Image width={200} height={200} src={category.image} alt={category.name} />
                    <p>{category.name}</p>
                </div>
            ))}
        </section>
    )
}
