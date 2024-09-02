const {fizzBuzzGeneratorArray, fizzBuzzGenerator}=require("./fizzBuzz")


list=fizzBuzzGeneratorArray(15)

console.log(list)
list.array.forEach(element => {
    console.log(element)
});