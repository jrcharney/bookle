/*
const router = require('express').Router();
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;
*/
import { Router } from 'express';
import userRoutes from './user-routes';

const router = new Router();
router.use('/users',userRoutes);

export default router;