import React from "react";
import Card from "./Card.jsx";

let books = [
    {
        "id": 1,
        "title": "Контролируемый взлом. Библия социальной инженерии",
        "author": "Юрий Другач",
        "image": "/media/covers/3025575-1.jpg"
    },
    {
        "id": 2,
        "title": "Страна самоцветов. Книга 1",
        "author": "Харуко Итикава",
        "image": "/media/covers/3001571-3.jpg"
    },
    {
        "id": 3,
        "title": "Ведьмак. Последнее желание. Меч предназначения",
        "author": "Анджей Сапковский",
        "image": "/media/covers/2777109-2.jpg"
    }
];

export default function Gallery() {
    let cards = books.map(book => <Card {...book} key={book.id} />)

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