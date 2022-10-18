import User from "../models/user.js";

const registerUser = async (req, res) => {
  console.log(req.body);
  const { firstName, email, password,role  } = req.body;
  if (!firstName || !email || !password) {
    throw new Error("please PROVIDE firstname and email ");
  }

  const emailExists = await User.findOne({ email });
  if (emailExists) {
    throw new Error("this email already exists ");
  }

  const user = await User.create({ firstName, email, password,role });
  
  const token = user.createtoken();

  res.status(201).json({
    status: "success",
    data: {
      data: user,
      token,
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error("email or password missing");
  }

  const userr = await User.findOne({ email });
  if (!userr) {
    throw new Error("anuthorized user");
  }
  console.log(password);
  const isPasswordCorrect = await userr.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new Error("unauthorised user--");
  }
  
  console.log(userr.role)
  const Role = userr.role;
  req.Role = Role;

  // console.log(req.body.Role)
  // console.log(userr.role)
  // console.log(req.body.role)
  const token = await userr.createtoken();
  res.json({
    status: "success",
    data: {
      data: userr,
      token: token,
      msg: "succefully logid in",
    },
  });
};

const updateUser = (req, res) => {
  res.json({
    msg: "updated user",
  });
};
export { registerUser, login, updateUser };
