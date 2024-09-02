const a=26, b=12, c=10;

let largestNumber=c;
if(a>b  && a>c){
    largestNumber=a;
}
else if(b>a && b>c){
    largestNumber=b;
}

console.log(`the largest number is ::${largestNumber}`)



//DRY Don't Repeat Yourself 2ND WAY of computing largestNumber using function 
let largestValue=computeLargestNumber(400,600,800);
console.log(`the largest number is ::${largestValue}`)
function computeLargestNumber(firstNumber,secondNumber,thirdNumber){

    let largestNumber=firstNumber;
    firstNumber=100;
    if(secondNumber>firstNumber  && secondNumber>thirdNumber){
        largestNumber=secondNumber;
    }
    else if(thirdNumber>secondNumber && thirdNumber>firstNumber){
        largestNumber=thirdNumber;

    }
return largestNumber

}
// write funtion using arrows

const computeLargestNumberArrowWay=(firstNumber,secondNumber,thirdNumber)=>{
   
    let largestNumber=firstNumber;
    fristNumber=100;
    if(secondNumber>firstNumber  && secondNumber>thirdNumber){
        largestNumber=secondNumber;
    }
    else if(thirdNumber>secondNumber && thirdNumber>firstNumber){
        largestNumber=thirdNumber;

    }
    return largestNumber;
}

const largestArrowWay=computeLargestNumberArrowWay(20,10,560)
console.log(`the largest number is ::${largestArrowWay}`)

// ternary way of writing 
const ternaryWayComputeLargestNumber=(a,b,c)=>{
    return(a>b && a>c)?a:((b>a && b>c)?b:c);
}
const largest=ternaryWayComputeLargestNumber(50,60,70)
console.log(`the largest number is::${largest}`)