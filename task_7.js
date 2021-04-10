import users from "./users.js";

const calculateTotalBalance = users => {
      let total = 0;
      users.forEach((el)=>{ total += el.balance;});
      return total;
  };
  console.log(calculateTotalBalance(users)); // 20916