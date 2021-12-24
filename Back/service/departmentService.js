const {
    departmentList,
    adddepartment,
    deletedepartment,
    updatedepartment
} = require('../dao/departmentDao')


module.exports.departmentList = async () => {
    try {
        const list = await departmentList();
        return {
            message: '职位列表获取成功',
            status: 1,
            data: {
                departmentList: list
            }
        }
    } catch (error) {
        console.log(error);
        return {
            message: '职位列表获取失败',
            status: 0,
        }
    }

}

module.exports.adddepartment = async department => {
    const data = await adddepartment(department)
    // console.log('2222', data);
    if (data._id) {
        return {
            message: '职位新增成功',
            status: 1
        }
    } else {
        return {
            message: '职位新增失败',
            status: 0
        }
    }
}

module.exports.deletedepartment = async _id => {
    const data = await deletedepartment(_id)
    if (data) {
        return {
            message: '职位删除成功',
            status: 1
        }
    } else {
        return {
            message: '职位删除失败',
            status: 0
        }
    }
}

module.exports.updatedepartment = async (_id, department) => {
    const data = await updatedepartment(_id, department)
    // console.log('2222', data);
    if (data.modifiedCount) {
        return {
            message: '职位修改成功',
            status: 1
        }
    } else {
        return {
            message: '职位修改失败',
            status: 0
        }
    }
}