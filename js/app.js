function transformString(inputString) {
    let transformedString = '';
    for (let i = 0; i < inputString.length; i++) {
      if (i > 0) {
        transformedString += '-';
      }
      transformedString += inputString[i].toUpperCase();
      for (let j = 0; j < i; j++) {
        transformedString += inputString[i];
      }
    }
    return transformedString;
  }


  let result = transformString('hello');
console.log(result); 