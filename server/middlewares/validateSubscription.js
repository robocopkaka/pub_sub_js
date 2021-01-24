import validUrl from 'valid-url';
import { Subscription, Topic } from '../models';

export const validateSubscription = (req, res, next) => {
  const { body: { url }, params: { topic } } = req;
  console.log(url)
  
  if (!validUrl.isUri(url)) {
    return res.status(400).json({ message: 'The url entered is invalid. Please retry.' })
  }
  
  Topic.findOne({ where: { name: topic } }).then((returnedTopic) => {
    if (returnedTopic) {
      Subscription.findOne({ where: { topicId: returnedTopic.id, url } }).then((subscription) => {
        if (subscription) {
          return res.status(409).json({ message: "You've already subscribed to this topic" });
        } else {
          next();
        }
      }).catch((err) => {
        return res.status(500).json({ message: err.message });
      })
    } else {
      return res.status(404).json( { message: 'Topic not found' } );
    }
  }).catch((err) => {
    return res.status(500).json({ message: err.message })
  })
}
