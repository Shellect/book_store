export const dynamic = 'force-dynamic' // defaults to auto

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

export async function GET() {
    return new Response(JSON.stringify(books),
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
}