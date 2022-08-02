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