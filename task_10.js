import users from "./users.js";

const getSortedUniqueSkills = users => {
    let arr = [];
    users.forEach((user)=>{
        user.skills.forEach((skill)=>{
            if(!(arr.includes(skill))){
                arr.push(skill);
            }
        })
    })
    return arr.sort();
  };
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]