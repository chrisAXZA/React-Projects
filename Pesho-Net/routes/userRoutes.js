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
router.post('/register', register); // createUser

// user DB queries + manipulations
router.get('/', getAllUsers);
router.put('/:id', updateUser);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);
router.patch('/follow/:id', followUser);
router.patch('/unfollow/:id', unfollowUser);

export default router;