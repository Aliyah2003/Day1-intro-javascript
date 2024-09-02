
  function fizzBuzzGenerator(element){
    for (i-1;i<=element;i++){

        if (i%3==0 && i%5==0){
        console.log("fizzBuss")
        }
        else if (i%3==0){
            console.log("fizz")
        }
        else if (i%5==0){
            console.log("Buzz")
        }
        else {
            console.log(i)
    }
}
function fizzBuzzGeneratorArray(element){
    if (i%3==0 && i%5==0){
        fizzBuzzList.push("fizzBuss")
        }
        else if (i%3==0){
            fizzBuzzList.push("fizz")
        }
        else if (i%5==0){
            fizzBuzzList.push("Buzz")
        }
        else {
            fizzBuzzList.push(i)
}
}
function fizzBuzzGeneratorArray(elements{

}

module.exports={
    fizzBuzzGenerator,
    fizzBuzzGeneratorArray
}