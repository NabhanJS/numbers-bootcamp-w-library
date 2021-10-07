function ageControll(age){
    let pris;
    if(age <= 17){
        pris = 10;


    }else if(age >=65){
        pris = 15;

    }else{
        pris = 20;
    }
    return pris;

}

ageControll(30);