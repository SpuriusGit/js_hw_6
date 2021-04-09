import users from "./users.js";

const getUsersWithGender = (users, gender) => {
    let arr = [];
    users.forEach((user)=>{
        if(user.gender === gender){
            arr.push(user.name);
        }
    });
    return arr;
  };
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]