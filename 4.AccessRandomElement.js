function extractElement(arr){
    const [first,second,...rest]=arr;
    const last=rest.pop();

    return [first,second,last];
}

const inputArray = [1, 2, 3, 4, 5];
const extractElements=extractElement(inputArray);
console.log("Extracted Element:",extractElements);