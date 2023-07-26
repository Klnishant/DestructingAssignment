function countWordOccurences(text){
    const words=text.toLowerCase().split(/\s+/);
    const wordCountMap=new Map();

    words.forEach(word =>{
        if(wordCountMap.has(word)){
            wordCountMap.set(word,wordCountMap.get(word)+1);
        }
        else{
            wordCountMap.set(word,1);
        }
    });

    return wordCountMap;
}

const text = "This is a sample text to test the word count function. This text contains some repeated words. Test the word count function.";
const wordCount=countWordOccurences(text);
console.log("Word Occurences",wordCount);