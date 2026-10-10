// List of number abbreviations.
const abbr_list = [
    "",
    "K", // Thousand.
    "M", // Million.
    "B", // Billion.
    "T", // Trillion.
    "Qd", // Quadrillion.
    "Qn", // Quintillion.
    "Sx", // Sextillion.
    "Sp", // Septillion.
    "O", // Octillion.
    "N", // Nonillion.
    "De", // Decillion.
    "UD", // Undecillion.
    "DD", // Duodecillion.
    "TD", // Tredecillion.
    "QdD", // Quattuordecillion.
    "QnD", // Quindecillion.
    "SxD", // Sexdecillion.
    "SpD", // Septendecillion.
    "OcD", // Octodecillion.
    "NvD", // Novemdecillion.
    "Uncalculable"
];

// Abbreviates the given number.
export function abbreviateNr(nr){
    // Loops through the abbreviation list, skipping the last entry.
    for (let index = 0; index < abbr_list.length - 1; index += 1){
        // Checks if the number is smaller than the value required for the next abbreviation.
        // For example, numbers smaller than 1,000 use the first position, while numbers starting at 1,000 use the second position.
        // The position keeps increasing as the number gets larger.
        if (nr < 10 ** ((index + 1) * 3)){
            // Determines how many zeros the abbreviation represents.
            // Each position adds 3 zeros: K = 1,000, M = 1,000,000, B = 1,000,000,000.
            const vl = 10 ** (index * 3);

            // Divides the number by the value represented by the abbreviation to make large numbers smaller.
            // "Math.floor()" removes the decimal places from the result.
            // Then, the result is divided by 100 to adjust the number that will be displayed.
            // For example, if the result is 123.45, "Math.floor()" turns it into 123, and then 123 / 100 results in 1.23.
            const formatted_vl = Math.floor(nr / (vl / 100)) / 100;

            // Combines the number to be displayed with the selected abbreviation.
            // For example, 1.23 combined with the abbreviation K results in "1.23K".
            return `${formatted_vl}${abbr_list[index]}`;
        }
    }
    // Returns the last entry in the list if the number exceeds all available abbreviations.
    return abbr_list[abbr_list.length - 1];
}