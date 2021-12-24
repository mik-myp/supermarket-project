var express = require('express');
var router = express.Router();
const {
    adminsList,
    addadmin,
    deleteadmin,
    updateadmin,
    loginadmin,
    loginadminList
} = require('../service/adminsService')




router.get('/adminsList', async function (req, res, name) {

    const data = await adminsList();
    res.send(data)
    // console.log(data);

})
router.post('/addadmin', async function (req, res, name) {
    const data = await addadmin(req.body.admin)
    res.send(data)
})
router.post('/deleteadmin', async function (req, res, name) {

    const data = await deleteadmin(req.body)
    // console.log(req.body);
    res.send(data)
    // console.log('data', data);

})

router.post('/updateadmin', async function (req, res, name) {

    const data = await updateadmin(req.body._id, req.body.admin)
    console.log(req.body._id, req.body.admin);
    res.send(data)
    console.log('data', data);

})
router.post('/loginadmin', async function (req, res, name) {
    const data = await loginadmin(req.body.aname, req.body.apassword)
    res.send(data)
})
router.post('/loginadminList', async function (req, res, name) {

    const data = await loginadminList(req.body.adminusername, req.body.adminpassword)
    console.log(req.body.adminusername, req.body.adminpassword);
    res.send(data)
    console.log('data', data);

})

module.exports = router;