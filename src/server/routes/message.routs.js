const Router = require("express");
const router = new Router()
const messagesController = require('../controllers/messagesController')

router.post('/directMessage', messagesController.createDirectMessage)
router.post('/groupMessage', messagesController.createGroupMessage)


module.exports = router
