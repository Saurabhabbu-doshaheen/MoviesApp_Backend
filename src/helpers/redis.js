const port = process.env.REDIS_PORT;
const host = process.env.REDIS_HOST;

const redis = require('redis');

const client = redis.createClient(port,host);

client.on("connect", function(err) {
    if (err) {
        console.log("Error in Redis", err);
    } else {
        console.log("Redis Connected!");
    }
});
client.connect();

async function setRedis(key,value){
    return client.set(key,value);
};

module.exports = { setRedis };

