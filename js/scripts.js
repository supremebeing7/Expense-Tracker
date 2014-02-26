var Purchase = {
  initialize: function(description, amount) {
    this.description = description;
    this.amount = amount;
  },
  create: function(description, amount) {
    var newPurchase = Object.create(Purchase);
    newPurchase.initialize(description, amount);
    return newPurchase;
  }
} 

var Category = {
  initialize: function(name) {
    this.name = name;
    this.purchases = [];
  },
  create: function(name) {
    var newCategory = Object.create(Category);
    newCategory.initialize(name);
    if(newCategory.valid()) {
      return newCategory;  
    } else {
      alert('Categories require names to be used.');
      return false;
    }
  },
  valid: function() {
    if (this.name === undefined) {
      return false;
    } else {
      return this.name.length > 0;
    }
  },
  createPurchase: function(description, amount) {
    var newPurchase = Purchase.create(description, amount);
    this.purchases.push(newPurchase);
    return newPurchase;
  }
}


$(document).ready(function() {
  var currentCategory = Object.create(Category);

  $("form#new-category").submit(function(event) {
    event.preventDefault();

    var newCategory = Category.create($("input#new-category-name").val());

    if(newCategory != false) {
      $("ul#categories").append("<li><span class='category'>" + newCategory.name + "</span></li>");  
    }
    $("#category-input").hide();
    this.reset();

    $(".category").last().click(function() {
        $(".show-purchases").show();
        currentCategory = newCategory;
        
        $("#category-header").text(newCategory.name);
        $("#purchase").text("");
        $("#purchase").append("<tr><td>Description</td><td>Amount</td></tr>");
        currentCategory.purchases.forEach(function(purchase) {
        console.log(purchase);
        $("#purchase").append("<tr><td>" + purchase.description + "</td><td>" + purchase.amount + "</td></tr>");
      });
    });
  });

  $("form#new-purchase").submit(function(event) {
    event.preventDefault();

    var newPurchase = currentCategory.createPurchase($("input#new-description").val(), $("input#new-amount").val());
    
    $("#purchase").text("");
    $("#purchase").append("<tr><td>Description</td><td>Amount</td></tr>");
    currentCategory.purchases.forEach(function(purchase) {
      console.log(purchase);
      $("#purchase").append("<tr><td>" + purchase.description + "</td><td>" + purchase.amount + "</td></tr>");
    });
    

    this.reset();      
  });




  $("#show-category").click(function() {
    $("#category-input").show();
  });
});

