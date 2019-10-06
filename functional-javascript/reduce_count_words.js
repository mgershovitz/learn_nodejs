function countWords(inputWords) {
    function counter(wordsCounter, word) {
        if (word in wordsCounter) wordsCounter[word] += 1;
        else wordsCounter[word] = 1;
        return wordsCounter
    }
    return inputWords.reduce(counter, {});
}

module.exports = countWords;