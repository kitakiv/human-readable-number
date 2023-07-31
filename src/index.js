module.exports = function toReadable (number) {
  let string = number.toString();
  let len = string.length;
  let result = '';
  const masiv1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const masiv2 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  const masiv4 = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const masiv5 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  if (len > 2) {
    result = `${result} ${masiv1[parseInt(string[0])]} hundred`
  }
  if (len > 1) {
    let string1 = string + ' ';
    if (parseInt(string1.slice(-3, -1)) < 20 && parseInt(string1.slice(-3, -1)) > 10) {
        result = `${result} ${masiv4[parseInt(string.at(-1))]}`
    } else {
        result = `${result} ${masiv2[parseInt(string.at(-2))]} ${masiv1[parseInt(string.at(-1))]}`
    }
  }
  if (len === 1) {
    result = masiv5[parseInt(string[0])];
  }
  result = result.trim();
  result = result.replaceAll('  ', ' ');
  return result;
}
