const TIME_DICT = new Object({
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    16: "sixteen",
    17: "seventeen",
    18: "eightteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty one",
    22: "twenty two",
    23: "twenty three",
    24: "twenty four",
    25: "twenty five",
    26: "twenty six",
    27: "twenty seven",
    28: "twenty eight",
    29: "twenty nine",

    15: "quarter",
    30: "half",
});

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
    // check if time has value
    if (!time?.trim()) {
        throw new Error("Enter a time");
    }

    let [hour, minute] = time.split(":");

    hour = Number(hour);
    minute = Number(minute);

    // TODO: real code goes here!
    if (minute === 0) {
        if (hour === 0) return "midnight";
        if (hour === 12) return "midday";

        return `${TIME_DICT[hour]} o'clock`;
    }
    // else if (minute === 15) {
    //     return
    // }

    // if (minute < 30 || minute === 30) {
    if (minute > 30) {
        return `${TIME_DICT[60 - minute]} to ${TIME_DICT[hour + 1]}`;
    }

    return `${TIME_DICT[minute]} past ${TIME_DICT[hour]}`;

    return "half past eight";
}

module.exports = { convertTimeToWords };
