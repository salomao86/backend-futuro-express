const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  nome: { type: String, required: true }, 
  email: { type: String, unique: true, required: true },
  senha: { type: String, required: true },
  createdAt: { type: Date, required: true, default: new Date() }
});

userSchema.pre("save", async function (next) {
  if (this.senha) {
    this.senha = await bcrypt.hash(this.senha, 10);
  }
  next();
});

userSchema.pre("findOneAndUpdate", async function (next) {
  if (this._update.senha) {
    const docToUpdate = await this.model.findOne(this.getQuery());
    if (docToUpdate.senha !== this._update.senha) {
      const newPassword = await bcrypt.hash(this._update.senha, 10)
      this._update.senha = newPassword
    }
  }
  next();
});

const user = mongoose.model("Users", userSchema);

module.exports = user;