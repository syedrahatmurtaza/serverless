import SumController from "../../src/controllers/sum.controller";

test("Correct Sum Should Be Returned", () => {
  const sumController = new SumController();
  expect(sumController.add(1, 4)).toBe(5);
  expect(sumController.add(5, 4)).toBe(9);
});
