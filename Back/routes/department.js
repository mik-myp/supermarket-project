var express = require('express');
var router = express.Router();
const {
    departmentList,
    adddepartment,
    deletedepartment,
    updatedepartment
} = require('../service/departmentService')




router.get('/departmentList', async function (req, res, name) {

    const data = await departmentList();
    res.send(data)
    // console.log(data);

})
router.post('/adddepartment', async function (req, res, name) {

    const data = await adddepartment(req.body.department)
    // console.log("req.body", req.body);
    // console.log('req.body.department', req.body.department);
    res.send(data)
    // console.log(data);

})
router.post('/deletedepartment', async function (req, res, name) {
    const data = await deletedepartment(req.body)
    res.send(data)
})
router.post('/updatedepartment', async function (req, res, name) {

    const data = await updatedepartment(req.body._id, req.body.department)
    // console.log(req.body._id, req.body.department);
    res.send(data)
    // console.log('data', data);

})
module.exports = router;