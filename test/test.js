const expect = chai.expect,
  testnums = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];

describe("FlipAndInvertImage", () => {
  it("Flip and invert the image", () => {
    expect(flipAndInvertImage(testnums).toString()).to.equal(
      [[1, 0, 0], [0, 1, 0], [1, 1, 1]].toString(),
      "Please check your function!"
    );
  });
});
