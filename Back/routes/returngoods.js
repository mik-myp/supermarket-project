var express = require('express');
var router = express.Router();
const {
    returngoodsList,
    addreturngoods,
    deletereturngoods
} = require('../service/returngoodsService')




router.get('/returngoodsList', async function (req, res, name) {

    const data = await returngoodsList();
    res.send(data)
    // console.log(data);

})

router.post('/addreturngoods', async function (req, res, name) {

    const data = await addreturngoods(req.body.returngoods)
    // console.log("req.body", req.body);
    // console.log('req.body.returngoods', req.body.returngoods);
    res.send(data)
    // console.log(data);

})
router.post('/deletereturngoods', async function (req, res, name) {

    const data = await deletereturngoods(req.body)
    // console.log(req.body);
    res.send(data)
    // console.log('data', data);

})

// router.post('/updatereturngoods', async function (req, res, name) {

//     const data = await updatereturngoods(req.body._id, req.body.returngoods)
//     console.log(req.body._id, req.body.returngoods);
//     res.send(data)
//     console.log('data', data);

// })

module.exports = router;