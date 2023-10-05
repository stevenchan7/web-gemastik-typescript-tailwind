import { Router } from 'express';
import { postEvent } from '../controllers/community.controller';
import { verifyTokenCommunity } from '../middlewares/auth.middleware';

const router = Router();

router.post('/post-event/:activityId', verifyTokenCommunity, postEvent);

export default router;
