const ciaoInstance = require('./index.js')
const checker = new ciaoInstance("https://b68dev.xyz")

test("Check Ciao Instance", async () => {
    expect(await checker.check(1)).toBe("Enter url for a Ciao Instance");
  });

