const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const Group = require("../models/Group");
const GroupMessage = require("../models/GroupMessage");
const File = require("../models/File");


class AuthController {

    async registration(req, res) {
        try {
            const {email, password} = req.body

            const candidate = await User.findOne({email})

            if (candidate) {
                return res.status(400).json({message: `User with email ${email} already exist` })
            }

            const hashPssword = await bcrypt.hash(password, 8)
            const user = new User({email, password: hashPssword})
            await user.save()
            return res.json({message: "User was created"})

        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req.body

            const user = await User.findOne({email})
            if (!user) {
                return res.status(400).json({messae: 'User not found' })
            }

            const isPassValid = bcrypt.compareSync(password, user.password)
            if (!isPassValid) {
                return res.status(400).json({messae: 'Invalid password' })
            }

            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "12h"})

            const users = await User.find()
            const groups = await Group.find()
            const groupMessages = await GroupMessage.find()
            const files = await File.find()

            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace
                },
                users,
                groups,
                files,
                groupMessages,
            })

        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    }

}

module.exports = new AuthController()
