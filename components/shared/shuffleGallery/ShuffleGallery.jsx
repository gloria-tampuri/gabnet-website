import { motion } from "framer-motion";
import Link from 'next/link';
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
    return (
        <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
            <div>
                <span className="block mb-4 text-xs md:text-sm text-[#10B4F0] font-medium">
                    Quality every day
                </span>
                <h3 className="text-4xl md:text-6xl font-semibold">
                    Bringing Your Ideas to Life.
                </h3>
                <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
                    Discover the Ultimate Printing Solutions Tailored for Every Need.
                </p>
                <Link href="/explore" className="bg-[#10B4F0] text-white font-medium py-2 px-4 rounded transition-all hover:bg-[#028b89]active:scale-95">
                    Explore
                </Link>
            </div>
            <ShuffleGrid />
        </section>
    );
};

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const squareData = [
    {
        id: 1,
        src: "/images/gabnet-3.webp",
    },
    {
        id: 2,
        src: "/images/gabnet-6.webp",
    },
    {
        id: 3,
        src: "/images/gabnet-7.webp",
    },
    {
        id: 4,
        src: "/images/gabnet-8.webp",
    }
];

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
            }}
        ></motion.div>
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div className="grid grid-cols-2 grid-rows-2 h-[450px] gap-1">
            {squares.map((sq) => sq)}
        </div>
    );
};

export default ShuffleHero;