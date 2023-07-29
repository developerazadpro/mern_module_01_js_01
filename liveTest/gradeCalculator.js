function gradeCalculator(number){
    if(number < 0 || number > 100){
        console.log('Enter valid number');
        return false;
    }

    if(number >= 90 && number <= 100){
        return 'A';
    }else if(number >= 80 && number <= 89){
        return 'B';
    }else if(number >= 70 && number <= 79){
        return 'C';
    }else if(number >= 60 && number <= 69){
        return 'D';
    }else{
        return 'F';
    }

}

let number = 81;
console.log(gradeCalculator(number));