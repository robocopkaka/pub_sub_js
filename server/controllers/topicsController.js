import { Topic } from '../models'

export default class TopicsController {
    static create(req, res) {
        const { name } = req.body;
        Topic.create({ name }).then((topic) => {
            res.status(201).json({ topic: topic.toJson(), message: 'Topic created successfully' })
        }).catch((err) => {
            res.status(500).json({ message: err.message })
        })
    }
}