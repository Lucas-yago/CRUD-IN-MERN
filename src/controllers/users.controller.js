const User = require("../models/user.model");
var jwt = require('jsonwebtoken');

const secret = "mySecret";

module.exports = {
  async index(req, res) {
    const users = await User.find(
      {},
      "user_name user_email user_type createdAt updatedAt"
    );
    res.json(users);
  },
  async create(req, res) {
    const { user_name, user_email, user_type, user_password } = req.body;
    let data = {};
    let user = await User.findOne({ user_email });

    if (!user) {
      data = { user_name, user_email, user_type, user_password };
      user = await User.create(data);
      return res.status(200).json(user);
    } else {
      return res.status(400).json(user);
    }
  },
  async details(req, res) {
    const { _id } = req.params;
    const user = await User.findOne(
      { _id },
      "user_name user_email user_type createdAt updatedAt"
    );
    res.json(user);
  },
  async delete(req, res) {
    const { _id } = req.params;
    const user = await User.findByIdAndDelete({ _id });
    return res.json(user);
  },
  async update(req, res) {
    const { _id, user_name, user_email, user_type, user_password } = req.body;
    const data = { user_name, user_email, user_type, user_password };
    const user = await User.findOneAndUpdate({ _id }, data, { new: true });
    res.json(user);
  },
  async login(req, res) {
    const { email, password } = req.body;
    User.findOne({ user_email: email, user_type: 1 }, (error, user) => {
      if (error) {
        console.log(error);
        res
          .status(500)
          .json({ error: "Internal server error please try again" });
      } else if (!user) {
        res
          .status(400)
          .json({ status: 2, error: "Email or password do not match!" });
      } else {
        const payload = { email };
        const token = jwt.sign(payload, secret, { expiresIn: "24h" });
        res.cookie("token", token, { httpOnly: true });
        res.status(200).json({
          status: 1,
          auth: true,
          token: token,
          id_client: user._id,
          user_name: user.user_name,
        });
      }
    });
  },
};
