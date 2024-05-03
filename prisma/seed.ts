import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.book.create({
        data: {
            "title": "Контролируемый взлом. Библия социальной инженерии",
            "author": "Юрий Другач",
            "image": "/media/covers/3025575-1.jpg"
        }
    });
    await prisma.book.create({
        data: {
            "title": "Страна самоцветов. Книга 1",
            "author": "Харуко Итикава",
            "image": "/media/covers/3001571-3.jpg"
        }
    });
    await prisma.book.create({
        data: {
            "title": "Ведьмак. Последнее желание. Меч предназначения",
            "author": "Анджей Сапковский",
            "image": "/media/covers/2777109-2.jpg"
        }
    });
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async () => {
        await prisma.$disconnect()
        process.exit(1)
    })