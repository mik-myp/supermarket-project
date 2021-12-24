const {
    superadminModel
} = require('../dao/model/superadminmodel')

module.exports.superadminList = async function () {
    return await superadminModel.find();

}
module.exports.loginsuperadmin = async (sname, spassword) => {
    return await superadminModel.find({
        "$and": [{
            "sname": sname
        }, {
            "spassword": spassword
        }]
    })
}
module.exports.loginsuperadminList = async (superadminusername, superadminpassword) => {
    return await superadminModel.find({
        "$and": [{
            "sname": superadminusername
        }, {
            "spassword": superadminpassword
        }]
    })
}

module.exports.updatesuperadmin = async (_id, superadmin) => {
    return await superadminModel.updateOne({
        _id
    }, superadmin)
}