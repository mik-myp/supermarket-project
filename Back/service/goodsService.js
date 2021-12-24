const {
    goodsList,
    addgoods,
    deletegoods,
    updategoods,
    buygoods,
    buygoodsList,
    deletebuygoods
} = require('../dao/goodsDao')


module.exports.goodsList = async () => {
    try {
        const list = await goodsList();
        return {
            message: '商品列表获取成功',
            status: 1,
            data: {
                goodsList: list
            }
        }
    } catch (error) {
        console.log(error);
        return {
            message: '商品列表获取失败',
            status: 0,
        }
    }

}

module.exports.addgoods = async goods => {
    const data = await addgoods(goods)
    // console.log('2222', data);
    if (data._id) {
        return {
            message: '商品新增成功',
            status: 1
        }
    } else {
        return {
            message: '商品新增失败',
            status: 0
        }
    }
}
module.exports.deletegoods = async _id => {
    const data = await deletegoods(_id)
    // console.log('2222', data);
    if (data) {
        return {
            message: '商品删除成功',
            status: 1
        }
    } else {
        return {
            message: '商品删除失败',
            status: 0
        }
    }
}

module.exports.updategoods = async (_id, goods) => {
    const data = await updategoods(_id, goods)
    // console.log('2222', data);
    if (data.modifiedCount) {
        return {
            message: '商品修改成功',
            status: 1
        }
    } else {
        return {
            message: '商品修改失败',
            status: 0
        }
    }
}

module.exports.buygoods = async goods => {
    const data = await buygoods(goods)
    console.log('2222', data);
    if (data._id) {
        return {
            message: '商品购买成功',
            status: 1
        }
    } else {
        return {
            message: '商品购买失败',
            status: 0
        }
    }
}

module.exports.buygoodsList = async () => {
    try {
        const list = await buygoodsList();
        return {
            message: '购买商品列表获取成功',
            status: 1,
            data: {
                buygoodsList: list
            }
        }
    } catch (error) {
        console.log(error);
        return {
            message: '购买商品列表获取失败',
            status: 0,
        }
    }

}

module.exports.deletebuygoods = async _id => {
    const data = await deletebuygoods(_id)
    // console.log('2222', data);
    if (data) {
        return {
            message: '商品删除成功',
            status: 1
        }
    } else {
        return {
            message: '商品删除失败',
            status: 0
        }
    }
}