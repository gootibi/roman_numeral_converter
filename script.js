const inputNumber = document.getElementById("number");
const result = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");

const convertToRoman = () => {
    let romanNumeral = "";
    let num = parseInt(inputNumber.value);
    
    if (!inputNumber.value || isNaN(num)) {
        return "Please enter a valid number";
    } else if (num < 0) {
        return "Please enter a number greater than or equal to 1";
        
    } else if (num >= 4000) {

        return "Please enter a number less than or equal to 3999";
    }

    const pair = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }

    for (let rome in pair) {
        while (num >= pair[rome]) {
            romanNumeral += rome;
            num -= pair[rome];
        }
    }

    return romanNumeral;
}

convertBtn.addEventListener("click", (e) => {
    result.textContent = convertToRoman();
});