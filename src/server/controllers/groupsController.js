const Group = require("../models/Group");

class GroupController {

  async createGroup(req, res) {

      try {
        const {name, description} = req.body

        const nameMatch = await Group.findOne({name})
        if (nameMatch) {
          return res.status(400).json({message: `Group with name ${name} already exist` })
        }

        const group = new Group({name, description})
        const groupResult = await group.save()

        const groups = await Group.find()
        return res.json({groupResult, groups})

      } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
      }

  }

}

module.exports = new GroupController()
