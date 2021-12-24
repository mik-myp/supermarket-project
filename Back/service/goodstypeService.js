const {
    goodstypeList,
    addgoodstype,
    deletegoodstype,
    updategoodstype
} = require('../dao/goodstypeDao')


module.exports.goodstypeList = async () => {
    try {
        const list = await goodstypeList();
        return {
            message: '商品类型列表获取成功',
            status: 1,
            data: {
                goodstypeList: list
            }
        }
    } catch (error) {
        console.log(error);
        return {
            message: '商品类型列表获取失败',
            status: 0,
        }
    }

}

module.exports.addgoodstype = async goodstype => {
    const data = await addgoodstype(goodstype)
    // console.log('2222', data);
    if (data._id) {
        return {
            message: '商品类型新增成功',
            status: 1
        }
    } else {
        return {
            message: '商品类型新增失败',
            status: 0
        }
    }
}
module.exports.deletegoodstype = async _id => {
    const data = await deletegoodstype(_id)
    // console.log('2222', data);
    if (data) {
        return {
            message: '商品类型删除成功',
            status: 1
        }
    } else {
        return {
            message: '商品类型删除失败',
            status: 0
        }
    }
}

module.exports.updategoodstype = async (_id, goodstype) => {
    const data = await updategoodstype(_id, goodstype)
    // console.log('2222', data);
    if (data.modifiedCount) {
        return {
            message: '商品类型修改成功',
            status: 1
        }
    } else {
        return {
            message: '商品类型修改失败',
            status: 0
        }
    }
}