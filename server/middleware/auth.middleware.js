import jwt from 'jsonwebtoken'
export const isAdmin = async(req, res, next) => {
  try {

    const token = req.headers.authorization.split(' ')[1] 

    const verified = jwt.verify(token, process.env.JWT_SECRET)

    if(verified.user.role !== "admin"){
      return res.status(401).json({
        message: "user is not authorized",
      });
    }
    req.user = verified.user
    next()
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}