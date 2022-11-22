import { getUsers,getUserById,createUser, autUser } from "../controlers/user.js";
import { Router } from "express";
import protect from "../middleware/authmiddle.js";

const routes=Router();

routes.get("/",getUsers);
routes.get("/:_id",getUserById);
routes.post("/register", createUser);
routes.post("/login", autUser);

export default routes;

//we have to create protected routes
//JWT-json web token