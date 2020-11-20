import express, { json } from 'express';
import routes from './routes';
import './database';

const app = express();
app.use(json());
app.use(routes);

app.listen(3333, () => {
  console.log('🚀️ Servidor rodando na porta 3333');
});
