function rangeOfNumbers(startNum, endNum) {
  if (endNum <= startNum) {
    return [startNum];
  } else {
    const range = rangeOfNumbers(startNum, endNum - 1);
    range.push(endNum);
    return range;
  }
}

//rangeOfNumbers(6, 9) should return [6, 7, 8, 9]
