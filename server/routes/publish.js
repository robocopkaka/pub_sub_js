import express from 'express';
import PublishController from "../controllers/publishController";
const router = express.Router();

router.post('/:topic', (req, res) => {
  PublishController.publish(req, res)
});

export default router
