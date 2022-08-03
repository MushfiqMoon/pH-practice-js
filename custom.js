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