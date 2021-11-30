const { Schema, model } = require("mongoose");

const HolSchema = new Schema({
    itemName: String,
    itemDescription: String,
    itemUrl: String,
    username: String
});
const HolRegistry = model("HolRegistry", HolSchema);

module.exports = HolRegistry;