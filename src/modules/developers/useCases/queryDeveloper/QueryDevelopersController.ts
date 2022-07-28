import { Request, Response } from "express";
import { QueryDevelopersUseCase } from "./QueryDevelopersUseCase";

export function QueryDeveloperController() {
  async function handle (request: Request, response: Response): Promise<Response> {
    const { id, name, sex, age, hobby, birthdate } = request.query; 
    
    const queryDevelopersUseCase = QueryDevelopersUseCase();

    
    try {
      const developer = await queryDevelopersUseCase.execute(
        id, 
        name, 
        sex, 
        age, 
        hobby, 
        birthdate
      );

    return response.json(developer);
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