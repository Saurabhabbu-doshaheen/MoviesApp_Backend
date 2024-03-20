const service = require("../service/login")

const loginUser = async (req, res, next) => {
    try {
        const tokens = await service.loginUser(req);
    
        res.send(tokens);
        
    } catch (error) {
        res.send(error);
    }
};

module.exports = loginUser
