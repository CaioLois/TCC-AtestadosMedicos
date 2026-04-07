module.exports = function fakeAuth(req, res, next){
    req.user ={
        id: 1,
        name: "Admin test",
        role: "admin"
    }
    next();
}
