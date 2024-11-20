import express = require('express');
import { router } from './router';

const app = express();
const port = 8081;

app.use(express.json());
app.use(router);
app.listen(port, () => console.log('server online na porta ', port))