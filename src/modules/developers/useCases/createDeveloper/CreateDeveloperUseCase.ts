import { prisma } from "../../../../database/prismaClient";

export function CreateDeveloperUseCase () {
  async function execute( name: string, sex: string, age: any, hobby: string, birthdate: string){    
    if (!sex.match(/m|f/i)){
      throw new Error('Not a valid sex');
    }
    
    await prisma.developers.create({
      data: {
        name,
        sex,
        ...(age ? { age: Number(age) }: {}),
        hobby,
        ...(birthdate ? { birthdate: new Date(birthdate) }: {})
      }
    })
  }
  return {
    execute
  } 
}