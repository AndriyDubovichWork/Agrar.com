import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, '/MainPage.html'));
});

app.listen(PORT);
console.log(`server startend on ${PORT} port`);
