function sum(num){
    var total = 0;
    for(let i = 0; i<=num; i++){
        total += i
        
    }
    return total;
    
}

sum(4);
/* 
function getArraySum(a){
    var total=0;
    for(var i in a) { 
        total += a[i];
    }
    return total;
}

var payChecks = [123,155,134, 205, 105]; 
var weeklyPay= getArraySum(payChecks); */