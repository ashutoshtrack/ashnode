const express = require('express');
const { getUsers, getUserInfo, createUser, updateUser, deleteUser, doLogin } = require('../controllers/users.controller');
const isauthorized = require('../../config/is-authorized');
const router = express.Router();

router.get('/login', doLogin)  //using hardcoded login as of now 
router.get("/users", isauthorized, getUsers);
router.get("/users/:id", isauthorized, getUserInfo)
router.post("/users", isauthorized, createUser);
router.put("/users/:id", isauthorized, updateUser);
router.delete("/users/:id", isauthorized, deleteUser);


module.exports = router;
