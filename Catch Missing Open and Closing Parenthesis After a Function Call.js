//for styding
function myFunction() {
    return "You rock!";
  }
  let varOne = myFunction;
  let varTwo = myFunction();

  console.log(varTwo);
  console.log(varOne());

  
  //Fix the code so the variable result is set to the value returned from calling the function getNine.

  function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let result = getNine();
  console.log(result);