import { Router } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import apiRoutes from './api';
/*
const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
*/

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const router = new Router();

router.use('/api', apiRoutes);

// serve up react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

//module.exports = router;
export default router;
