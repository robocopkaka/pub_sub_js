import { Topic } from '../models';

export const validateTopic = (req, res, next) => {
  const { name } = req.body;
  
  if (/^[a-z]+[a-z0-9_-]*$/i.test(name) === false) {
    return res.status(400).json({ message: 'Please pass a valid name' })
  }
  
  Topic.findOne({ where: { name: name.toLowerCase() } }).then((returnedTopic) => {
    if (returnedTopic) {
      return res.status(409).json({ message: 'Topic name already exists' })
    } else {
      next();
    }
  })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    })
}
