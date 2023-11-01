const Code = require("../models/codeModel");
const mongoose = require("mongoose");

// GET all code
const getAllCodes = async (req, res) => {
  // req.user middleware property
  const user_id = req.user._id;
  try {
    const codes = await Code.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(codes);
  } catch (error) {
    res.status(400).json({ getAllCodesError: error.message });
  }
};

// GET one code
const getOneCode = async (req, res) => {
  const { id } = req.params;
  try {
    const code = await Code.findById(id);
    res.status(200).json(code);
  } catch (error) {
    res.status(400).json({ getOneCodeError: error.message });
  }
};

// CREATE one code
const createCode = async (req, res) => {
  const { title, description, langauge, code } = req.body;
  try {
    // req.user property comes from custom middleware
    const user_id = req.user._id
    const sentCode = await Code.create({
      title,
      description,
      langauge,
      code,
      user_id,
    });
    res.status(201).json(sentCode);
    console.log('A new code is added')
  } catch (error) {
    res.status(400).json({ createCodeError: error.message });
  }
};

// DELETE one code
const deleteCode = async(req, res) => {
  const {id} = req.params;
  try {
    console.log('deletecontroller id', id)
    const deletedCode = await Code.findByIdAndDelete(id);
    res.status(200).json(deletedCode);
    console.log(`${id} has been deleted`);
  } catch (error) {
    res.status(400).json({ deleteCodeError: error.message });
  }
};

// UPDATE one code
const updateCode = async (req, res) => {
  const { _id } = req.params;
  try {
    const updatedCode = await Code.findByIdAndUpdate({ _id });
    res.status(200).json(updatedCode);
  } catch (error) {
    res.status(400).json({ updateCodeError: error.message });
  }
};

module.exports = {
  getAllCodes,
  getOneCode,
  deleteCode,
  updateCode,
  createCode,
};
