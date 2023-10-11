const { convertTimeToWords } = require("./index");

describe("Time to words", () => {
    it("Handles midnight", () => {
        const timeInWords = convertTimeToWords("0:00");
        expect(timeInWords).toBe("midnight");
    });

    it("Handles 30 - 8:30", () => {
        const timeInWords = convertTimeToWords("8:30");
        expect(timeInWords).toBe("half past eight");
    });

    // TO DO
    // it('Handles times after 30 mins - 2:45', () => {
    //   const timeInWords = convertTimeToWords('2:45');
    //   expect(timeInWords).toBe('quarter to three');
    // });

    it("check if time has value", () => {
        expect(() => convertTimeToWords("")).toThrow("Enter a time");
    });

    // - '0:00' > 'midnight' DONE

    // - '12:00' > 'midday'
    it("Handles midday", () => {
        const timeInWords = convertTimeToWords("12:00");
        expect(timeInWords).toBe("midday");
    });

    // - '2:00' > 'two o'clock'
    it("sould return two o'clock", () => {
        const timeInWords = convertTimeToWords("2:00");
        expect(timeInWords).toBe("two o'clock");
    });

    // - '4:00' > 'two o'clock'
    it("sould return four o'clock", () => {
        const timeInWords = convertTimeToWords("4:00");
        expect(timeInWords).toBe("four o'clock");
    });

    it("sould return eleven o'clock", () => {
        const timeInWords = convertTimeToWords("11:00");
        expect(timeInWords).toBe("eleven o'clock");
    });

    // - '2:03' > 'three past two'
    it("sould return three past two", () => {
        const timeInWords = convertTimeToWords("2:03");
        expect(timeInWords).toBe("three past two");
    });

    // - '2:11' > 'eleven past two'
    it("sould return eleven past two", () => {
        const timeInWords = convertTimeToWords("2:11");
        expect(timeInWords).toBe("eleven past two");
    });

    // - '2:15' > 'quarter past two'
    it("sould return quarter past two", () => {
        const timeInWords = convertTimeToWords("2:15");
        expect(timeInWords).toBe("quarter past two");
    });

    // - '2:30' > 'half past two'
    it("sould return half past two", () => {
        const timeInWords = convertTimeToWords("2:30");
        expect(timeInWords).toBe("half past two");
    });

    // - '2:33' > 'twenty seven to three'
    it("sould return twenty seven to three", () => {
        const timeInWords = convertTimeToWords("2:33");
        expect(timeInWords).toBe("twenty seven to three");
    });
    // - '2:40' > 'twenty to three'
    // - '2:45' > 'quarter to three'
    // - '2:55' > 'five to three'
});
