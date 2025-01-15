const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);






// ACCESS_TOKEN_SECRET=9c3e216b6d608ebd0c26d58c9fd762e5110db368f64ebc6c328049be8ff84add3d1a911e577ddc31c960ae533e950a020df814c2b73c5afb6774c804130ce843


//  username:benkeshrvan
//  password:U9AArdQJSpl64tWd

//  mongodb+srv://benkeshrvan:U9AArdQJSpl64tWd@cluster0.qy4x6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//  mongodb+srv://benkeshrvan:<db_password>@cluster0.qy4x6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
