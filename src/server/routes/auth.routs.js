const Router = require("express");
const router = new Router()
const authController = require('../controllers/authController')

router.post('/registration', authController.registration)

router.post('/login', authController.login)


// router.get('/auth', authMiddleware, async (req, res) => {
//     try {
//         const user = await User.findOne({ _id: req.user.id })
//
//         const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "12h"})
//         return res.json({
//             token,
//             user: {
//                 id: user.id,
//                 email: user.email,
//                 diskSpace: user.diskSpace,
//                 usedSpace: user.usedSpace
//             }
//         })
//
//     } catch (e) {
//         console.log('auth.routs: ' . e)
//         res.send({message: "Server error"})
//     }
// })

module.exports = router
