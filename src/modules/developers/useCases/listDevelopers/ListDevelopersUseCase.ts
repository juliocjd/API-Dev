import { prisma } from "../../../../database/prismaClient"

export function ListDevelopersUseCase() {
  async function execute() {
    const developers = await prisma.developers.findMany({
      select: {
        id: true,
        name: true,
        sex: true,
        age: true,
        birthdate: true,
        hobby: true,
      },
    });

    return developers;
  }

  return {
    execute
  }
}