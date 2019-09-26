const sortWithExclusions = (array, exclusionCallback, compareFunction) => {
  const indicesToExclude = [];
  const arrayToSort = [];
  for (let i = 0; i < array.length; i++) {
    if (exclusionCallback(array[i], i)) {
      indicesToExclude.push(i);
    } else {
      arrayToSort.push(array[i]);
    }
  }

  arrayToSort.sort(compareFunction);

  for (let i = 0; i < indicesToExclude.length; i++) {
    arrayToSort.splice(indicesToExclude[i], 0, array[indicesToExclude[i]]);
  }

  return arrayToSort;
};

export default sortWithExclusions;
