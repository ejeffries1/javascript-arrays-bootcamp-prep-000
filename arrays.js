var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
array = chocolateBars;
candyArr = array;

function addElementToBeginningOfArray(array, element){
  candyArr.unshift(element);
  return candyArr;
}

function destructivelyAddElementToBeginningOfArray(array, element){ candyArr.push(element);
  return candyArr;
}

function addElementToEndOfArray(array, element){
  candyArr.push(element);
  return candyArr;
}

function destructivelyAddElementToEndOfArray(){
  candyArr.unshift(element);
  return candyArr;
}

function accessElementInArray(array, index){
  return array(index);
}

function destructivelyRemoveElementFromBeginnningOfArray(array, element){
  candyArr.shift(element);
  return candyArr;
}

function removeElementFromBeginningOfArray(array, element){
  candyArr.slice(element);
  return candyArr;
}

function destructivelyRemoveElementFromEndOfArray(array, element){ candyArr.push(element);
  return candyArr;
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1);
}