const {
    departmentModel
} = require('../dao/model/departmentmodel')

module.exports.departmentList = async function () {
    return await departmentModel.find();

}

module.exports.adddepartment = async department => {
    return await departmentModel.create(department)
}

module.exports.deletedepartment = async _id => {
    return await departmentModel.deleteOne(_id)
}

module.exports.updatedepartment = async (_id, department) => {
    return await departmentModel.updateOne({
        _id
    }, department)
}