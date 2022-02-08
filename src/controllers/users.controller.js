const User = require("../models/user.model");

module.exports = {
    async index(req, res){
        const users = await User.find({},"user_name user_email user_type createdAt updatedAt");
        res.json(users);
    },
    async create(req, res){
        const {user_name, user_email, user_type, user_password} = req.body;
        let data = {};
        let user = await User.findOne({user_email});

        if(!user){
            data = {user_name, user_email, user_type, user_password};
            user = await User.create(data);
            return res.status(200).json(user);
        }else{
            return res.status(400).json(user);
        }
    },
    async details(req, res){
        const {_id} = req.params;
        const user = await User.findOne({_id},"user_name user_email user_type createdAt updatedAt");
        res.json(user);
    },
    async delete(req, res){
        const {_id} = req.params;
        const user = await User.findByIdAndDelete({_id})
        return res.json(user);
    },
    async update(req, res){
        const {_id, user_name, user_email, user_type, user_password} = req.body;
        const data = {user_name, user_email, user_type, user_password};
        const user = await User.findOneAndUpdate({_id}, data, {new:true});
        res.json(user);
    },
}