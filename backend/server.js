import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, 'data', 'letters.json');

function readLetters() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

function writeLetters(letters) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(letters, null, 2));
}

const app = express();
app.use(express.json());

app.get('/api/letters/random', (_req, res) => {
  const letters = readLetters();
  if (!letters.length) return res.status(404).json({ error: 'No letters yet' });
  const letter = letters[Math.floor(Math.random() * letters.length)];
  res.json(letter);
});

app.post('/api/letters', (req, res) => {
  const { title, text, from } = req.body ?? {};
  if (!title?.trim() || !text?.trim() || !from?.trim()) {
    return res.status(400).json({ error: 'All fields required' });
  }
  if (title.length > 80 || text.length > 1000 || from.length > 60) {
    return res.status(400).json({ error: 'Content too long' });
  }
  const letters = readLetters();
  const letter = {
    id: Date.now(),
    title: title.trim(),
    text: text.trim(),
    from: from.trim(),
  };
  letters.push(letter);
  writeLetters(letters);
  res.status(201).json(letter);
});

app.listen(3001, () => console.log('Letters API on :3001'));
