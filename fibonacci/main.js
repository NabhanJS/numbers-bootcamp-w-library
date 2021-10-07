function fibonacci(num){
    let num1 = 0;
    let num2 = 1;  
    let i = 0;
    let result;

   for(let i = 0; i<num; i++){
       result = num1 + num2;
       num1 = num2;
       num2 = result;

   }
    return num2;

}

fibonacci(8);