import express from 'express';
import SubscriptionsController from "../controllers/subscriptionsController";
const router = express.Router();

router.post('/:topic', (req, res) => {
  SubscriptionsController.create(req, res)
});

router.get('/:topic', (req, res) => {
  SubscriptionsController.index(req, res)
});

export default router;
