import {promises as fs} from "fs";
import path from "path";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.book.deleteMany();
    const content = await fs.readFile(path.resolve(__dirname, "books.json"), "utf-8");
    const data = JSON.parse(content);
    for (let i = 0; i < data.length; i++) {
        await prisma.book.create({data: data[i]});
    }
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