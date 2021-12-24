var express = require('express');
var router = express.Router();
const {
    supplierList,
    addsupplier,
    deletesupplier,
    updatesupplier
} = require('../service/supplierService')




router.get('/supplierList', async function (req, res, name) {

    const data = await supplierList();
    res.send(data)
    // console.log(data);

})
router.post('/addsupplier', async function (req, res, name) {

    const data = await addsupplier(req.body.supplier)
    // console.log("req.body", req.body);
    // console.log('req.body.supplier', req.body.supplier);
    res.send(data)
    // console.log(data);

})

router.post('/deletesupplier', async function (req, res, name) {

    const data = await deletesupplier(req.body)
    // console.log(req.body);
    res.send(data)
    // console.log('data', data);

})

router.post('/updatesupplier', async function (req, res, name) {

    const data = await updatesupplier(req.body._id, req.body.supplier)
    console.log(req.body._id, req.body.supplier);
    res.send(data)
    console.log('data', data);

})
module.exports = router;