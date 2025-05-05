// netlify/functions/chat.js

const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/chat', async (req, res) => {
  const { systemPrompt, userInput } = req.body;

  // Replace with your OpenAI call
  const output = `Echo: [System] ${systemPrompt} / [User] ${userInput}`;
  res.json({ output });
});

module.exports.handler = serverless(app);