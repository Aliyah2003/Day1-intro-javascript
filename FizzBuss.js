function fizzBuzzGenerator(elements){
    for(i=1;i<=elements;i++){

        if(i%3==0 && i%5==0){
            console.log("FizzBuzz")
        }
        else if(i%3==0){
            console.log("Fizz")
        }
        else if(i%5==0){
            console.log("Buzz")
        }
        else{
            console.log(i)
        }


    }

   
}

function fizzBuzzGeneratorArray(elements){
    fizzBuzzList=[]
    for(i=1;i<=elements;i++){

        if(i%3==0 && i%5==0){
            fizzBuzzList.push("FizzBuzz")
        }
        else if(i%3==0){
            fizzBuzzList.push("Fizz")
        }
        else if(i%5==0){
            fizzBuzzList.push("Buzz")
        }
        else{
            fizzBuzzList.push(i)
        }
       
    }

    return fizzBuzzList;

   
}

//list=fizzBuzzGeneratorArray(15)
//console.log(list)
// list.forEach(element => {
//     console.log(element)
// });

module.exports={
    fizzBuzzGenerator,
    fizzBuzzGeneratorArray
}