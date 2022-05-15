const { Schema, model } = require("mongoose");

const RobotSchema = new Schema({
  name: { type: String },
  speed: { type: Number, min: 0, max: 10 },
  resistance: { type: Number, min: 0, max: 10 },
  creation: { type: String },
  description: { type: String },
  url: { type: String },
});

const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
