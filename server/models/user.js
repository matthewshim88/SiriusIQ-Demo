var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
  first_name: {type: String},
  last_name: {type: String},
  email: {type: String, unique: true, lowercase: true},
  password: String,
  _reviews: [{type: Schema.Types.ObjectId, ref:"Reviews"}],
  _orders: [{type: Schema.Types.ObjectId, ref:"Orders"}]
}, { timestamps: true});

//on save hook, encrypt PW, before saving, run this function
UserSchema.pre('save', function(next) {
  var user = this;

  bcrypt.genSalt(10, function(err, salt){
    if(err){ return next(err); }

    bcrypt.hash(user.password, salt, null, function(err, hash){
      if(err){ return next(err); }

      //overwrite plain text PW with encryption, then proceed with save (next)
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(enteredPW, callback){
  bcrypt.compare(enteredPW, this.password, function(err, isMatch){
    if(err){ return callback(err); }

    callback(null, isMatch);
  })
}

module.exports = mongoose.model('User', UserSchema);
