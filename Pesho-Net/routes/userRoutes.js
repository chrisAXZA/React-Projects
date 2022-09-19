import { Router } from 'express';

import { register } from '../controllers/authController.js';
import {
    deleteUser,
    followUser,
    getAllUsers,
    getUserById,
    unfollowUser,
    updateUser,
} from '../controllers/userController.js';

const router = Router();

// authorization
router.post('/register', register);

// user DB queries + manipulations
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.patch('/follow/:id', followUser);
router.patch('/unfollow/:id', unfollowUser);

export default router;