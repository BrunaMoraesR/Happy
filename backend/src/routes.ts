import { Router } from 'express';
import OrphagesController from './controllers/OrphanagesController';

const routes = Router();

routes.get('/orphanages', OrphagesController.index);
routes.post('/orphanages', OrphagesController.create);

export default routes;