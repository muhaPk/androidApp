const Router = require("express");
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const groupsController = require('../controllers/groupsController')


router.post('/createGroup', authMiddleware, groupsController.createGroup)

module.exports = router
