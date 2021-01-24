import axios from "axios";
import { Topic } from '../models';

export default class PublishController {
  static publish(req, res) {
    const { topic } = req.params;
    const { body } = req;
    
    Topic.findOne({ where: { name: topic } }).then((returnedTopic) => {
      returnedTopic.getSubscribers().then((subscribers) => {
        const urls = subscribers.map((sub) => sub.url);
        const data = { topic: returnedTopic.name, body }
        if (urls.length > 0) {
          urls.forEach((url) => {
            axios.post(url, data)
          })
          res.status(200).json({ message: `Published successfully to ${urls.length} subscribers` })
        } else {
          res.status(200).json({ message: "No subscribers yet" })
        }
      })
    })
  }
}
