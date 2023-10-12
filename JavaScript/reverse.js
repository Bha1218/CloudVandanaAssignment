function reverseWordsInSentence(sentence) {
    
    const words = sentence.split(' ');

    const reversedWords = words.map(word => reverseWord(word));

    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

function reverseWord(word) {
    return word.split('').reverse().join('');
}

const inputSentence = "Hello, world!"; // Replace with your input sentence
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);
