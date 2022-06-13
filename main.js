function isIsogram(str) {
  let count = 0;
  let result = false;
  for (let i = 0; i < str.length; i++) {
    // str[i];

    for (let j = 0; j < str.length; j++) {
      //str[j];

      //console.log(str[i] + ' to ' + str[j]);   //Visualise Comparison
      if (str[i].toUpperCase() == str[j].toUpperCase()) {
        count++;
      }
    }
  }
  count = count / str.length;
  console.log("count = " + count);

  if (count > 1) {
    result = false;
  } else {
    result = true;
  }

  console.log(result);
  return result;
}

isIsogram("moOse");
