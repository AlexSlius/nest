import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.city.create({
        data: {
            name: 'Київ',
            lat: 50.4501,
            lng: 30.5234,
        },
    });

    await prisma.role.create({
        data: {
            name: 'Адміністратор',
            cityId: 1
        },
    });

    await prisma.place.create({
        data: {
            name: 'Офіс',
            cityId: 1
        },
    });

    await prisma.position.create({
        data: {
            name: 'IT спеціаліст',
        },
    });

    await prisma.user.create({
        data: {
            name: "Олександр",
            middleName: "Олександрович",
            surname: "Слюсарчук",
            phone: "+380660129583",
            email: "alex@gmail.com",
            password: "3232alex23",
            cityId: 1,
            roleId: 1,
            placeId: 1,
            positionid: 1
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
