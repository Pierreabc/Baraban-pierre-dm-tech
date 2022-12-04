function superieur(num) {
    
  for (let i = 0; i < num.length; i++) {
      for (let x = i + 1; x < num.length; x++) {
          if (num[i] > num[x]) {
              
              let temp = num[i];
              num[i] = num[x];
              num[x] = temp;
              
          }
      }
  }
  return num;
}



console.log(superieur([78, 57, 39, 2, 21]));
