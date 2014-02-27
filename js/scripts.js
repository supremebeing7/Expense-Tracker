var Purchase = {
  initialize: function(description, amount) {
    this.description = description;
    this.amount = amount;
  },
  create: function(description, amount) {
    var newPurchase = Object.create(Purchase);
    newPurchase.initialize(description, amount);
    if(newPurchase.valid()) {
      return newPurchase;
    } else {
      alert("Purchases must have names, and purchase amounts must be numbers, without a dollar sign.");
      return false;
    }
  },
  valid: function() {
    if (this.description === undefined || isNaN(this.amount) || this.description.length === 0) {
      return false;
    } else {
      return true;
    }
  }
} 

var Category = {
  all: [],
  initialize: function(name) {
    this.name = name;
    this.purchases = [];
  },
  create: function(name) {
    var newCategory = Object.create(Category);
    newCategory.initialize(name);
    if(newCategory.valid()) {
      Category.all.push(newCategory);
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
    if (newPurchase != false) {
      this.purchases.push(newPurchase);
      return newPurchase;      
    } else {
      return false;
    }
  },
  totalSpent: function() {
    var total = 0;
    this.purchases.forEach(function(purchase) {
      total += parseFloat(purchase.amount);
    });
    return total;
  },
  totalSpentEverywhere: function() {
    var total = 0;
    this.all.forEach(function(category) {
      total += category.totalSpent();
    });
    return total;
  }
}


$(document).ready(function() {
  var currentCategory = Object.create(Category);

  $("form#new-category").submit(function(event) {
    event.preventDefault();

    var newCategory = Category.create($("input#new-category-name").val());

    if(newCategory != false) {
      $("#categories").append("<tr><td class='category'>" + newCategory.name + "</td><td class='totalspent " + newCategory.name + "'>$" + newCategory.totalSpent() + "</td><td class='" + newCategory.name + newCategory.name + "'>" + newCategory.totalSpentEverywhere() + "</td></tr>");  
      // <td class='" + newCategory.name + newCategory.name + "'>" + newCategory.totalSpentEverywhere() + "</td>
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
        $("#purchase").append("<tr><td>" + purchase.description + "</td><td>$" + purchase.amount + "</td></tr>");
      });
    });
  });

  $("form#new-purchase").submit(function(event) {
    event.preventDefault();

    var newPurchase = currentCategory.createPurchase($("input#new-description").val(), $("input#new-amount").val());
    
    if(newPurchase != false) {
      $("#purchase").text("");
      $("#purchase").append("<tr><td>Description</td><td>Amount</td></tr>");
      currentCategory.purchases.forEach(function(purchase) {
        $("#purchase").append("<tr><td>" + purchase.description + "</td><td>$" + purchase.amount + "</td></tr>");
      });
      Category.all.forEach(function(category) {
        $("." + category.name).text("$" + category.totalSpent());
        $("." + category.name + category.name).text((category.totalSpent() / category.totalSpentEverywhere() * 100).toFixed(0) + "%");
      });
      this.reset();
    }      
  });




  $("#show-category").click(function() {
    $("#category-input").show();
  });

});
