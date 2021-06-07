//removes object property if exists using for loop
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
  function deleteFoods(...keys){
    for(let i=0; i< keys.length;i++){
      if(foods.hasOwnProperty(keys[i]) === true){
        delete foods[keys[i]]
      }
    }
  }
  deleteFoods('oranges','plums','strawberries');
  // Only change code above this line
  
  console.log(foods);