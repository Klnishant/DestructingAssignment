function swapValues(x,y){
    //destructing value
    [x,y]=[y,x];

    return [x,y];
}

let x=5;
let y=10;

const swapedNum=swapValues(x,y);
console.log("Swaped Value:",...swapedNum);