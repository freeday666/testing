const express = require('express');
const app = express();
require('dotenv').config();

app.get('/auth', (req, res) => {
  const redirectUri = encodeURIComponent(process.env.DISCORD_REDIRECT_URI);
  const clientId = process.env.DISCORD_CLIENT_ID;
  const scope = encodeURIComponent('identify guilds');
  const url = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
  res.redirect(url);
});

app.get('/auth/callback', (req, res) => {
  const code = req.query.code;
  // Hier kun je de code gebruiken om een token op te halen
  res.send('Ingelogd!') // of doorverwijzen
});

app.listen(3000, () => {
  console.log('Server draait op http://localhost:3000');
});