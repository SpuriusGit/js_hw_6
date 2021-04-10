import users from "./users.js";

const getUserNames = users => {
   let arrNames = [];
   users.forEach(({name})=>{arrNames.push(name);});
   return arrNames;
  };
  console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]