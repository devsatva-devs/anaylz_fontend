import dictionary from "../dictionary";
import methods from "../methods";

const { auth } = dictionary;
const { post } = methods;

const AuthService = {
  userRegisterService: (body: {}) => {
    return post(auth.registerUser(), body);
  },
  loginService: (body: {}) => {
    return post(auth.login(), body);
  },
  logout: () => {
    return post(auth.logout(), {});
  },
};

export default AuthService;
