const {
    goodstypeModel
} = require('../dao/model/goodstypemodel')

module.exports.goodstypeList = async function () {
    return await goodstypeModel.find();

}

module.exports.addgoodstype = async goodstype => {
    return await goodstypeModel.create(goodstype)
}
module.exports.deletegoodstype = async _id => {
    return await goodstypeModel.deleteOne(_id)
}

module.exports.updategoodstype = async (_id, goodstype) => {
    return await goodstypeModel.updateOne({
        _id
    }, goodstype)
}