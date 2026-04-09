const prisma = require('../../shared/prisma')

async function listarAtestados() {
    const atestados = await prisma.medicalCertificate.findMany({
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                },
            },
        },
        orderBy: {
            createdAt: 'desc',
        },
    })
    return atestados
}

module.exports = {
    listarAtestados,
}