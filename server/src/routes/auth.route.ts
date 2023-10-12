import { Router } from 'express';
import { signIn } from '../controllers/auth.controller';
import { signOut } from '../controllers/auth.controller';
import { checkDuplicateUsernameOrEmail } from '../middlewares/auth.middleware';
import { signUp } from '../controllers/auth.controller';

const router = Router();

router.post('/register', checkDuplicateUsernameOrEmail, signUp);
router.post('/login', signIn);
router.post('/logout', signOut);

export default router;
