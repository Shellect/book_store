import Gallery from "@/components/gallery";
import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Магазин книг',
    description: 'Лучшие книги с доставкой по Краснодару',
}

export default function Page() {
    return (
        <Gallery></Gallery>
    )
}