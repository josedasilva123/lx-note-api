import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../../models/User";
import { iLoginBody, iRegisterBody } from "./UserTypes";
import { iAuthenticateBody } from "../../types/global";

export default class UserServices {
  static async Register(body: iRegisterBody) {
    const { name, email, password } = body;

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      throw new Error(
        "Desculpe, o e-mail fornecido já pertence a um usuário cadastrado."
      );
    }

    const encryptedPassword = bcrypt.hashSync(password, 1);

    const date = new Date();

    const user = {
      name,
      email,
      password: encryptedPassword,
      createdAt: date,
      updatedAt: date,
    };

    await User.create(user);
    return { message: "Cadastro realizado com sucesso!" };
  }

  static async Login(body: iLoginBody) {
    const { email, password } = body;

    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error("Desculpe, o usuário fornecido não existe");
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new Error("Desculpe, a senha fornecida está incorreta.");
    }

    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRETKEY as string,
      { expiresIn: "12h" }
    );

    return {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token: token,
    };
  }

  static async AutoLogin(body: iAuthenticateBody){
    const user = body.user;

    //Retorna o user vindo do middleware
    if (user) {
        return { user: user };
    } else {
        throw new Error("Desculpe, usuário inválido.");
    }
  }
}