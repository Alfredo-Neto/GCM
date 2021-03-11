import { getRepository } from 'typeorm';
import { Doctors } from '../entity/Doctors';
import { Request, Response } from 'express';

export const getDoctors = async (req: Request, res: Response) => {
     const doctors = await getRepository(Doctors).find();
     return res.json(doctors);
}

export const getDoctor = async (req: Request, res: Response) => {
    const { id } = req.params;
    const doctor = await getRepository(Doctors).findOne(id);
    return res.json(doctor);
}

export const saveDoctor = async (req: Request, res: Response) => {
    const doctors = await getRepository(Doctors).save(req.body); 
    return res.json(doctors);
}

export const updateDoctor = async (req: Request, res: Response) => {
    const { id } = req.params;

    const doctor = await getRepository(Doctors).update(id, req.body);

    if (doctor.affected === 1){
        const updatedDoctor = await getRepository(Doctors).findOne(id);
        res.json(updatedDoctor);
    } else {
        res.status(404).send({message: "Doctor not found"})
    }
}

export const removeDoctor = async (req: Request, res: Response) => {
    const { id } = req.params;

    const doctor = await getRepository(Doctors).delete(id);

    if (doctor.affected === 1){
        res.json({ message: "Doctor removed!" });
    } else {
        res.status(404).send({ message: "Doctor not found" });
    }
}
