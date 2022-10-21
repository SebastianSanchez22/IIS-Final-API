import express from 'express';

import { 
    p_home
} from '../controllers/pagControllers.js';

const router = express.Router();

router.get('/', p_home);

export default router;