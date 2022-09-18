import { Router } from 'express';

import { register } from '../controllers/authController.js';
import { getAllUsers } from '../controllers/userController.js';

const router = Router();

// authorization
router.post('/register', register);

// user DB queries
router.get('/', getAllUsers);

export default router;