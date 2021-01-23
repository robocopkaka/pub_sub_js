import express from 'express';
import TopicsController from '../controllers/topicsController';
const router = express.Router();

const topic = new TopicsController

/* GET users listing. */
router.post('/', (req, res) => {
  TopicsController.create(req, res)
})

export default router;
