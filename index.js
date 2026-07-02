require("datejs");

function combineUsers(...args) {
  let combinedObject = {
    users: [],
  };

  // for each of the stuff in the args, combine them with
  for (let array of args) {
    combinedObject.users = [...combinedObject.users, ...array]; // spread
  }

  // add date using dot operator to the object
  combinedObject.merge_date = new Date.today().toString("M/d/yyyy");
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== "undefined" && { combineUsers }),
};
