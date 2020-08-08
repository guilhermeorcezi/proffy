import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const upload = multer(multerConfig);

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post('/classes', upload.single('image'), classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;
