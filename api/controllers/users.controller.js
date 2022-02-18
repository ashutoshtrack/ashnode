const { sign } = require('../../config/jwt');
const Users = require('../models/user.models');

const doLogin = async function (req, res) {
    try {
        let username = "someone"; //cred checks (used dummy here onow)

        let token = sign(username + "idfromDBsecured".toString());

        res.cookie("token", token); //maxAge
        return res.status(200).json({
            message: "Login successfull",
        });
    } catch (err) {
        console.log(err);
        return res.send({ message: "Server error message" })
    }
}


const getUsers = async function (req, res) {
    try {
        let users = await Users.find({});
        return res.send({ users: users })
    } catch (err) {
        console.log(err);
        return res.send({ message: "Server error message" })
    }
}



const getUserInfo = async function (req, res) {
    let { id } = req.params;
    try {
        let users = await Users.findOne({
            id: id
        });
        return res.send({ users: users })
    } catch (err) {
        console.log(err);
        return res.send({ message: "Server error message" })
    }
}


const createUser = async function (req, res) {
    let { name, dob, state, address } = req.body;
    try {
        await Users.create({
            name, dob, state, address
        });
        return res.send({ message: "New user created" });
    } catch (err) {
        console.log(err);
        return res.send({ message: "Server error message" })
    }
}



const updateUser = async function (req, res) {
    let { name, dob, state, address } = req.body;
    let { id } = req.params;
    try {
        await Users.updateOne({
            id: id
        }, {
            $set: {

                name, dob, state, address

            }
        });
        return res.send({ message: "Update user triggered" });
    } catch (err) {
        console.log(err);
        return res.send({ message: "Server error message" })
    }
}

const deleteUser = async function (req, res) {
    let { id } = req.params;
    try {
        await Users.deleteOne({
            id: id
        });
        return res.send({ message: "user deleted" });
    } catch (err) {
        console.log(err);
        return res.send({ message: "Server error message" })
    }
}

module.exports = { getUsers, getUserInfo, createUser, updateUser, deleteUser, doLogin };