const jwt = require("jsonwebtoken")
const cookie = require("cookie-parser")

const onlyTeachers =async (req:Request ,res:Response) => {
    // try {
    //     const token =  (req as any).cookies.token as string  
    //     console.log(token)
    //     const userData = await jwt.verify(token,process.env.TKEN_SECERT)
    //     if (userData.job != "teacher"){
    //         res.status(403).send("you'r not teacher")
    //     }
    //     req.user = userData
    //     nextTick()
    // } catch (error) {
    //     console.log(error)
    //     // res.status(401).send(error)
    // }

}

const onlytTeachersAndStudents = async (req:Request ,res:Response) => {
    // try {
    //     const token = req.cookies.token
    //     const userData = await jwt.verify(token,process.env.TKEN_SECERT)
    //     req.user = userData
    //     next()
    // } catch (error) {
    //     console.log(error)
    //     res.status(401).send(error.message)
    // }
}

export {
    onlyTeachers,
    onlytTeachersAndStudents
}
