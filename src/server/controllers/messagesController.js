const DirectMessage = require('../models/DirectMessage');
const GroupMessage = require('../models/GroupMessage');

class MessagesController {

  async createDirectMessage(req, res) {

      try {
        const {user_id, talk_id, message} = req.body


        const createMessage = new DirectMessage({user_id, talk_id, message})
        const messageResult = await createMessage.save()

        const messages = await DirectMessage.find()
        return res.json({messageResult, messages})

      } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
      }

  }

  async createGroupMessage(req, res) {

    try {
      const {user_id, group_id, message} = req.body


      const createMessage = new GroupMessage({user_id, group_id, message})
      const messageResult = await createMessage.save()

      const messages = await GroupMessage.find()
      return res.json({messageResult, messages})

    } catch (e) {
      console.log(e)
      res.send({message: "Server error"})
    }

  }

}

module.exports = new MessagesController()
