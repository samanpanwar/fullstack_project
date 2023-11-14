const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
    try{
        await db.category.createMany({
            data: [
                { name: "Technology Titans" },
                { name: "Financial Moguls" },
                { name: "Business Magnates" },
                { name: "Political & Economic Leaders" },
                { name: "Cryptocurrency & Blockchain Innovators" },
            ]
        })
    } catch (error) {
        console.error("error seeding default categories", error);
    } finally {
        await db.$disconnect();
    }
};

main();