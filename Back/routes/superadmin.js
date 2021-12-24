var express = require('express');
var router = express.Router();
const {
    superadminList,
    updatesuperadmin,
    loginsuperadmin,
    loginsuperadminList
} = require('../service/superadminService')




router.get('/superadminList', async function (req, res, name) {

    const data = await superadminList();
    res.send(data)
    // console.log(data);

})

router.post('/loginsuperadmin', async function (req, res, name) {
    const data = await loginsuperadmin(req.body.sname, req.body.spassword)
    res.send(data)
})



router.post('/loginsuperadminList', async function (req, res, name) {

    const data = await loginsuperadminList(req.body.superadminusername, req.body.superadminpassword)
    console.log(req.body.superadminusername, req.body.superadminpassword);
    res.send(data)
    console.log('data', data);

})
router.post('/updatesuperadmin', async function (req, res, name) {

    const data = await updatesuperadmin(req.body._id, req.body.superadmin)
    console.log(req.body._id, req.body.superadmin);
    res.send(data)
    console.log('data', data);

})

module.exports = router;