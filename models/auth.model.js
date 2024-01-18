const { default: mongoose } = require("mongoose");
const encrypt = require("mongoose-encryption");

const authSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const { ENC_KEY } = process.env;

authSchema.plugin(encrypt, {
  secret: ENC_KEY,
  encryptedFields: ["password"],
});

const authModel = mongoose.model("mongooseEncr", authSchema);
module.exports = authModel;
