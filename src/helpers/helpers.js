export function convertToDashes(string = 'testTest') {
  const spaced = string.replace(/([a-z])([A-Z])/g, '$1 $2');

  const arr = spaced.split(' ');

  if (arr.length === 1) return arr[0].toLowerCase();

  let finalString = '';

  arr.forEach((elem, i) => {
    finalString += elem.toLowerCase();
    if (i !== arr.length - 1) {
      finalString += '-';
    }
  });

  return finalString;
}
