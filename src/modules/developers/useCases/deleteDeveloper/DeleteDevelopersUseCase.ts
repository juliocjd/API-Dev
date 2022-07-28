import { prisma } from "../../../../database/prismaClient"

export function DeleteDevelopersUseCase() {
  async function execute(id_developer: string) {
    const developer = await prisma.developers.delete({
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