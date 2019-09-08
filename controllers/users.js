exports.signUp = async (req, res, next) => {
  try {
    console.log('Contents:: ', req.body);
    console.log('Contents:: ', req.value);
    console.log('UserController().signUp called!');
  } catch (e) {}
};

exports.signIn = async (req, res, next) => {
  try {
    console.log('UserController().signIn called!');
  } catch (e) {}
};

exports.secret = async (req, res, next) => {
  try {
    console.log('UserController().secret called!');
  } catch (e) {}
};
