import { Request, Response } from "express"
import { CreateDeveloperUseCase } from "./CreateDeveloperUseCase"

export function CreateDeveloperController() {
  async function handle (request: Request, response: Response): Promise<Response> {
    const { name, sex, age, hobby, birthdate }  = request.body

    const createDeveloperUseCase = CreateDeveloperUseCase();
    
    try {  
      await createDeveloperUseCase.execute(
        name, 
        sex, 
        age, 
        hobby,
        birthdate
      );

      return response.json();
      
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
  return {
    handle
  }
}