import express from 'express';

import { createUser, signinUser } from '../controllers/usersController.js';
import verifyAuth from '../middlewares/verifyAuth.js';

const router = express.Router();

// user Routes

router.post('/auth/signup', createUser);
router.post('/auth/signin', verifyAuth, signinUser);


export default router;