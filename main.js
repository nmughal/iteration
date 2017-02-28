
//This command splits the sentence to each individual word, using space as a seperator.
let sentence = 'A cat in a hat is a silly cat indeed.';


function wordFrequency( inputString ) {

  // remove spaces from the input string store into an array
  let arrayOfWords = inputString.split(' ');
  console.log(arrayOfWords);

  // create an object that will store the word count for each word found in the input string
  let countOfWords = {};

  // loop over the array
  arrayOfWords.forEach( function wordCount(word){
    console.log(word);

    if (countOfWords[word] === undefined) {
      countOfWords[word] = 1;
      console.log(countOfWords);
    } else {
      // countOfWords[word] = countOfWords[word] + 1;
      countOfWords[word] += 1;
      console.log(countOfWords[word]);
    }

  } );

  return countOfWords;
}

let resultObjects = wordFrequency(sentence);
