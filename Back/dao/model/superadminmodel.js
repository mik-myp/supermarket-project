// 数据库集合的相关配置
// 1.定义数据集合的结构：定义出集合中数据有哪些属性，属性的值是什么类型
const {
    Schema,
    model
} = require('mongoose');

const superadminSchema = new Schema({
    sid: String,
    sname: String,
    spassword: String,
    sage: String,
    ssex: String,
    stelephone: String,
    saddress: String,
    sremarks: String
});
// 2. 定义数据集合的模型： 将 schema 和数据库中的集合关联起来
// model（ '模型名称（自定义）', 上面的schema名称（usersSchema）, '数据库中集合的名称'）
const superadminModel = model('superadminModel', superadminSchema, 'superadmin')

// 7.将usersModel暴露出去
module.exports.superadminModel = superadminModel