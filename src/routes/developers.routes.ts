import { Router } from "express";

import { CreateDeveloperController } from "../modules/developers/useCases/createDeveloper/CreateDeveloperController";
import { ListDevelopersController } from "../modules/developers/useCases/listDevelopers/ListDevelopersController";
import { FindIdDeveloperController } from "../modules/developers/useCases/findIdDeveloper/FindIdDevelopersController";
import { DeleteDeveloperController } from "../modules/developers/useCases/deleteDeveloper/DeleteDevelopersController";
import { QueryDeveloperController } from "../modules/developers/useCases/queryDeveloper/QueryDevelopersController";
import { UpdateDeveloperController } from "../modules/developers/useCases/updateDeveloper/UpdateDevelopersController";

const routerDevelopers = Router();

const createClientController = CreateDeveloperController();
const updateDeveloperController = UpdateDeveloperController();
const listDevelopersController = ListDevelopersController();
const findIdDeveloperController = FindIdDeveloperController();
const queryDeveloperController = QueryDeveloperController();
const deleteDeveloperController = DeleteDeveloperController();

routerDevelopers.post("/developers", createClientController.handle);
routerDevelopers.put("/developers/:id", updateDeveloperController.handle);
routerDevelopers.get("/developers", listDevelopersController.handle);
routerDevelopers.get("/developers/filter?", queryDeveloperController.handle);
routerDevelopers.get("/developers/:id", findIdDeveloperController.handle);
routerDevelopers.delete("/developers/:id", deleteDeveloperController.handle);

export { routerDevelopers }