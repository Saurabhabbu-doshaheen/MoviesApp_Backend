const { signToken } = require("../../../authorization/auth");
const { setRedis } = require("../../../helpers/redis");
const { fetchAll } = require("../../register/dao/register");
const User = require("../../register/model/user");

const loginUser = async(req) => { 
    const reqBody = req.body;

    //check if exists
    const user = await fetchAll(User,reqBody.emailId);
    if(!user) throw{ status : 400, message : "User doesn't exist" };

    const checkPasswordExists = checkPassword(user.password,reqBody.password);
    //check password
    if(!checkPasswordExists) throw{status : 401, message : "Incorrect Password!Try Again."};

    data = {
        id : user._id,
        emailid : user.emailid
    };
    //generate tokens
    let tokens = await signToken(data);
    // console.log(tokens);

    //save in redis

    // const res = await setRedis(`${data.id}`, tokens.refreshToken);
    // console.log(res);
    return tokens;


};

function checkPassword(dbPassword,currentPassword) {
    return dbPassword === currentPassword;
}

module.exports = {loginUser};