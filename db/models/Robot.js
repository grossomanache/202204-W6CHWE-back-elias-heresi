const { Schema, model } = require("mongoose");

const RobotSchema = new Schema({
  name: { type: String },
  speed: { type: Number },
  resistance: { type: Number },
  creation: { type: Date },
  url: { type: String },
});

const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
