const name = "Jean-Marie";
const campus = "Lyon";

function cowSay() {
  console.log(`My passions are :`);
  for (let i = 0; i < passions.length; i += 1) {
    console.log(`- ${passions[i]}`);
  }
}

module.exports = {
  name: name,
  campus: campus,
};
