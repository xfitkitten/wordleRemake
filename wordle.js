// Import test file as string and split it into an array
const string = require("fs").readFileSync("./wordle-words.txt", 'utf8')
let wordList = string.split("\n")

function selectAWord(arrayOfWords) {
    return arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)]
}

console.log(selectAWord(wordList))