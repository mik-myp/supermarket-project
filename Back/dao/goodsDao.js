const {
    goodsModel
} = require('../dao/model/goodsmodel')
const {
    shoppingcarModel
} = require('../dao/model/shoppingcarmodel')

module.exports.goodsList = async function () {
    return await goodsModel.find();

}

module.exports.addgoods = async goods => {
    return await goodsModel.create(goods)
}
module.exports.deletegoods = async _id => {
    return await goodsModel.deleteOne(_id)
}

module.exports.updategoods = async (_id, goods) => {
    return await goodsModel.updateOne({
        _id
    }, goods)
}

module.exports.buygoods = async goods => {
    return await shoppingcarModel.create(goods)
}

module.exports.buygoodsList = async function () {
    return await shoppingcarModel.find();

}

module.exports.deletebuygoods = async _id => {
    return await shoppingcarModel.deleteOne(_id)
}