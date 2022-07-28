import { prisma } from "../../../../database/prismaClient"

export function UpdateDevelopersUseCase() {
  async function execute( id: string, name: string, sex: string, age: any, hobby: string, birthdate: string ) {

    const developer = await prisma.developers.update({
      data: {
        name,
        sex,
        ...(age ? { age: Number(age) }: {}),
        hobby,
        ...(birthdate ? { birthdate: new Date(birthdate) }: {})  
      },
      where: {
        id: id
      }
    });

    return developer;
  }

  return {
    execute
  }
}