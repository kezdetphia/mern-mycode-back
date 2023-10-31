const Code = require("../models/codeModel");
const mongoose = require("mongoose");

// GET all code
const getAllCodes = async (req, res) => {
  const user_id = req.user._id;
  try {
    const codes = await User.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(codes);
  } catch (error) {
    res.status(400).json({ getAllCodesError: error });
  }
};

// GET one code
const getOneCode = async (req, res) => {
  const { _id } = req.params;
  try {
    const code = await Code.findById(_id);
    res.status(200).json(code);
  } catch (error) {
    res.status(400).json({ getOneCodeError: error });
  }
};

// CREATE one code
const createCode = async (req, res) => {
  const { title, description, langauge, code } = req.body;
  // const user_id = req.user._id
  try {
    const code = await Code.create({ title, description, langauge, code });
    res.status(201).json(code);
  } catch (error) {
    res.status(401).json({ createCodeError: error });
  }
};

// DELETE one code
const deleteCode = async (req, res) => {
  const { _id } = req.params;
  try {
    const deletedCode = await Code.findByIdAndDelete({ _id });
    res.status(400).json(deletedCode);
  } catch (error) {
    res.status(400).json({ deleteCodeError: error });
  }
};

// UPDATE one code
const updateCode = async (req, res) => {
  const { _id } = req.params;
  try {
    const updatedCode = await Code.findByIdAndUpdate({ _id });
    res.status(200).json(updatedCode);
  } catch (error) {
    res.status(400).json({ updateCodeError: error });
  }
};

module.exports = {
  getAllCodes,
  getOneCode,
  deleteCode,
  updateCode,
  createCode,
};
