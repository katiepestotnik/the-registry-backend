const { Schema, model } = require("mongoose");

const WedSchema = new Schema({
    itemName: String,
    itemDescription: String,
    itemUrl: String,
});
const WedRegistry = model("WedRegistry", WedSchema);

module.exports = WedRegistry
