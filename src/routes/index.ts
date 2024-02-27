import { Router, Request } from 'express'

const router: Router = Router(); // create a constant of Router type

import { indexController } from '../controllers/indexController' // import from the controller
router.get('/', indexController.index)

export default router;