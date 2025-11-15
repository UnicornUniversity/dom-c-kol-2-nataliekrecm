/**
 * @file Main logic for converting numbers
 */

/**
 * Number goes from the ternary to the decimal system.
 * @param {string} inputNumber number to convert (eg. "+00012")
 * @param {number} inputNumberSystem from which system (tests will send 3)
 * @param {number} outputNumberSystem to which system (tests will send 10)
 * @returns {string} Converted number in decimal system (string)
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
    
    if (inputNumberSystem !== 3 || outputNumberSystem !== 10) {
        throw new Error("This converter can convert 3 -> 10");
    }

    if (inputNumber === null || inputNumber === undefined) {
        throw new Error("Your input cannot be null or undefined");
    }

    const cleaned_input = inputNumber.trim();

    let power_of_base = 1;
    let decimal_result = 0;
    let is_negative = false;
    let line_to_convert = "";

    if (cleaned_input.length === 0) {
        throw new Error("Your input is empty");
    }
    
    const firstChar = cleaned_input[0];

    if (firstChar === '-') {
        is_negative = true;
        line_to_convert = cleaned_input.substring(1);
    } else if (firstChar === '+') {
        line_to_convert = cleaned_input.substring(1);
    } else {
        line_to_convert = cleaned_input;
    }
    
    if (line_to_convert.length === 0) {
        throw new Error("Your input has only a sign");
    }

    const validDigits = "012"; 
    for (let i = 0; i < line_to_convert.length; i++) {
        const char = line_to_convert[i];
        if (validDigits.includes(char) === false) {
            throw new Error("Your input has invalid digits");
        }
    }

    for (let i = line_to_convert.length - 1; i >= 0; i--) {
        const char = line_to_convert[i];
        const n = Number(char);
        decimal_result = decimal_result + (n * power_of_base);
        power_of_base = power_of_base * 3; 
    }
    
    if (is_negative) {
        decimal_result = decimal_result * -1;
    }

    return String(decimal_result);
}

/**
 * Defines allowed input number systems.
 * @returns {Array} field of allowed input systems
 */
export function permittedInputSystems() {
  return [3];
}

/**
 * Defines allowed output number systems.
 * @returns {Array} field of allowed output systems
 */
export function permittedOutputSystems() {
  return [10];
}