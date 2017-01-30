module.exports = function(req, res, next){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');
    res.setHeader('Access-Control-Allow-Headers', 'application/json;charset=utf-8');
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    next();
}