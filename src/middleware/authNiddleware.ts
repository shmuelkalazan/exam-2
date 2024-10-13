// const jwt = require("jsonwebtoken")

// const onlyCommanders = async (req,res,next) => {
//     try {
//         const token = req.cookies.token
//         const userData = await jwt.verify(token,process.env.TKEN_SECERT)
//         if (userData.role != "commander"){
//             res.status(403).send("you'r not commander")
//         }
//         req.user = userData
//         next()
//     } catch (error) {
//         console.log(error)
//         res.status(401).send(error.message)
//     }

// }

// const onlySoldiersAndCommanders = async (req,res,next) => {
//     try {
//         const token = req.cookies.token
//         const userData = await jwt.verify(token,process.env.TKEN_SECERT)
//         req.user = userData
//         next()
//     } catch (error) {
//         console.log(error)
//         res.status(401).send(error.message)
//     }
// }

// module.exports = {
//     onlyCommanders,
//     onlySoldiersAndCommanders
// }