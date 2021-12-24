const {
    adminsList,
    addadmin,
    deleteadmin,
    updateadmin,
    loginadmin,
    loginadminList
} = require('../dao/adminsDao')


module.exports.adminsList = async () => {
    try {
        const list = await adminsList();
        return {
            message: '管理员列表获取成功',
            status: 1,
            data: {
                adminsList: list
            }
        }
    } catch (error) {
        console.log(error);
        return {
            message: '管理员列表获取失败',
            status: 0,
        }
    }

}
module.exports.addadmin = async admin => {
    const data = await addadmin(admin)
    if (data._id) {
        return {
            message: '管理员新增成功',
            status: 1
        }
    } else {
        return {
            message: '管理员新增失败',
            status: 0
        }
    }
}
module.exports.deleteadmin = async _id => {
    const data = await deleteadmin(_id)
    // console.log('2222', data);
    if (data) {
        return {
            message: '管理员删除成功',
            status: 1
        }
    } else {
        return {
            message: '管理员删除失败',
            status: 0
        }
    }
}
module.exports.updateadmin = async (_id, admin) => {
    const data = await updateadmin(_id, admin)
    // console.log('2222', data);
    if (data.modifiedCount) {
        return {
            message: '管理员修改成功',
            status: 1
        }
    } else {
        return {
            message: '管理员修改失败',
            status: 0
        }
    }
}
module.exports.loginadmin = async (aname, apassword) => {
    const data = await loginadmin(aname, apassword)
    console.log('2222', data);
    console.log(data.length);
    if (data.length) {
        return {
            message: '登录成功',
            status: 1,
        }
    } else {
        return {
            message: '登录失败',
            status: 0
        }
    }
}
module.exports.loginadminList = async (adminusername, adminpassword) => {
    const data = await loginadminList(adminusername, adminpassword)
    console.log('2222', data);
    console.log(data.length);
    if (data.length) {
        return {
            message: '成功',
            status: 1,
            data: {
                adminList: data
            }
        }
    } else {
        return {
            message: '错误',
            status: 0
        }
    }
}