import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
    let arr = [];
    users.forEach((user)=>{
        if(user.friends.includes(friendName) == true){
            arr.push(user.name);
        }
    });
    return arr;
  };
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]