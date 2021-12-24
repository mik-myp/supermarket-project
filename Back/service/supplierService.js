const {
    supplierList,
    addsupplier,
    deletesupplier,
    updatesupplier
} = require('../dao/supplierDao')


module.exports.supplierList = async () => {
    try {
        const list = await supplierList();
        return {
            message: '供应商列表获取成功',
            status: 1,
            data: {
                supplierList: list
            }
        }
    } catch (error) {
        console.log(error);
        return {
            message: '供应商列表获取失败',
            status: 0,
        }
    }

}
module.exports.addsupplier = async supplier => {
    const data = await addsupplier(supplier)
    // console.log('2222', data);
    if (data._id) {
        return {
            message: '供应商新增成功',
            status: 1
        }
    } else {
        return {
            message: '供应商新增失败',
            status: 0
        }
    }
}
module.exports.deletesupplier = async _id => {
    const data = await deletesupplier(_id)
    // console.log('2222', data);
    if (data) {
        return {
            message: '供应商删除成功',
            status: 1
        }
    } else {
        return {
            message: '供应商删除失败',
            status: 0
        }
    }
}

module.exports.updatesupplier = async (_id, supplier) => {
    const data = await updatesupplier(_id, supplier)
    // console.log('2222', data);
    if (data.modifiedCount) {
        return {
            message: '供应商修改成功',
            status: 1
        }
    } else {
        return {
            message: '供应商修改失败',
            status: 0
        }
    }
}