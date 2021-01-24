export default class NotificationsController {
  static handleRequest(req, res) {
    console.log(req.params);
    const { body } = req;
    
    console.log(body);
    res.status(200).json({body: req.body})
  }
}
