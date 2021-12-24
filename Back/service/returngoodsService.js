const {
    returngoodsList,
    addreturngoods,
    deletereturngoods
} = require('../dao/returngoodsDao')


module.exports.returngoodsList = async () => {
    try {
        const list = await returngoodsList();
        return {
            message: '退货商品列表获取成功',
            status: 1,
            data: {
                returngoodsList: list
            }
        }
    } catch (error) {
        console.log(error);
        return {
            message: '退货商品列表获取失败',
            status: 0,
        }
    }

}

module.exports.addreturngoods = async returngoods => {
    const data = await addreturngoods(returngoods)
    // console.log('2222', data);
    if (data._id) {
        return {
            message: '退货商品成功',
            status: 1
        }
    } else {
        return {
            message: '退货商品失败',
            status: 0
        }
    }
}
module.exports.deletereturngoods = async _id => {
    const data = await deletereturngoods(_id)
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

// module.exports.updatereturngoods = async (_id, returngoods) => {
//     const data = await updatereturngoods(_id, returngoods)
//     // console.log('2222', data);
//     if (data.modifiedCount) {
//         return {
//             message: '商品修改成功',
//             status: 1
//         }
//     } else {
//         return {
//             message: '商品修改失败',
//             status: 0
//         }
//     }
// }