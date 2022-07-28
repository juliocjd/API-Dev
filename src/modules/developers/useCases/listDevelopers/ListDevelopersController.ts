import { Request, Response } from "express";
import { ListDevelopersUseCase } from "./ListDevelopersUseCase";

export function ListDevelopersController() {
  async function handle (request: Request, response: Response) {
    const listDevelopersUseCase = ListDevelopersUseCase();

    const developers = await listDevelopersUseCase.execute();

    return response.json(developers);
  }
  return {
    handle
  }
}