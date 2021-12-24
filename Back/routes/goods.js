var express = require('express');
var router = express.Router();
const {
    goodsList,
    addgoods,
    deletegoods,
    updategoods,
    buygoods,
    buygoodsList,
    deletebuygoods
} = require('../service/goodsService')




router.get('/goodsList', async function (req, res, name) {

    const data = await goodsList();
    res.send(data)
    // console.log(data);

})

router.post('/addgoods', async function (req, res, name) {

    const data = await addgoods(req.body.goods)
    // console.log("req.body", req.body);
    // console.log('req.body.goods', req.body.goods);
    res.send(data)
    // console.log(data);

})
router.post('/deletegoods', async function (req, res, name) {

    const data = await deletegoods(req.body)
    // console.log(req.body);
    res.send(data)
    // console.log('data', data);

})

router.post('/updategoods', async function (req, res, name) {

    const data = await updategoods(req.body._id, req.body.goods)
    console.log(req.body._id, req.body.goods);
    res.send(data)
    console.log('data', data);

})
router.post('/buygoods', async function (req, res, name) {

    const data = await buygoods(req.body.goods)
    // console.log("req.body", req.body);
    // console.log('req.body.goods', req.body.goods);
    res.send(data)
    // console.log(data);

})
router.get('/buygoodsList', async function (req, res, name) {

    const data = await buygoodsList();
    res.send(data)
    // console.log(data);

})


router.post('/deletebuygoods', async function (req, res, name) {

    const data = await deletebuygoods(req.body)
    // console.log(req.body);
    res.send(data)
    // console.log('data', data);

})

module.exports = router;