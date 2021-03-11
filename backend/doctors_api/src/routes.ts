import {Router, Request, Response } from 'express';
import { getDoctor, getDoctors, saveDoctor, updateDoctor, removeDoctor } from './controller/DoctorController';

const routes = Router();

routes.get('/', (req: Request, res: Response ) => {
    return res.json({ message: "Hello World! How you doin?!" });
});

routes.get('/doctors', getDoctors);

routes.get('/doctors/:id', getDoctor);

routes.post('/doctors', saveDoctor);

routes.put('/doctors/:id', updateDoctor);

routes.delete('/doctors/:id', removeDoctor);


export default routes;