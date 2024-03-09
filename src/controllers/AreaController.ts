import { Request, Response } from "express";

export default class AreaController{
    public create(req: Request, res: Response){
        console.log(req.body);
        res.send('ok')
    }
}