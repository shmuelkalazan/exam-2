import { Request, Response, NextFunction } from "express";
import {updateGradeService, createGrade, getAllGradesByClasIdService } from "../services/examesServise";
import { IExam } from "../models/examModel";

const createNewGrade = async (req:Request ,res:Response,next:NextFunction) => {
    try {
        const result :string |IExam = await createGrade(req.body)
        res.status(201).json(result)
    } catch (err) {
        res.status(400).json(err)
    }
}

const getAllGradesByClassId = async (req:Request ,res:Response,next:NextFunction) => {
    try {
        const result :string |[IExam] = await getAllGradesByClasIdService(req.params.class_id)
        res.status(200).json(result)
    } catch (err) {
        res.status(400).json(err)
    }
}

const updateGrade = async (req:Request ,res:Response,next:NextFunction) => {
    try {
        const result :string |IExam = await updateGradeService(req.body)
        res.status(203).json(result)
    } catch (err) {
        res.status(400).json(err)
    }
}

const getAvarage = async (req:Request ,res:Response,next:NextFunction) => {
    try {
        const result :string |IExam = await updateGradeService(req.body)
        res.status(203).json(result)
    } catch (err) {
        res.status(400).json(err)
    }
}

export {
    createNewGrade,
    getAllGradesByClassId,
    updateGrade,
    getAvarage
}
