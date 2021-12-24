var express = require('express');
var router = express.Router();
const {
    goodstypeList,
    addgoodstype,
    deletegoodstype,
    updategoodstype
} = require('../service/goodstypeService')




router.get('/goodstypeList', async function (req, res, name) {

    const data = await goodstypeList();
    res.send(data)
    // console.log(data);

})


router.post('/addgoodstype', async function (req, res, name) {

    const data = await addgoodstype(req.body.goodstype)
    // console.log("req.body", req.body);
    // console.log('req.body.goodstype', req.body.goodstype);
    res.send(data)
    // console.log(data);

})

router.post('/deletegoodstype', async function (req, res, name) {

    const data = await deletegoodstype(req.body)
    // console.log(req.body);
    res.send(data)
    // console.log('data', data);

})

router.post('/updategoodstype', async function (req, res, name) {

    const data = await updategoodstype(req.body._id, req.body.goodstype)
    console.log(req.body._id, req.body.goodstype);
    res.send(data)
    console.log('data', data);

})

module.exports = router;