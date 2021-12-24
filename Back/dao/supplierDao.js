const {
    supplierModel
} = require('../dao/model/suppliermodel')

module.exports.supplierList = async function () {
    return await supplierModel.find();

}
module.exports.addsupplier = async supplier => {
    return await supplierModel.create(supplier)
}
module.exports.deletesupplier = async _id => {
    return await supplierModel.deleteOne(_id)
}

module.exports.updatesupplier = async (_id, supplier) => {
    return await supplierModel.updateOne({
        _id
    }, supplier)
}