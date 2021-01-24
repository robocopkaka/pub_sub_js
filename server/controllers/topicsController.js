import { Topic } from '../models'

export default class TopicsController {
    static create(req, res) {
        console.log('gets here')
        const { name } = req.body;
        Topic.create({ name: name.toLowerCase() }).then((topic) => {
            console.log({ topic: topic.toJson() })
            res.status(201).json({ topic: topic.toJson(), message: 'Topic created successfully' })
        }).catch((err) => {
            res.status(500).json({ message: err.message })
        })
    }
}