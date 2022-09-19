import { Router } from 'express';

import { register } from '../controllers/authController.js';
import {
    getAllUsers,
    getUserById,
    updateUser
} from '../controllers/userController.js';

const router = Router();

// authorization
router.post('/register', register);

// user DB queries
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);

export default router;