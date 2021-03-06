/*
 Navicat Premium Data Transfer

 Source Server         : localhost_27017
 Source Server Type    : MongoDB
 Source Server Version : 50003
 Source Host           : localhost:27017
 Source Schema         : supermarket

 Target Server Type    : MongoDB
 Target Server Version : 50003
 File Encoding         : 65001

 Date: 24/12/2021 19:27:49
*/


// ----------------------------
// Collection structure for admin
// ----------------------------
db.getCollection("admin").drop();
db.createCollection("admin");

// ----------------------------
// Documents of admin
// ----------------------------
db.getCollection("admin").insert([ {
    _id: ObjectId("6177a26d5b4a9504fad574b2"),
    aid: "001",
    aname: "张三三",
    apassword: "123456",
    aage: "20",
    asex: "男",
    atelephone: "12345678911",
    aaddress: "湖北省丹江口市",
    adepartment: "收银员",
    __v: NumberInt("0")
} ]);
db.getCollection("admin").insert([ {
    _id: ObjectId("6177a2845b4a9504fad574b4"),
    aid: "002",
    aname: "李四四",
    apassword: "123456",
    aage: "21",
    asex: "男",
    atelephone: "17671812132",
    aaddress: "湖北省孝感市",
    adepartment: "理货员",
    __v: NumberInt("0")
} ]);
db.getCollection("admin").insert([ {
    _id: ObjectId("6177a2965b4a9504fad574b6"),
    aid: "003",
    aname: "王五五",
    apassword: "123456",
    aage: "22",
    asex: "男",
    atelephone: "17671812132",
    aaddress: "湖北省十堰市",
    adepartment: "经理",
    __v: NumberInt("0")
} ]);
db.getCollection("admin").insert([ {
    _id: ObjectId("6177a2ae5b4a9504fad574b8"),
    aid: "004",
    aname: "赵六六",
    apassword: "123456",
    aage: "24",
    asex: "女",
    atelephone: "17671812132",
    aaddress: "湖北省武汉市",
    adepartment: "保安",
    __v: NumberInt("0")
} ]);
db.getCollection("admin").insert([ {
    _id: ObjectId("61782e77f1b4daf3d92c611d"),
    aid: "005",
    aname: "mmyypp",
    apassword: "mmyypp",
    aage: "23",
    asex: "男",
    atelephone: "1597534682",
    aaddress: "湖北省十堰市",
    adepartment: "经理",
    __v: NumberInt("0")
} ]);
db.getCollection("admin").insert([ {
    _id: ObjectId("6197c234e07684d7e8c74bd8"),
    aid: "006",
    aname: "123",
    apassword: "123",
    aage: "21",
    asex: "女",
    atelephone: "17671812132",
    aaddress: "111",
    adepartment: "理货员",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for department
// ----------------------------
db.getCollection("department").drop();
db.createCollection("department");

// ----------------------------
// Documents of department
// ----------------------------
db.getCollection("department").insert([ {
    _id: ObjectId("616a76072473000020001df0"),
    did: "101",
    dname: "理货员",
    dtelephone: "88888888888",
    daddress: "1楼105",
    __v: null
} ]);
db.getCollection("department").insert([ {
    _id: ObjectId("616a76192473000020001df1"),
    did: "102",
    dname: "收银员",
    dtelephone: "8784727498",
    daddress: "3楼308",
    __v: null
} ]);
db.getCollection("department").insert([ {
    _id: ObjectId("616a76262473000020001df2"),
    did: "103",
    dname: "经理",
    dtelephone: "82739173918",
    daddress: "5楼101",
    __v: null
} ]);
db.getCollection("department").insert([ {
    _id: ObjectId("616a76aa2473000020001df3"),
    did: "104",
    dname: "保安",
    dtelephone: "8888888",
    daddress: "1楼101",
    __v: null
} ]);
db.getCollection("department").insert([ {
    _id: ObjectId("6177a38a5b4a9504fad574d6"),
    did: "105",
    dname: "导购员",
    dtelephone: "17671812132",
    daddress: "1楼203",
    __v: NumberInt("0")
} ]);
db.getCollection("department").insert([ {
    _id: ObjectId("61782e9df1b4daf3d92c6124"),
    did: "106",
    dname: "清洁工",
    dtelephone: "164832974",
    daddress: "1楼门口大厅",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for goods
// ----------------------------
db.getCollection("goods").drop();
db.createCollection("goods");

// ----------------------------
// Documents of goods
// ----------------------------
db.getCollection("goods").insert([ {
    _id: ObjectId("616fcd6736110000450006a5"),
    gtypeid: "301",
    gtype: "罐头",
    gid: "30101",
    gname: "水果罐头",
    gprice: "17",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616a73082473000020001de7"),
    gtypeid: "501",
    gtype: "畜禽类",
    gid: "50101",
    gname: "猪肉",
    gprice: "22",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616a72452473000020001de2"),
    gtypeid: "302",
    gtype: "调味制品",
    gid: "30201",
    gname: "调味料",
    gprice: "19",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616a72992473000020001de4"),
    gtypeid: "401",
    gtype: "速食品",
    gid: "40101",
    gname: "方便面",
    gprice: "21",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616a73072473000020001de6"),
    gtypeid: "403",
    gtype: "食用油",
    gid: "40301",
    gname: "花生油",
    gprice: "22",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616a730c2473000020001dec"),
    gtypeid: "601",
    gtype: "奶蛋类",
    gid: "60101",
    gname: "鲜奶",
    gprice: "22",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616a730a2473000020001de9"),
    gtypeid: "502",
    gtype: "水产类",
    gid: "50201",
    gname: "淡水鱼类",
    gprice: "22",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616a73092473000020001de8"),
    gtypeid: "501",
    gtype: "畜禽类",
    gid: "50102",
    gname: "牛肉",
    gprice: "22",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616a726f2473000020001de3"),
    gtypeid: "302",
    gtype: "调味制品",
    gid: "30202",
    gname: "调味酱",
    gprice: "20",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616a730c2473000020001deb"),
    gtypeid: "503",
    gtype: "蔬果类",
    gid: "50301",
    gname: "蔬菜",
    gprice: "22",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("6169aa3627470000dd005ab5"),
    gtypeid: "101",
    gtype: "休闲食品",
    gid: "10102",
    gname: "干果炒货",
    gprice: "2",
    gstock: "100",
    gsupplier: "晨光文具",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616a71082473000020001dd7"),
    gtypeid: "103",
    gtype: "糖果",
    gid: "10302",
    gname: "软糖",
    gprice: "8",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616a70f12473000020001dd6"),
    gtypeid: "103",
    gtype: "糖果",
    gid: "10301",
    gname: "巧克力",
    gprice: "7",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("6169aa4f27470000dd005ab6"),
    gtypeid: "101",
    gtype: "休闲食品",
    gid: "10103",
    gname: "果脯蜜饯",
    gprice: "3",
    gstock: "10",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616fd1ae36110000450006a6"),
    gtypeid: "302",
    gtype: "调味制品",
    gid: "30202",
    gname: "调味酱",
    gprice: "20",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616a720d2473000020001ddf"),
    gtypeid: "203",
    gtype: "烟草",
    gid: "20302",
    gname: "进口烟",
    gprice: "16",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616a70a92473000020001dd3"),
    gtypeid: "102",
    gtype: "饼干糕点",
    gid: "10201",
    gname: "饼干",
    gprice: "4",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616a70c42473000020001dd4"),
    gtypeid: "102",
    gtype: "饼干糕点",
    gid: "10202",
    gname: "糕点",
    gprice: "5",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616a70d92473000020001dd5"),
    gtypeid: "102",
    gtype: "饼干糕点",
    gid: "10203",
    gname: "曲奇",
    gprice: "6",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("6169aa1827470000dd005ab4"),
    gtypeid: "101",
    gtype: "休闲食品",
    gid: "10101",
    gname: "膨化食品",
    gprice: "1",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616a71612473000020001dda"),
    gtypeid: "201",
    gtype: "饮料",
    gid: "20101",
    gname: "碳酸饮料",
    gprice: "11",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616a72bb2473000020001de5"),
    gtypeid: "402",
    gtype: "粮食类",
    gid: "40201",
    gname: "米面",
    gprice: "22",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616a71452473000020001dd9"),
    gtypeid: "104",
    gtype: "冲调食品",
    gid: "10402",
    gname: "麦片",
    gprice: "10",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616a71bc2473000020001ddb"),
    gtypeid: "201",
    gtype: "饮料",
    gid: "20102",
    gname: "饮用水",
    gprice: "12",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616a71232473000020001dd8"),
    gtypeid: "104",
    gtype: "冲调食品",
    gid: "10401",
    gname: "奶粉",
    gprice: "9",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("616a730b2473000020001dea"),
    gtypeid: "502",
    gtype: "水产类",
    gid: "50202",
    gname: "海水鱼类",
    gprice: "22",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for goodstype
// ----------------------------
db.getCollection("goodstype").drop();
db.createCollection("goodstype");

// ----------------------------
// Documents of goodstype
// ----------------------------
db.getCollection("goodstype").insert([ {
    _id: ObjectId("616a778b2473000020001df5"),
    tid: "101",
    tname: "休闲食品"
} ]);
db.getCollection("goodstype").insert([ {
    _id: ObjectId("616a77932473000020001df6"),
    tid: "102",
    tname: "饼干糕点"
} ]);
db.getCollection("goodstype").insert([ {
    _id: ObjectId("616a779d2473000020001df7"),
    tid: "103",
    tname: "糖果"
} ]);
db.getCollection("goodstype").insert([ {
    _id: ObjectId("616a77a82473000020001df8"),
    tid: "104",
    tname: "冲调食品"
} ]);
db.getCollection("goodstype").insert([ {
    _id: ObjectId("616a77aa2473000020001df9"),
    tid: "201",
    tname: "饮料"
} ]);
db.getCollection("goodstype").insert([ {
    _id: ObjectId("616a77ac2473000020001dfa"),
    tid: "202",
    tname: "酒类"
} ]);
db.getCollection("goodstype").insert([ {
    _id: ObjectId("616a77ae2473000020001dfb"),
    tid: "203",
    tname: "烟草"
} ]);
db.getCollection("goodstype").insert([ {
    _id: ObjectId("616a77b42473000020001dfc"),
    tid: "301",
    tname: "罐头"
} ]);
db.getCollection("goodstype").insert([ {
    _id: ObjectId("616a77b62473000020001dfd"),
    tid: "302",
    tname: "调味制品"
} ]);
db.getCollection("goodstype").insert([ {
    _id: ObjectId("616a77ba2473000020001dfe"),
    tid: "401",
    tname: "熟食品"
} ]);
db.getCollection("goodstype").insert([ {
    _id: ObjectId("616a77bc2473000020001dff"),
    tid: "402",
    tname: "粮食类"
} ]);
db.getCollection("goodstype").insert([ {
    _id: ObjectId("616a77c32473000020001e00"),
    tid: "403",
    tname: "食用油"
} ]);
db.getCollection("goodstype").insert([ {
    _id: ObjectId("616a77c72473000020001e01"),
    tid: "501",
    tname: "畜禽类"
} ]);
db.getCollection("goodstype").insert([ {
    _id: ObjectId("616a77ca2473000020001e02"),
    tid: "502",
    tname: "水产类"
} ]);
db.getCollection("goodstype").insert([ {
    _id: ObjectId("616a77cd2473000020001e03"),
    tid: "503",
    tname: "蔬果类"
} ]);
db.getCollection("goodstype").insert([ {
    _id: ObjectId("616a77cf2473000020001e04"),
    tid: "601",
    tname: "奶蛋类"
} ]);
db.getCollection("goodstype").insert([ {
    _id: ObjectId("616a77d12473000020001e05"),
    tid: "602",
    tname: "保鲜果汁"
} ]);

// ----------------------------
// Collection structure for returngoods
// ----------------------------
db.getCollection("returngoods").drop();
db.createCollection("returngoods");

// ----------------------------
// Documents of returngoods
// ----------------------------
db.getCollection("returngoods").insert([ {
    _id: ObjectId("616a71cf2473000020001ddc"),
    gtypeid: "202",
    gtype: "酒类",
    gid: "20201",
    gname: "白酒",
    gprice: "13",
    gstock: "100",
    gsupplier: "晨光 ",
    __v: NumberInt("0")
} ]);
db.getCollection("returngoods").insert([ {
    _id: ObjectId("616a71f72473000020001dde"),
    gtypeid: "203",
    gtype: "烟草",
    gid: "20301",
    gname: "国产烟",
    gprice: "15",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);
db.getCollection("returngoods").insert([ {
    _id: ObjectId("616a71df2473000020001ddd"),
    gtypeid: "202",
    gtype: "酒类",
    gid: "20202",
    gname: "啤酒",
    gprice: "14",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for shoppingcar
// ----------------------------
db.getCollection("shoppingcar").drop();
db.createCollection("shoppingcar");

// ----------------------------
// Documents of shoppingcar
// ----------------------------
db.getCollection("shoppingcar").insert([ {
    _id: ObjectId("616a720d2473000020001ddf"),
    gtypeid: "203",
    gtype: "烟草",
    gid: "20302",
    gname: "进口烟",
    gprice: "16",
    gstock: "100",
    gsupplier: "晨光",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for superadmin
// ----------------------------
db.getCollection("superadmin").drop();
db.createCollection("superadmin");

// ----------------------------
// Documents of superadmin
// ----------------------------
db.getCollection("superadmin").insert([ {
    _id: ObjectId("616cdd96362f00001b005332"),
    sid: "001",
    sname: "superadmin",
    spassword: "123456",
    stelephone: "17671812132",
    saddress: "湖北省孝感市",
    sremarks: "超级管理员",
    sage: "21",
    ssex: "男"
} ]);
db.getCollection("superadmin").insert([ {
    _id: ObjectId("616d9e97362f00001b005333"),
    sid: "002",
    saddress: "湖北省丹江口市",
    sage: "23",
    sname: "myp",
    spassword: "myp",
    sremarks: "超级管理员",
    ssex: "女",
    stelephone: "13819742538"
} ]);

// ----------------------------
// Collection structure for supplier
// ----------------------------
db.getCollection("supplier").drop();
db.createCollection("supplier");

// ----------------------------
// Documents of supplier
// ----------------------------
db.getCollection("supplier").insert([ {
    _id: ObjectId("61684c1df52a000066000cc6"),
    sid: "1001",
    sname: "晨光文具",
    saddress: "孝感市孝南区同大公寓",
    stelephone: "17671812132"
} ]);
db.getCollection("supplier").insert([ {
    _id: ObjectId("6177a4b65b4a9504fad57507"),
    sid: "1002",
    sname: "宜宾市裕杰商贸有限公司",
    stelephone: "111111111",
    saddress: "四川宜宾市翠屏区",
    __v: NumberInt("0")
} ]);
db.getCollection("supplier").insert([ {
    _id: ObjectId("6177a51a5b4a9504fad5750a"),
    sid: "1003",
    sname: "乐山怡亚通丰嘉有限公司",
    stelephone: "222222222",
    saddress: "四川乐山市中区",
    __v: NumberInt("0")
} ]);
db.getCollection("supplier").insert([ {
    _id: ObjectId("6177a54e5b4a9504fad5750c"),
    sid: "1004",
    sname: "上海霞飞日化有限公司",
    stelephone: "333333333",
    saddress: "上海市黄浦区",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("616fc84e36110000450006a3"),
    uid: "001",
    uaddress: "湖北省丹江口市",
    uage: "23",
    uname: "user",
    upassword: "user",
    uremarks: "普通用户",
    usex: "女",
    utelephone: "13819742538"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("616fc95077cc9fb7a2adf076"),
    uid: "002",
    uname: "test",
    upassword: "test",
    uage: "23",
    usex: "女",
    utelephone: "12312312311",
    uaddress: "湖北省孝感市",
    uremarks: "普通用户",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6177a3f15b4a9504fad574e5"),
    uid: "003",
    uname: "hello",
    upassword: "hello",
    uage: "23",
    usex: "男",
    utelephone: "13819742537",
    uaddress: "湖北市武汉市",
    uremarks: "普通用户",
    __v: NumberInt("0")
} ]);
