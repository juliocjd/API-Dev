import { Request, Response } from "express";
import { UpdateDevelopersUseCase } from "./UpdateDevelopersUseCase";

export function UpdateDeveloperController() {
  async function handle (request: Request, response: Response) {
    
    const { id } = request.params;
    const { name, sex, age, hobby, birthdate }  = request.body
    
    const updateDevelopersUseCase = UpdateDevelopersUseCase();

    const developer = await updateDevelopersUseCase.execute(id, name, sex, age, hobby, birthdate);

    return response.json(developer);
  }
  return {
    handle
  }
}