const {
    adminsModel
} = require('../dao/model/adminsmodel')

module.exports.adminsList = async function () {
    return await adminsModel.find();

}

module.exports.addadmin = async admin => {
    return await adminsModel.create(admin)
}

module.exports.deleteadmin = async _id => {
    return await adminsModel.deleteOne(_id)
}

module.exports.updateadmin = async (_id, admin) => {
    return await adminsModel.updateOne({
        _id
    }, admin)
}

module.exports.loginadmin = async (aname, apassword) => {
    return await adminsModel.find({
        "$and": [{
            "aname": aname
        }, {
            "apassword": apassword
        }]
    })
}
module.exports.loginadminList = async (adminusername, adminpassword) => {
    return await adminsModel.find({
        "$and": [{
            "aname": adminusername
        }, {
            "apassword": adminpassword
        }]
    })
}