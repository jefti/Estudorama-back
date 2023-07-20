import express from "express";
import cors from "cors";
    
    const app = express();

    app.use(cors());

    const port = 4000;
    app.listen(port, ()=>{console.log(`Servidor rodando na porta ${port}`)});