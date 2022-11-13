function array(arr){
    let result = arr.sort(function (a, b) {  return a - b;  })
    console.log(result)
    return result
}


array([5,88,76,8,736,10])