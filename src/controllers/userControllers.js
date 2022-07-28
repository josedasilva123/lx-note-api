const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

async function Register(req, res) {
  try {
    const { name, email, password } = req.body;

    //Verifica campos do body
    if (!name || !email || !password) {
      throw new Error("Desculpe, algum parâmetro está faltando.");
    }

    //Verifica usuário existente
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      throw new Error(
        "Desculpe, o e-mail fornecido já pertence a um usuário cadastrado."
      );
    };

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
    res.status(200).json({ message: "Cadastro realizado com sucesso!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

async function Login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Desculpe, algum parâmetro está faltando.");
    }

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
      process.env.JWT_SECRETKEY,
      { expiresIn: "12h" }
    );

    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token: token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

async function AutoLogin(req, res) {
    const user = req.body.user;
    
    //Retorna o user vindo do middleware
    if(user){
      res.status(200).json({ user: user });
    }   
}

module.exports = {
    Register,
    Login,
    AutoLogin,
}