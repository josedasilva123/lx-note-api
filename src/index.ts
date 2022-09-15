
import server from "./server"

import mongoose from "mongoose";

const port = process.env.PORT || 3030;

mongoose.connect(process.env.DATABASE_URL as string)
.then(() => {
    console.log('Conectamos ao MongoDB!')
    server.listen(port, () => {
        console.log('[SERVER] API iniciou com sucesso!')
    });
})
.catch((err) => console.log(err))