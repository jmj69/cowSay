const userInfo = require("./information");
const { say } = require("cowsay");
const message = say({
  text: `Hi, my name is ${userInfo.name} and I'm studying in ${userInfo.campus} campus !`,
});

console.log(message);
