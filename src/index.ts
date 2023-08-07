import express from 'express';
import { Application } from 'express';
import path from 'path';

import bodyParser from 'body-parser';
import { mockData } from './repositories/startingData';

import { noteRoute } from './routes/notes';

const app: Application = express();


app.use(express.static(path.join(__dirname, 'src')));
app.use(bodyParser.json({ limit: '2mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '2mb', extended: true }));
app.locals.notes = mockData()

app.use('/', noteRoute);
app.use('*', async (req, res) => {
  res.status(200).send("Ready!")
});

app.listen(3000, () => {
  console.log('Application started on port 3000!');
});