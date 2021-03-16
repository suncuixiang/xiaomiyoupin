import Mock from "mockjs";
import avatar from "../assets/avatar.jpg";

function success(options) {
  return {
    code: 0,
    codeText: "OK",
    ...options
  };
}

function fail() {
  return {
    code: 1,
    codeText: "NO",
    message: "error"
  };
}

const login = options => {
    let user = JSON.parse(options.body)
    return success({
              name: user.username,
              token: "user-token",
              avatar: avatar
            });
};

Mock.mock(new RegExp("/mockapi/login"), "post", login);

Mock.mock(new RegExp("/mockapi/signout"), "post", () => success());
