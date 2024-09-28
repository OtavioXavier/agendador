import express from 'express'

import { Router } from 'express';
import routerMessage from './routes/message.routes';

const app = express();

const route = Router()

app.use(express.json())

app.use(route);

app.use("/api", routerMessage)

app.listen(3333, () => 'server running on port 3333');