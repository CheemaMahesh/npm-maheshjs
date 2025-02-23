

// Function to generate a random string
export const getString = (length?: number, specialChars?: boolean) => {
    let n = 32;
    if (Number(length) >= 1) {
        n = Number(length);
    }
    let strArray = [
        "A", "B", "G", "H", "I", "J", "K", "C", "D", "E", "F", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
        "L", "M", "N", "O", "V", "W", "4", "5", "6", "P", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "v", "w", "x", "y", "z",
        "0", "1", "2", "3", "Q", "R", "S", "T", "U", "7", "8", "9"
    ];

    // Available special chars
    const specialArray = [
        "!", "@", "#", "$", "%", "^", "&", "*",
        "-", "_", "=", "+", "?", "/", ".", "|", "~",
    ];

    // Check if special chars are allowed
    if (specialChars) {
        strArray = strArray.concat(specialArray);
    };

    // result string
    let randomString = "";

    // generate the random string
    for (let i = 0; i < n; i++) {
        randomString += strArray[Math.floor(Math.random() * strArray.length)];
    }

    return randomString;
};


// Function to generate a random integer
 export const getRandomInt = (min?: number, max?: number) => {
    if(!min) min = 0;
    if(!max) max = 100000000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


// Function to generate a random float
 export const getRandomFloat = (min?: number, max?: number, lengthAfterDot?: number) => {
    if(!min) min = 0;
    if(!max) max = 100000000;
    if(!lengthAfterDot || lengthAfterDot < 1) lengthAfterDot = 3;
    return Number((Math.random() * (max - min) + min).toFixed(lengthAfterDot));
};

// Function to check if a number is even
 export const isEven = (num?: number | string, strict?: boolean) => {
    if(typeof num !== 'number' && typeof num !== 'string') return false;
    if(strict && typeof num !== 'number') return false;
    return Number(num) % 2 === 0;
};

// Function to check if a number is odd
 export const isOdd = (num?: number | string, strict?: boolean) => {
    if(typeof num !== 'number' && typeof num !== 'string') return false;
    if(strict && typeof num !== 'number') return false;
    return Number(num) % 2 !== 0;
};

// Function caclulate the average of numbers
 export const getAverageByNumbersArray = (numbers: number [] ) => {
    if(!numbers?.length) return 0;
    if(numbers?.length === 1) return numbers?.at(0);
    return numbers?.reduce((acc, num) => acc + num, 0) / numbers?.length;
}

// Function to check if a number is prime
//  export const isPrime = (num: number) => {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// };

// Function to check if the given date-time string has passed the current date-time
 export const hasDateTimePassed = (dateTimeString: string) => {
    const inputDateTime = new Date(dateTimeString);
    const currentDateTime = new Date();
    return inputDateTime < currentDateTime;
};


