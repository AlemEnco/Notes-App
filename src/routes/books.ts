import { Router, Request } from 'express';

const router: Router = Router(); // create a constant of Router type

import { booksController } from '../controllers/booksController'; // import from the controller

router.get('/', booksController.index)

router.get('/add', booksController.renderFormBook)

router.post('/add', booksController.saveBook)

export default router;