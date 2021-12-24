const {
    superadminList,
    updatesuperadmin,
    loginsuperadmin,
    loginsuperadminList
} = require('../dao/superadminDao')


module.exports.superadminList = async () => {
    try {
        const list = await superadminList();
        return {
            message: '超级管理员列表获取成功',
            status: 1,
            data: {
                superadminList: list
            }
        }
    } catch (error) {
        console.log(error);
        return {
            message: '超级管理员列表获取失败',
            status: 0,
        }
    }

}

module.exports.loginsuperadmin = async (sname, spassword) => {
    const data = await loginsuperadmin(sname, spassword)
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
module.exports.loginsuperadminList = async (superadminusername, superadminpassword) => {
    const data = await loginsuperadminList(superadminusername, superadminpassword)
    console.log('2222', data);
    console.log(data.length);
    if (data.length) {
        return {
            message: '成功',
            status: 1,
            data: {
                superadminList: data
            }
        }
    } else {
        return {
            message: '错误',
            status: 0
        }
    }
}

module.exports.updatesuperadmin = async (_id, superadmin) => {
    const data = await updatesuperadmin(_id, superadmin)
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