let usersObj ={
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  };
function countOnline(userObj) {
    // Only change code below this line
    let count = 0;
  for(let user in userObj){
      console.log( typeof userObj[user].online)
    if(userObj[user].online === true){

        count ++;
    }
    
  }
  return count;
    // Only change code above this line
  }

  console.log(countOnline(usersObj))