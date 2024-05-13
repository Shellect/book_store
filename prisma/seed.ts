import {promises as fs} from "fs";
import path from "path";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const content = await fs.readFile(path.resolve(__dirname, "books.json"), "utf-8");
    const data = JSON.parse(content);
    data.forEach((async data => await prisma.book.create({data})));
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async e => {
        console.error(e);
        await prisma.$disconnect()
        process.exit(1)
    })