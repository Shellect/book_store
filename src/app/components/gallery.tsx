import {PrismaClient} from "@prisma/client";
import Card from "../components/card";
import type {Metadata} from 'next';

const prisma = new PrismaClient();

export const metadata: Metadata = {
    title: 'Магазин книг',
    description: 'Лучшие книги с доставкой по Краснодару',
}

export default async function Gallery() {
    let books = await prisma.book.findMany();
    await prisma.$disconnect();
    let cards = books.map(book => <Card {...book} key={book.id}/>)

    return (
        <main className="container">
            <div className="row mt-3">
                <div className="col">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {cards}
                    </div>
                </div>
            </div>
        </main>
    );
}