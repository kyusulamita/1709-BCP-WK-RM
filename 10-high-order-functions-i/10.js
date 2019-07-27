function mySplice(arr, strtIdx, dltCnt, elem){
  // starting at strtIdx
  // splice out `dltCnt` elems
  // return those elements from this function
  
  // insert elem, at strtIdx
  
  // endIdx = strtIdx + dltCnt; 2
  
  
  // elems before, strtIdx (keep) [0...strIdx -1 ]
  // elems in between, splice out [startIdx... endIdx - 1]
  // newElem
  // elems after splice, also keep [endIdx...arr.length]
  
  const endIdx = strtIdx + dltCnt;  // 2 // arr.slice(0, strtIdx)
  const beforeSplice = []; //[1]  // arr.slice(strtIdx, endIdx)
  const elemsToBeSpliced = [];  //[2]  // arr.slice(endIdx)
  const afterSplice = []; //[3]
  // slice
  for (let i = 0; i < arr.length; i++){
    if (i < strtIdx){
      beforeSplice.push(arr[i])
    } else if (i < endIdx){
      elemsToBeSpliced.push(arr[i])
    }  else {
      afterSplice.push(arr[i]);
    }
  }
  
  // elem = 'apples'
  // [...beforeSplice, elem, ...afterSplice]
  
  // arr = beforeSplice.concat(elem, afterSplice)
  // [1, 2, 3]
  while(arr.length){
    arr.pop();
  }
  // []
  
  for (let i = 0; i < beforeSplice.length; i++){
    arr.push(beforeSplice[i])
  }
  // beforeSplice.forEach(function(elem){
  //   arr.push(elem)
  // })
  // arr => [1]
  if (elem){
    arr.push(elem)
  }
  // [1, 'apples']
  
  for (let i = 0; i < afterSplice.length; i++){
    arr.push(afterSplice[i])
  }
  
  // [1, 'apples', 3]
  
  return elemsToBeSpliced;
}