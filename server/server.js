import { express } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';
import db from './config/connection';
import routes from './routes'; 

/*
const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
*/

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
