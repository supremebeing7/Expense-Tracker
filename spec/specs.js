describe("Purchase", function() {
  describe("initialize", function() {
    it("initializes a purchase with description and amount", function() {
      var testPurchase = Object.create(Purchase);
      testPurchase.initialize("Hats", "$100");
      testPurchase.description.should.equal("Hats");
      testPurchase.amount.should.equal("$100");
    });
  });
  describe("create", function() {
    it("creates a purchase", function() {
      var testPurchase = Purchase.create("Hats", "$100");
      Purchase.isPrototypeOf(testPurchase).should.equal(true);
    });
    it("initializes a purchase with description and amount", function() {
      var testPurchase = Purchase.create("Hats", "$100");
      testPurchase.description.should.equal("Hats");
      testPurchase.amount.should.equal("$100");
    });
  });
});

describe('Category', function() {
  describe('initialize', function() {
    it('initializes a category with a name', function() {
      var testCategory = Object.create(Category);
      testCategory.initialize("Hats");
      testCategory.name.should.equal("Hats");
    });
    it('initializes a category with an empty array of purchases', function() {
      var testCategory = Object.create(Category);
      testCategory.initialize("Hats");
      testCategory.purchases.should.eql([]);
    });
  });
  describe('create', function() {
    it('creates a Category', function() {
      var testCategory = Category.create("Hats");
      Category.isPrototypeOf(testCategory).should.equal(true);
    });
    it('initializes a Category upon creation', function() {
      var testCategory = Category.create("Hats");
      testCategory.name.should.equal("Hats");
    });
  });
  describe('valid', function() {
    it('returns true for a valid Category', function() {
      var testCategory = Category.create("Hats");
      testCategory.valid().should.equal(true);
    });
    it('returns false for an invalid Category', function() {
      var testCategory = Category.create("");
      testCategory.should.equal(false);
    });
  });
  describe('createPurchase', function() {
    it('creates a purchase inside of a category', function() {
      var testCategory = Category.create("Hats");
      var testPurchase = testCategory.createPurchase("Fedora", "$50");
      Purchase.isPrototypeOf(testPurchase).should.equal(true);
    });
    it('adds the purchase to the purchases array', function() {
      var testCategory = Category.create("Hats");
      var testPurchase = testCategory.createPurchase("Bowler", "$40");
      testCategory.purchases.should.eql([testPurchase]);
    })
  });
});
