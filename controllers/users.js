const JWT = require('jsonwebtoken');
const User = require('../models/user');

signToken = user => {
  return JWT.sign({
    iss: 'Shariq',
    sub: user.id,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1)
  }, process.env.JWT_SECRET)
}

exports.signUp = async (req, res, next) => {
  try {
    const {email , password} = req.value.body;
    //Check if there is a user with the same email
    const foundUser = await User.findOne({ "local.email": email });
    if(foundUser) {
      return res.status(403).json({success: false, message: 'Email is already taken.'})
    }
    //Create a new user
    const newUser = new User({ 
      method: 'local',
      local: {
        email: email,
        password: password
      }
    });
    await newUser.save();

    //Generate Token
    const token = signToken(newUser);
    
    //Response token
    res.status(200).json({success: true, token: token});

  } catch (e) {}
};

exports.signIn = async (req, res, next) => {
  try {
    const token = signToken(req.user);
    res.status(200).json({success: true, token: token});
  } catch (e) {}
};

exports.googleOauth = async (req, res, next) => {
  try {
    console.log('user: ', req.user)
    const token = signToken(req.user);
    res.status(200).json({success: true, token: token});
  } catch(e) {

  }
}

exports.facebookOauth = async (req, res, next) => {
  try {
    const token = signToken(req.user);
    res.status(200).json({success: true, token: token});
  } catch(e) {

  }
}

exports.secret = async (req, res, next) => {
  try {
    res.json({secret: 'resource'});    
  } catch (e) {}
};
