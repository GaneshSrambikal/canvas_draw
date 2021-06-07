// Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.

let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  console.log(Object.entries(users))
  function getArrayOfUsers(obj) {
    // Only change code below this line
//   let newObj =[];
//   for(let ob in obj){
//   newObj.push(ob)
//   }
//   return newObj
    // Only change code above this line
    // or
    return Object.keys(obj)
  }
  
  console.log(getArrayOfUsers(users));
