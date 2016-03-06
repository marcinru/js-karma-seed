/* Batman Quotes
 Batman & Robin have gotten into quite a pickle this time. The Joker has mixed up their iconic quotes and also
 replaced one of the characters in their names, with a number. They need help getting things back in order.

 Implement the getQuote method which takes in an array of quotes, and a string comprised of letters and a single
 number (e.g. "Rob1n") where the number corresponds to their quote indexed in the passed in array.

 Return the quote along with the character who said it:
 getQuote(["I am vengeance. I am the night. I am Batman!",
 "Holy haberdashery, Batman!",
 "Let's put a smile on that faaaceee!"], "Rob1n")
 // should return: "Robin: Holy haberdashery, Batman!"

 Hint: You are guaranteed that the number in the passed in string is placed somewhere after
 the first 3 characters of the string. The quotes either belong to Batman, Robin, or Joker.
 */

describe("getQuote", function () {
    //var quotes = ["WHERE IS SHE?!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"];

    it("returns hero name", function () {
        expect(getHerosName("Rob1n")).toBe("Robin");
    });

    /*it("returns a Robin's quote", function () {
        expect(getQuote(quotes, "Rob1n")).toBe("Robin: Holy haberdashery, Batman!");
    });
    it("returns a Joker's quote", function () {
        expect(getQuote(quotes, "Joke2")).toBe("Joker: Let's put a smile on that faaaceee!");
    });
    it("returns a Batman's quote", function () {
        expect(getQuote(quotes, "Batm0n")).toBe("Batman: WHERE IS SHE?!");
    });*/
});
