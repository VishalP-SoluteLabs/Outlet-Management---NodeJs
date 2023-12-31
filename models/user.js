const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  userRole: {
    type: String,
    enum: {
      values: ["admin", "outlet-manager"], //user can choose from this only
      message: `This role is not valid, use from ["admin", "outlet-manager"] this only` //{VALUE} it means the value that the user provides
    } //message will show error if the value doen't match from the above array
  },
  refreshTokens: {
    type: [String],
  }
});

module.exports = mongoose.model('User', userSchema);