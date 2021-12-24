const {
    usersModel
} = require('../dao/model/usersmodel')

module.exports.usersList = async function () {
    return await usersModel.find();

}
module.exports.addusers = async users => {
    return await usersModel.create(users)
}

module.exports.deleteusers = async _id => {
    return await usersModel.deleteOne(_id)
}

module.exports.updateusers = async (_id, users) => {
    return await usersModel.updateOne({
        _id
    }, users)
}

module.exports.loginusers = async (uname, upassword) => {
    return await usersModel.find({
        "$and": [{
            "uname": uname
        }, {
            "upassword": upassword
        }]
    })
}
module.exports.loginusersList = async (userusername, userpassword) => {
    return await usersModel.find({
        "$and": [{
            "uname": userusername
        }, {
            "upassword": userpassword
        }]
    })
}

module.exports.updateuser = async (_id, users) => {
    return await usersModel.updateOne({
        _id
    }, users)
}