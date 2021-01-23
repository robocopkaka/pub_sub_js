import { Topic, Subscription } from '../models';

export default  class SubscriptionsController {
  static create(req, res) {
    const { topic } = req.params;
    const { url } = req.body;
    
    Topic.findOne({where: {name: topic}}).then((topic) => {
      Subscription.create({ url, topicId: topic.id }).then((subscription) => {
        res.status(201).json({
          url: subscription.url,
          topic: topic.name,
          message: 'Successfully subscribed to topic'
        })
      }).catch(() => {
        res.status(500).json({ message: 'Internal server error' })
      })
    })
      .catch(() => {
        res.status(404).send({ message: "Can't find any topic with that name" })
      })
  }
  
  static index(req, res) {
    const { topic } = req.params;
    
    Topic.findOne({ where: { name: topic } }).then((topic) => {
      topic.getSubscribers().then((subs) => {
        subs = subs.map((sub) => sub.toJson());
        res.json({subs: subs});
      })
    })
  }
}
