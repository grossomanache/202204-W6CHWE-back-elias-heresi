const { Schema, model } = require("mongoose");

const RobotSchema = new Schema({
  name: { type: String },
  speed: { type: Number },
  resistance: { type: Number },
  creation: { type: Date },
  url: { type: String },
});

const TestSchema = new Schema({
  name: { type: String },
});

const Robot = model("Robot", RobotSchema, "robots");
const Test = model("Test", TestSchema, "tests");

module.exports = { Robot, Test };
