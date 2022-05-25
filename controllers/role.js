const fs = require("fs");
const path = require("path");
const Role = require("../models/role");

exports.getRole = async (req, res, next) => {
  try {
    const roles = await Role.find();
    res.status(200).json({
      message: "All roles",
      roles: roles,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
