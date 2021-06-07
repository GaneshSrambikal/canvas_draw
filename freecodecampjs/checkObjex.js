let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
//   function isEveryoneHere(userObj) {
//     // Only change code below this line
//    if(
//        'Alan' in userObj && 
//        'Sarah' in userObj &&
//        'Ryan' in userObj &&
//        'Jeff' in userObj 
//        ){
//        return true
//    }else{
//        return false
//    }

//     // Only change code above this line
//   }
  // or
  function isEveryoneHere(obj) {
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
      obj.hasOwnProperty(name)
    );
  }
  console.log(isEveryoneHere(users));
