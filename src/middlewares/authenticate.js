const jwt = require("jsonwebtoken");

function authenticate(req, res, next){
    const { auth } = req.headers;
    
    jwt.verify(auth, process.env.JWT_SECRETKEY, (err, decoded) => {
        try {
            if(err){
                throw new Error('Sua token expirou ou é inválida.')
            }

            const user = {
                id: decoded.id,
                name: decoded.name,
                email: decoded.email,
            }

            //Anexa usuário no body quando necessário
            req.body.user = user;

            next();
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    })
}

module.exports = authenticate;