import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphagesController.index);
routes.get('/orphanages/:id', OrphagesController.show);
routes.post('/orphanages', upload.array('images'), OrphagesController.create);

export default routes;