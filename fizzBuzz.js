function fizzBuzz(num){
    if(num % 3 == 0 && num % 5 == 0){
        return "fizzBuzz";        
    }else if(num % 3 == 0){
        return "Fizz"
    }else if(num % 5 == 0){
        return "buzz"
    }else{
        return num
    }
}

console.log(fizzBuzz(16))