import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';
<<<<<<< HEAD
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);
=======

const router = Router();

router.use('/contacts/:contactId', isValidId);

router.get('/contacts', ctrlWrapper(getContactsController));
>>>>>>> 5f4c40db718fd124ac8893e9b723de0edaf502fb

router.use('/:contactId', isValidId);

<<<<<<< HEAD
router.get('/', ctrlWrapper(getContactsController));

router.get('/:contactId', ctrlWrapper(getContactByIdController));
=======
router.post(
  '/contacts',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.patch(
  '/contacts/:contactId',
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);
>>>>>>> 5f4c40db718fd124ac8893e9b723de0edaf502fb

router.post(
  '/',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.patch(
  '/:contactId',
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

router.delete('/:contactId', ctrlWrapper(deleteContactController));

export default router;
