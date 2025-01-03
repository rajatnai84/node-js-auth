export const isDataValidForSignup = async (req, res, next: Function) => {
    try {
        const {username, email, password} = req.body
        
        next()
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}
