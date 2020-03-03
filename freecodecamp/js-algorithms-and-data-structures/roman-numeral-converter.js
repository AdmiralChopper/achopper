function convertToRoman(num) {
    const romanNumerals = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M",
    }

    let romanNumeralOnes = [];
    let romanNumeralTens = [];
    let romanNumeralHundreds = [];
    let romanNumeralThousands = [];

    let thousands = Math.floor(num/1000);
    let hundreds = Math.floor((num-thousands*1000)/100);
    let tens = Math.floor((num-thousands*1000-hundreds*100)/10);
    let ones = Math.floor((num-thousands*1000-hundreds*100-tens*10))

    for (let i=1;i<=ones;i++) {
        if (i<4 | (i>5 && i<9)) {
            romanNumeralOnes.push(romanNumerals[1])
        } else if (i==4 | i==9) {
            romanNumeralOnes = [];
            romanNumeralOnes.push(romanNumerals[1]+romanNumerals[i+1]);
        } else if (i==5) {
            romanNumeralOnes = [];
            romanNumeralOnes.push(romanNumerals[5]);
        }
    }

    for (let i=1;i<=tens;i++) {
        if (i<4 | (i>5 && i<9)) {
            romanNumeralTens.push(romanNumerals[10])
        } else if (i==4 | i==9) {
            romanNumeralTens = [];
            romanNumeralTens.push(romanNumerals[10]+romanNumerals[i*10+10]);
        } else if (i==5) {
            romanNumeralTens = [];
            romanNumeralTens.push(romanNumerals[50]);
        }
    }

    for (let i=1;i<=hundreds;i++) {
        if (i<4 | (i>5 && i<9)) {
            romanNumeralHundreds.push(romanNumerals[100])
        } else if (i==4 | i==9) {
            romanNumeralHundreds = [];
            romanNumeralHundreds.push(romanNumerals[100]+romanNumerals[i*100+100]);
        } else if (i==5) {
            romanNumeralHundreds = [];
            romanNumeralHundreds.push(romanNumerals[500]);
        }
    }

    for (let i=1;i<=thousands;i++) {
            romanNumeralThousands.push(romanNumerals[1000])
    }




    let romanNumeral = [...romanNumeralThousands, ...romanNumeralHundreds, ...romanNumeralTens, ...romanNumeralOnes].join("");
    console.log(romanNumeral);
 return romanNumeral;

}

convertToRoman(44);