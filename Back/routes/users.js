var express = require('express');
var router = express.Router();
const {
  usersList,
  addusers,
  deleteusers,
  updateusers,
  updateuser,
  loginusers,
  loginusersList
} = require('../service/usersService')




router.get('/usersList', async function (req, res, name) {

  const data = await usersList();
  res.send(data)
  // console.log(data);

})
router.post('/addusers', async function (req, res, name) {

  const data = await addusers(req.body.users)
  // console.log(req.body);
  // console.log('req.body.users',
  //     req.body.users);
  res.send(data)
  // console.log('data', data);

})
router.post('/deleteusers', async function (req, res, name) {

  const data = await deleteusers(req.body)
  // console.log(req.body);
  res.send(data)
  // console.log('data', data);

})
// 管理员修改
router.post('/updateusers', async function (req, res, name) {

  const data = await updateusers(req.body._id, req.body.users)
  console.log(req.body._id, req.body.users);
  res.send(data)
  console.log('data', data);

})

router.post('/loginusers', async function (req, res, name) {

  const data = await loginusers(req.body.uname, req.body.upassword)
  console.log(req.body.uname, req.body.upassword);
  res.send(data)
  console.log('data', data);

})




router.post('/loginusersList', async function (req, res, name) {

  const data = await loginusersList(req.body.userusername, req.body.userpassword)
  console.log(req.body.userusername, req.body.userpassword);
  res.send(data)
  console.log('data', data);

})
// 自己修改
router.post('/updateuser', async function (req, res, name) {

  const data = await updateusers(req.body._id, req.body.users)
  console.log(req.body._id, req.body.users);
  res.send(data)
  console.log('data', data);

})

module.exports = router;