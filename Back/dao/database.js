// 通过 mongoose 去连接 MongoDB
const mongoose = require('mongoose');
// 设置要连接的 MongoDB 服务器地址(student:要连接的数据库名称)
const dbURI = 'mongodb://localhost:27017/supermarket';
// 连接数据库
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => console.log(dbURI + ' 数据库连接成功'));