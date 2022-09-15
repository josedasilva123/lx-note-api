"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authenticate = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function Authenticate(req, res, next) {
    var auth = req.headers.auth;
    if (auth) {
        jsonwebtoken_1.default.verify(auth, process.env.JWT_SECRETKEY, function (err, decoded) {
            try {
                if (err) {
                    throw new Error("Sua token expirou ou é inválida.");
                }
                var user = {
                    id: decoded === null || decoded === void 0 ? void 0 : decoded.id,
                    name: decoded === null || decoded === void 0 ? void 0 : decoded.name,
                    email: decoded === null || decoded === void 0 ? void 0 : decoded.email,
                };
                //Anexa usuário no body quando necessário
                req.body.user = user;
                next();
            }
            catch (error) {
                res.status(400).json({ error: "Sua token expirou ou é inválida!" });
            }
        });
    }
    else {
        res.status(400).json({ error: "Está rota precisa de autorização." });
    }
}
exports.Authenticate = Authenticate;
