import express from "express";
import OngController from "./controllers/OngController";
import IncidentController from "./controllers/IncidentController";
import SessionController from "./controllers/SessionController";

const routes = express.Router();

routes.post("/sessions", SessionController.Create);

routes.get("/ongs/", OngController.Index);
routes.post("/ongs", OngController.Create);

routes.get("/profile", IncidentController.IndexProfile);

routes.get("/incidents", IncidentController.Index);
routes.post("/incidents", IncidentController.Create);
routes.delete("/incidents/:id", IncidentController.Delete);

export default routes;
