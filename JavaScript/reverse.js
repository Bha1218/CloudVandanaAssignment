function reverseWordsInSentence(sentence) {
    // Split the sentence into words using space as the delimiter
    const words = sentence.split(' ');

    // Reverse each word and store them in a new array
    const reversedWords = words.map(word => reverseWord(word));

    // Join the reversed words to form the reversed sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

function reverseWord(word) {
    // Convert the word to an array of characters, reverse it, and join it back into a word
    return word.split('').reverse().join('');
}

const inputSentence = "Hello, world!"; // Replace with your input sentence
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);
