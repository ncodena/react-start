import { add, substract } from "./utils";

//Example tests (to make functions to work):

describe("add", () => {
    it("this test adds two numbers together", () => {
        const result = add(1, 2);
        expect(result).toBe(3);
    })
})

describe("substract", () => {
    it("this test should return the difference between two numbers", () => {
        const result = substract(5, 3);
        expect(result).toBe(2);
    })
})

//Example tests (to make functions to fail)

describe("addFail", () => {
    it("this test adds two numbers together", () => {
      const result = add(5, 3);
      expect(result).toBe(9);
    });
  });

describe("substractFail", () => {
    it("this test should return the difference between two numbers", () => {
      const result = substract(5, 3);
      expect(result).toBe(3);
    });
});
