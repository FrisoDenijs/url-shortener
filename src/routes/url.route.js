import { Router } from 'express';
const router = Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
import { test, create, reroute } from '../controllers/url.controller';


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', test);
router.post('/', create);
router.get('/:url', reroute);

export default router;
