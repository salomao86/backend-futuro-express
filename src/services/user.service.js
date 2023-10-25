const user = require("../models/user.model");

const findUserService = () => {
  return user.find();
};

const findUserByIdService = (id) => {
  return user.findById(id);
};

const createUserService = async (body) => {
  return await user.create(body);
};

const updateUserService = async (id, body) => {
  const corpo =  await user.findByIdAndUpdate(id, body, { returnDocument: "after" });
  return corpo;
};

const deleteUserService = async (id) => {
  return user.findByIdAndRemove(id);
};

module.exports = {
  findUserService,
  findUserByIdService,
  createUserService,
  updateUserService,
  deleteUserService
};
