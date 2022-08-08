// Module 16 : problem 1
calculateReturn = () => {

    let momAmount = parseInt(document.getElementById('momAmount').value);
    let orangePrice = parseInt(document.getElementById('orange').value);
    let applePrice = parseInt(document.getElementById('apple').value);
    // calculation
    let totalFruitPrice = orangePrice + applePrice;
    let returnAmount = momAmount - totalFruitPrice;
    // result
    document.getElementById("willReturn").innerHTML = `Shopkeeper will Return ${returnAmount}`

}

// Module 16 : problem 2
avgMark = () => {
    let mathsNum = parseInt(document.getElementById('mathsNum').value);
    let biologyNum = parseInt(document.getElementById('biologyNum').value);
    let chemistryNum = parseInt(document.getElementById('chemistryNum').value);
    let physicsNum = parseInt(document.getElementById('physicsNum').value);
    let banglaNum = parseInt(document.getElementById('banglaNum').value);
    // calculation
    let total = mathsNum + biologyNum + chemistryNum + physicsNum + banglaNum;
    let AverageMark = total / 5;
    // result
    document.getElementById("avgMark").innerHTML = `Average marks = ${AverageMark}`
}

// Module 16 : problem 3
twoStringConcat = () => {
    let firstSet = document.getElementById('firstSet').value;
    let secondSet = document.getElementById('secondSet').value;
    // calculation
    let fullsentence = firstSet + " " + secondSet;
    // result
    document.getElementById("twoStringConcat").innerHTML = `${fullsentence}`
}

// Module 16 : problem 4
reminderNum = () => {
    let givenNum = parseInt(document.getElementById('givenNum').value);
    // calculation
    let reminder = givenNum % 5;
    // result
    document.getElementById("reminder").innerHTML = `If you divided ${givenNum} by 5 your reminder will be :- ${reminder}`
}



// Module 17 : problem 1
ChangeFruit = () => {
    let fruitBanana = document.getElementById('fruitBanana').value;
    let fruitOrange = document.getElementById('fruitOrange').value;
    // calculation           
    let fruits = ['Apple', 'Banana', 'Orange'];

    let isAvilableOne = fruits.indexOf('Banana');
    let isAvilableTwo = fruits.indexOf('Orange');

    // console.log(isAvilable);

    fruits[isAvilableOne] = fruitBanana
    fruits[isAvilableTwo] = fruitOrange



    // result
    document.getElementById("FruitResult").innerHTML = `Index of Banana is ${isAvilableOne} and Your new Fruit Array is <pre>[ ${fruits} ]</pre>`
}

// Module 17 : problem 2
getGread = () => {
    let friendsGread = parseInt(document.getElementById('friendsGread').value);
    // calculation and result
    if (friendsGread > 100) {
        document.getElementById("gread").innerHTML = `Please input Valid Number to get your Gread`
    } else if (friendsGread >= 80) {
        document.getElementById("gread").innerHTML = `WOW!! You are breliant You get the Gread A`
    } else if (friendsGread >= 60) {
        document.getElementById("gread").innerHTML = ` You are talent You get the Gread B`
    } else if (friendsGread >= 50) {
        document.getElementById("gread").innerHTML = ` You can improve more, Your current Gread is C `
    } else if (friendsGread >= 40) {
        document.getElementById("gread").innerHTML = ` Next Time you need to do better, you got  D Grade`
    } else if (friendsGread < 40) {
        document.getElementById("gread").innerHTML = ` Try Again you got F gread and you failed on the EXAM`
    }
}


// Module 17 : problem 3

getMaxNum = () => {
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);
    let num3 = parseInt(document.getElementById('number3').value);


    // calculation
    // let bigNum = Math.max(num1, num2, num3)

    let bigNum = 0

    //practice problem 17.1
    if (num1 > num2 && num1 > num3) {
        let bigNum = num1
    } else if (num2 > num1 && num1 > num3) {
        let bigNum = num2
    }
    else {
        let bigNum = num3
    }
    //practice problem 17.2
    if (num1 === num2 || num1 === num3 || num2 === num3) {
        document.getElementById("isosceles").innerHTML = `Your Triangle is Isosceles => two sides are equal`
    } else {
        document.getElementById("isosceles").innerHTML = `Your Triangle is <span class='text-danger'>Not</span> Isosceles => two sides are not equal`
    }
    // result
    document.getElementById("bigNum").innerHTML = `Your Largest Number is :- ${bigNum}`
}



// Module 19 : problem 4

calculateSquare = () => {
    let squareOutput = parseInt(document.getElementById('squareOutput').value)
    // calculation
    let squire = squareOutput * squareOutput;
    // result
    document.getElementById("squire").innerHTML = `Your Input is ${squareOutput} you will get:- ${squire}`
}


// Module 19 : problem 5

const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2

}
console.log("Extra pizzaa problem Solution:-> ", pizza.toppings[2]);
