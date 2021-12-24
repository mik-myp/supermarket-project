const {
    returngoodsModel
} = require('../dao/model/returngoodsmodel')

module.exports.returngoodsList = async function () {
    return await returngoodsModel.find();
}

module.exports.addreturngoods = async returngoods => {
    return await returngoodsModel.create(returngoods)
}
module.exports.deletereturngoods = async _id => {
    return await returngoodsModel.deleteOne(_id)
}

// module.exports.updatereturngoods = async (_id, returngoods) => {
//     return await returngoodsModel.updateOne({
//         _id
//     }, returngoods)
// }