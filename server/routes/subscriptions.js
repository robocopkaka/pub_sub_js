import express from 'express';
import SubscriptionsController from "../controllers/subscriptionsController";
import { validateSubscription } from "../middlewares/validateSubscription";

const router = express.Router();

router.post('/:topic',
  validateSubscription,
  SubscriptionsController.create
);

router.get('/:topic', (req, res) => {
  SubscriptionsController.index(req, res)
});

export default router;
