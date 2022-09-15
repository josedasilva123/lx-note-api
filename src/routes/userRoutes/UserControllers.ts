import { Request, Response } from "express";
import UserServices from "./UserServices";
import { iLoginBody, iRegisterBody } from "./UserTypes";

export default class UserControllers {
  static async Register(
    req: Request<{}, {}, iRegisterBody, {}>,
    res: Response
  ) {
    const response = await UserServices.Register(req.body);
    res.status(200).json(response);
  }

  static async Login(req: Request<{}, {}, iLoginBody, {}>, res: Response) {
    const response = await UserServices.Login(req.body);
    res.status(200).json(response);
  }

  static async AutoLogin(req: Request, res: Response) {
    const response = await UserServices.AutoLogin(req.body);
    res.status(200).json(response);
  }
}
