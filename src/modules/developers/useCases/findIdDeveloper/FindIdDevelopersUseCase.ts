import { prisma } from "../../../../database/prismaClient"

export function FindIdDevelopersUseCase() {
  async function execute(id_developer: string) {
    const developer = await prisma.developers.findFirst({
      select: {
        id: true,
        name: true,
        sex: true,
        age: true,
        birthdate: true,
        hobby: true,
      },
      where: {
        id: id_developer
      }
    });

    return developer;
  }

  return {
    execute
  }
}