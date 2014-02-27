beforeEach(function() {
  Category.all = [];
});

describe("Purchase", function() {
  describe("initialize", function() {
    it("initializes a purchase with description and amount", function() {
      var testPurchase = Object.create(Purchase);
      testPurchase.initialize("Hats", 100);
      testPurchase.description.should.equal("Hats");
      testPurchase.amount.should.equal(100);
    });
  });
  describe("create", function() {
    it("creates a purchase", function() {
      var testPurchase = Purchase.create("Hats", 100);
      Purchase.isPrototypeOf(testPurchase).should.equal(true);
    });
    it("initializes a purchase with description and amount", function() {
      var testPurchase = Purchase.create("Hats", 100);
      testPurchase.description.should.equal("Hats");
      testPurchase.amount.should.equal(100);
    });
  });
  describe('valid', function() {
    it('returns true for a purchase with a number amount', function() {
      var testPurchase = Purchase.create("Hats",123);
      testPurchase.valid().should.equal(true);
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
      var testPurchase = testCategory.createPurchase("Fedora", 50);
      Purchase.isPrototypeOf(testPurchase).should.equal(true);
    });
    it('adds the purchase to the purchases array', function() {
      var testCategory = Category.create("Hats");
      var testPurchase = testCategory.createPurchase("Bowler", 40);
      testCategory.purchases.should.eql([testPurchase]);
    })
  });
  describe('totalSpent', function() {
    it('calculates the total of all purchases in a category', function() {
      var testCategory = Category.create("Cars");
      var testPurchase = testCategory.createPurchase("Ford", 20);
      var testPurchase2 = testCategory.createPurchase("Toyota", 50);
      testCategory.totalSpent().should.equal(70);
    });
  });
  describe('totalSpentEverywhere', function() {
    it('calculates the total of all purchases in all categories', function() {
      var testCategory = Category.create("Cars");
      var testCategory2 = Category.create("Birds");
      var testPurchase = testCategory.createPurchase("Ford", 20);
      var testPurchase2 = testCategory.createPurchase("Toyota", 50);
      var testPurchase = testCategory2.createPurchase("Tweety", 250);
      var testPurchase2 = testCategory2.createPurchase("Pelican", 750);
      testCategory2.totalSpentEverywhere().should.equal(1070);
    });
  });
});
