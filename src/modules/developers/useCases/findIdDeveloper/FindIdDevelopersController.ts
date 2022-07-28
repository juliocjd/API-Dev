import { Request, Response } from "express";
import { FindIdDevelopersUseCase } from "./FindIdDevelopersUseCase";

export function FindIdDeveloperController() {
  async function handle (request: Request, response: Response) {
    const { id } = request.params;
    const findIdDevelopersUseCase = FindIdDevelopersUseCase();

    const developer = await findIdDevelopersUseCase.execute(id);

    return response.json(developer);
  }
  return {
    handle
  }
}