const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  text: {
    type: String,
  },
});
const Contact =
  mongoose.models?.Contact || mongoose.model("Contact", ContactSchema);

module.exports = Contact;
