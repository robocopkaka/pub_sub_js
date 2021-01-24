import express from 'express';
import TopicsController from '../controllers/topicsController';
import {validateTopic} from "../middlewares/validateTopic";
const router = express.Router();

/* GET users listing. */
router.post('/',
  validateTopic,
  TopicsController.create
)

export default router;
