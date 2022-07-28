import { prisma } from "../../../../database/prismaClient"

export function QueryDevelopersUseCase() {
  async function execute( id: any, name: any, sex: any, age: any, hobby: any, birthdate: any ){
    const developer = await prisma.developers.findMany({
      select: {
        id: true,
        name: true,
        sex: true,
        age: true,
        birthdate: true,
        hobby: true,
      },
      where: {
        ...(id ? { id: id}: {}),
        ...(name ? { name: name}: {}),
        ...(sex ? { sex: sex}: {}),
        ...(age ? { age: Number(age)}: {}),
        ...(hobby ? { hobby: hobby}: {}),
        ...(birthdate ? { birthdate: new Date(birthdate)}: {})
      }  
    });
    
    return developer;
  }

  return {
    execute
  }
}