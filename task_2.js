import users from "./users.js";

const getUsersWithEyeColor = (users, color) => {
    let arr = [];
    users.forEach((user)=>{if(user.eyeColor === color) arr.push(user);});
    return arr;
  };
  console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]