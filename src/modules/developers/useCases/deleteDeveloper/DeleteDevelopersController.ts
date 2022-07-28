import { Request, Response } from "express";
import { DeleteDevelopersUseCase } from "./DeleteDevelopersUseCase";

export function DeleteDeveloperController() {
  async function handle (request: Request, response: Response) {
    const { id } = request.params;
    const deleteDevelopersUseCase = DeleteDevelopersUseCase();

    const developer = await deleteDevelopersUseCase.execute(id);

    return response.json(developer);
  }
  return {
    handle
  }
}