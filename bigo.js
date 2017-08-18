//O(1) example, constant time complexity regardless of array size
function insert(array, newItem){
  return array.push(newItem);
}

//O(n) example, loops through the array once
function finder(array, term){
  for(let i = 0; i < array.length; i++){
    if(array[i] == term) return i;
  }
  return -1;
}

//O(n^2) example, nested looping through the array
function bubbleSort(array){
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length - i - 1; j++){
      if(array[j] > array[j + 1]){
        [array[j],array[j + 1]] = [array[j + 1],array[j]]
        
      }
    } 
  }
  return array;
}
