
//This command splits the sentence to each individual word, using space as a seperator.
let sentence = 'A cat in a hat is a silly cat indeed.';


function wordFrequency( inputString ) {

  // remove spaces from the input string store into an array
  let arrayOfWords = inputString.split(' ');
  console.log(arrayOfWords);

  // create an object that will store the word count for each word found in the input string
  let countOfWords = {};
  console.log(countOfWords);

  // loop over the array
  arrayOfWords.forEach( function wordCount(word){
    console.log(word);

    if (countOfWords(word) === undefined) {
      countWords[word] = 1;
    } else {
      countWords(word) = countWords(word) + 1;
    }

  } );

  return countOfWords;

    // console.log("countOfWords. " + arrayOfWords[i] + " now contains: " + countOfWords.A);


    // check an array index and add it to countOfWords objects
    // if (arrayOfWords.includes(currentWord)) {
    //   ;
    //   console.log(currentWord);
    //   console.log(arrayOfWords[i]);
    // }
}


let countOfWords = wordFrequency(sentence);
console.log(countOfWords);
