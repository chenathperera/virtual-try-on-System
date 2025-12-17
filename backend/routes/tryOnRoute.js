import express from 'express';
import multer from 'multer';
import tryOn from '../controllers/tryOnController.js';

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.post('/', upload.fields([{ name: 'personImage', maxCount: 1 }]), tryOn);

export default router;
