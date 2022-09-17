import express from 'express';
import route from './routes/Routes';
import cors from 'cors';
const app = express();


app.use(cors());
app.use(express.json())
app.use(route);

const PORT = 3333
app.listen(PORT, () => {
    console.log(`Servidor iniciado no http://localhost:${PORT}`)
})