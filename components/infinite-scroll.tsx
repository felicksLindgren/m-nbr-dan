"use client"

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

type InfiniteScrollProps = {
    increment?: number;
    children: React.ReactNode[];
    skeleton?: React.ReactNode;
};

export default function InfiniteScroll({ children, increment = 5 }: InfiniteScrollProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { push } = useRouter();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    push(`?size=${children.length + increment}`, { scroll: false });
                }
            },
            { rootMargin: "164px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, children]);

    return (
        <>
            {children}
            <div ref={ref} />
        </>
    );
}