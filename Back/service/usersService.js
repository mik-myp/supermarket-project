const {
    usersList,
    addusers,
    deleteusers,
    updateusers,
    updateuser,
    loginusers,
    loginusersList
} = require('../dao/usersDao')


module.exports.usersList = async () => {
    try {
        const list = await usersList();
        return {
            message: '用户列表获取成功',
            status: 1,
            data: {
                usersList: list
            }
        }
    } catch (error) {
        console.log(error);
        return {
            message: '用户列表获取失败',
            status: 0,
        }
    }

}
module.exports.addusers = async users => {
    const data = await addusers(users)
    // console.log('2222', data);
    if (data._id) {
        return {
            message: '用户新增成功',
            status: 1
        }
    } else {
        return {
            message: '用户新增失败',
            status: 0
        }
    }
}
module.exports.deleteusers = async _id => {
    const data = await deleteusers(_id)
    // console.log('2222', data);
    if (data) {
        return {
            message: '用户删除成功',
            status: 1
        }
    } else {
        return {
            message: '用户删除失败',
            status: 0
        }
    }
}
module.exports.updateusers = async (_id, users) => {
    const data = await updateusers(_id, users)
    // console.log('2222', data);
    if (data.modifiedCount) {
        return {
            message: '用户修改成功',
            status: 1
        }
    } else {
        return {
            message: '用户修改失败',
            status: 0
        }
    }
}

module.exports.loginusers = async (uname, upassword) => {
    const data = await loginusers(uname, upassword)
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


module.exports.loginusersList = async (userusername, userpassword) => {
    const data = await loginusersList(userusername, userpassword)
    console.log('2222', data);
    console.log(data.length);
    if (data.length) {
        return {
            message: '成功',
            status: 1,
            data: {
                usersList: data
            }
        }
    } else {
        return {
            message: '错误',
            status: 0
        }
    }
}

module.exports.updateuser = async (_id, users) => {
    const data = await updateusers(_id, users)
    // console.log('2222', data);
    if (data.modifiedCount) {
        return {
            message: '修改成功',
            status: 1
        }
    } else {
        return {
            message: '修改失败',
            status: 0
        }
    }
}