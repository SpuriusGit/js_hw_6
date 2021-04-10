import users from "./users.js";

const getInactiveUsers = users => {
    let arr = [];
    users.forEach((user)=>{ if(user.isActive === false) arr.push(user);});
    return arr;
  };
  console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]