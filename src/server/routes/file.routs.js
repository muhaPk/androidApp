const Router = require("express");
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const fileController = require('../controllers/fileController')

router.post('/upload', authMiddleware, fileController.uploadFile)

module.exports = router
