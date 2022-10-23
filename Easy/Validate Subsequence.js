function validateSubsequence(array, sequence) {
  let arrayPointer = 0;
  let seqPointer = 0;

  while (seqPointer <= sequence.length - 1) {
    if (sequence[seqPointer] === array[arrayPointer]) {
      seqPointer++;
    } else {
      arrayPointer++;
    }
    if (seqPointer === sequence.length - 1) return true;
  }
  return false;
}
validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);
